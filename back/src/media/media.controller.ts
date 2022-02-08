import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { MediaService } from './media.service';
import { ObjectId } from 'bson';
import { Media, User } from '@karibooh/ig-interfaces';
import { Request } from 'express';

@Controller('media')
export class MediaController {
    constructor(private _mediaService: MediaService) {}

    @Get('/:id')
    getMedia(@Param('id') id: ObjectId): Promise<Array<Media>> {
        return this._mediaService.readAll({ where: { user: id }, populate: { path: 'user' } });
    }

    @Post('')
    postMedia(@Body() media: Media, @Req() req: Request) {
        return this._mediaService.create(media, (req.user as User)._id);
    }
}
