import { Injectable } from '@nestjs/common';
import { BaseModelService } from '../shared/base-model/base-model.service';
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from '../schemas/user.schema';
import { Model } from 'mongoose';
import { User } from '@karibooh/ig-interfaces';

@Injectable()
export class UserService extends BaseModelService<User> {
    constructor(@InjectModel(UserSchema.name) readonly userModel: Model<User>) {
        super(userModel, User);
    }

    async getByEmailAndPassword(user: Pick<User, 'password' | 'email'>): Promise<User> {
        return await this.userModel.findOne({ email: user.email, password: user.password }).exec();
    }
}
