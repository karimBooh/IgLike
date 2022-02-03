import { EGender, User } from '@karibooh/ig-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseSchema } from '../shared/base-model/base-model.schema';
import * as bcrypt from 'bcrypt';

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

    @Prop({
        set: (plaintext: string) => {
            if (/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[$&+,:;=?@#|'<>*()%!]).{8,}$/.test(plaintext)) {
                return bcrypt.hashSync(plaintext, bcrypt.genSaltSync());
            }
            return 'error';
        },
        validate: {
            validator: (v: string) => {
                return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}$/.test(v);
            },
            message: 'Invalid password format'
        },
        select: false
    })
    password: string;

    @Prop()
    isAdmin?: boolean;
}

export const schema = SchemaFactory.createForClass(UserSchema);
