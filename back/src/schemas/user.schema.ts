import { EGender, User } from '@karibooh/ig-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../shared/base-model/base-model.schema';

@Schema()
export class UserSchema extends BaseSchema implements User {
    @Prop()
    name: string;

    @Prop()
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
    password: string;

    @Prop()
    isAdmin?: boolean;
}

export const schema = SchemaFactory.createForClass(UserSchema);
