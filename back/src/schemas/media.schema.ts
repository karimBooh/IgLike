import { BaseSchema } from '../shared/base-model/base-model.schema';
import { Media, User } from '@karibooh/ig-interfaces';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import * as mongoose from 'mongoose';

@Schema()
export class MediaSchema extends BaseSchema implements Media {
    @Prop()
    chunkSize: number;
    @Prop()
    fileName: string;
    @Prop()
    length: number;
    @Prop({ type: mongoose.Schema.Types.Mixed })
    metadata: { description?: string; user: User | ObjectId; references?: Array<User | ObjectId> };
    @Prop()
    uploadDate: Date;
}

export const schema = SchemaFactory.createForClass(MediaSchema);
