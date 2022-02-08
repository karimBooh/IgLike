import { Base } from './base';
import { ObjectId } from 'bson';
import { User } from './user';

export enum mediaType {
    Photo,
    Video
}

export interface mediaBinary {
    binary: string;
    type: mediaType;
}

export class Media extends Base {
    medias: Array<mediaBinary>;
    description?: string;
    user: User | ObjectId;
    date: Date;
    references?: Array<User | ObjectId>;

    constructor(media: any) {
        super(media);

        if (media.medias) {
            this.medias = media.medias;
        } else {
            throw new Error('No media ');
        }

        if (media.description) {
            this.description = media.description;
        }

        if (media.user) {
            this.user = media.user;
        } else {
            throw new Error('');
        }

        if (media.date) {
            this.date = media.date;
        } else {
            this.date = new Date();
        }

        if (media.references) {
            this.references = media.references;
        } else {
            this.references = [];
        }
    }
}
