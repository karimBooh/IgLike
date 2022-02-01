import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Base, User } from '@karibooh/ig-interfaces';

@Schema()
export class BaseSchema implements Base {
    _id: mongoose.Types.ObjectId;

    @Prop({ default: new Date(), required: true })
    creationDate: Date;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'ProfileSchema' })
    creationPId?: mongoose.Types.ObjectId | User;

    @Prop()
    updateDate?: Date;

    @Prop({ default: false, select: false })
    deleted?: boolean;
}

export const schema = SchemaFactory.createForClass(BaseSchema);
