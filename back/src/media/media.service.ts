import { Injectable } from '@nestjs/common';
import { Media } from '@karibooh/ig-interfaces';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Connection, Model } from 'mongoose';
import { MediaSchema } from '../schemas/media.schema';
import { GridFSBucket } from 'mongodb';
import { Readable } from 'stream';
import { ObjectId } from 'bson';

@Injectable()
export class MediaService {
    bucket: GridFSBucket;

    constructor(
        @InjectModel(MediaSchema.name) readonly mediaModel: Model<Media>,
        @InjectConnection() connection: Connection
    ) {
        this.bucket = new GridFSBucket(connection.db);
    }

    async readFromUser(userId: ObjectId): Promise<Array<Media>> {
        return await this.mediaModel
            .find({
                $where: function () {
                    return this.metadata.use == userId;
                }
            })
            .exec();
    }

    async uploadFile(readable: Readable, media: Media) {
        readable
            .pipe(this.bucket.openUploadStream(media.fileName, { metadata: media.metadata }))
            .on('error', (error) => {
                console.log(error);
            })
            .on('finish', (data: unknown) => {
                console.log(data);
            });
    }
}
