import { BadRequestException, Injectable, InternalServerErrorException, Type } from '@nestjs/common';
import { FilterQuery, Model, Query, HydratedDocument } from 'mongoose';
import { Base } from '@karibooh/ig-interfaces';
import { ObjectId } from 'bson';

export type PopulateOptions<T extends Base> = {
    path?: keyof T;
    select?: string;
    match?: any;
    model?: string | Model<any>;
    options?: QueryParams<T>;
    populate?: PopulateOptions<T> | PopulateOptions<T>[];
};

export type QueryParams<T extends Base> = {
    select?: keyof T | (keyof T)[];
    populate?: PopulateOptions<T> | PopulateOptions<T>[];
    where?: FilterQuery<T>;
    sort?: string;
    limit?: number;
};
@Injectable()
export class BaseModelService<T extends Base> {
    constructor(private model: Model<T>, private schema?: Type<T>) {}

    public async create(data: T, profileId?: ObjectId, populateOptions?: PopulateOptions<T>): Promise<T>;
    public async create(data: T[], profileId?: ObjectId, populateOptions?: PopulateOptions<T>): Promise<T[]>;
    public async create(data: T | T[], profileId?: ObjectId, populateOptions?: PopulateOptions<T>): Promise<T | T[]> {
        if (data instanceof Array) {
            data.forEach((item) => (item.creationPId = profileId));
        } else {
            data.creationPId = profileId;
        }

        try {
            console.log('hey');
            const createdData = await this.model.create(data);
            const res: T | T[] | undefined = await this.read(
                createdData instanceof Array ? createdData.map((item) => item._id) : createdData._id,
                { populate: populateOptions }
            );

            if (!res || (res instanceof Array && !res.length)) {
                throw new InternalServerErrorException();
            }
            return res;
        } catch (error) {
            throw new BadRequestException(error);
        }
    }

    /**
     * Returns a document with the given _id
     * @param id
     * @param queryParams
     */
    public read(id: ObjectId, queryParams?: QueryParams<T>): Promise<T | undefined>;
    public read(ids: ObjectId[], queryParams?: QueryParams<T>): Promise<T[]>;
    public read(id: ObjectId | ObjectId[], queryParams?: QueryParams<T>): Promise<T | T[] | undefined>;
    public async read(id: ObjectId | ObjectId[], queryParams?: QueryParams<T>): Promise<T | T[] | undefined> {
        let query: Query<HydratedDocument<T> | HydratedDocument<T>[] | null, any>;

        if (id instanceof Array) {
            query = this.model.find({ _id: { $in: id } } as FilterQuery<T>);
        } else {
            query = this.model.findById(id);
        }

        this._applyQueryParams(query, queryParams);
        const item = await query.exec();

        if (item) {
            return item;
        }
    }

    /**
     *
     * @param queryParams
     */
    public async readAll(queryParams?: QueryParams<T>): Promise<T[]> {
        const query = this.model.find();
        this._applyQueryParams(query, queryParams);

        return await query.exec();
    }

    private _applyQueryParams(
        query: Query<HydratedDocument<T> | HydratedDocument<T>[] | null, unknown>,
        queryParams?: QueryParams<T>
    ) {
        if (!queryParams) {
            return;
        }

        if (queryParams.select) {
            query.select(queryParams.select);
        }
        if (queryParams.populate) {
            queryParams.populate =
                queryParams.populate instanceof Array ? queryParams.populate : [queryParams.populate];
            for (const populate of queryParams.populate) {
                query.populate(populate);
            }
        }
        if (queryParams.where) {
            for (const i in queryParams.where) {
                query.where(i).equals(queryParams.where[i]);
            }
        }
        if (queryParams.sort) {
            query.sort(queryParams.sort);
        }
        if (queryParams.limit) {
            query.limit(queryParams.limit);
        }
    }
}
