import { Injectable } from '@nestjs/common';
import { BaseModelService } from '../shared/base-model/base-model.service';
import { Media } from '@karibooh/ig-interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MediaSchema } from '../schemas/media.schema';

@Injectable()
export class MediaService extends BaseModelService<Media> {
    constructor(@InjectModel(MediaSchema.name) readonly mediaModel: Model<Media>) {
        super(mediaModel, Media);
    }
}
