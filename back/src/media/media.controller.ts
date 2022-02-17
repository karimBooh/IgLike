import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MediaService } from './media.service';
import { ObjectId } from 'bson';
import { Media } from '@karibooh/ig-interfaces';
import { Readable } from 'stream';

@Controller('media')
export class MediaController {
    constructor(private _mediaService: MediaService) {}

    @Get('/:id')
    getMedia(@Param('id') id: ObjectId): Promise<Array<Media>> {
        return this._mediaService.readFromUser(id);
    }

    @Post('')
    postMedia(@Body() media: Media) {
        const stream = Readable.from([]);
        return this._mediaService.uploadFile(stream, media);
    }
}
