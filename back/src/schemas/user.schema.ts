import { EGender, User } from '../../../interfaces/user';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { BaseSchema } from '../shared/base-model/base-model.schema';

@Schema()
export class UserSchema extends BaseSchema implements User {
    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    name: string;

    @Prop({ type: mongoose.Schema.Types.ObjectId, required: true })
    username: string;

    @Prop({
        match: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    })
    email: string;

    @Prop()
    phone?: string;

    @Prop()
    gender: EGender;

    @Prop()
    birthday: Date;

    @Prop()
    isAdmin?: boolean;
}

export const schema = SchemaFactory.createForClass(UserSchema);
