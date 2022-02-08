import { Module } from '@nestjs/common';
import { MediaService } from './media.service';
import { MediaController } from './media.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaSchema, schema } from '../schemas/media.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: MediaSchema.name, schema: schema, collection: 'Medias' }])],
    providers: [MediaService],
    controllers: [MediaController]
})
export class MediaModule {}
