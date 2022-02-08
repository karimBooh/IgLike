import { BaseSchema } from '../shared/base-model/base-model.schema';
import { Media, mediaBinary, User } from '@karibooh/ig-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import mongoose from 'mongoose';

@Schema()
export class MediaSchema extends BaseSchema implements Media {
    @Prop()
    date: Date;

    @Prop()
    description: string;

    @Prop()
    medias: Array<mediaBinary>;

    @Prop([{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }])
    references: Array<User | ObjectId>;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    user: User | ObjectId;
}

export const schema = SchemaFactory.createForClass(MediaSchema);
