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
    length: number;
    chunkSize: number;
    uploadDate: Date;
    fileName: string;
    metadata: {
        description?: string;
        user: User | ObjectId;
        references?: Array<User | ObjectId>;
    };

    constructor(media: any) {
        super(media);

        if (media.length) {
            this.length = media.length;
        } else {
            throw new Error('length missing ');
        }

        if (media.chunkSize) {
            this.chunkSize = media.chunkSize;
        } else {
            throw new Error('chunck size missing');
        }

        if (media.uploadDate) {
            this.uploadDate = media.uploadDate;
        } else {
            this.uploadDate = new Date();
        }

        if (media.fileName) {
            this.fileName = media.fileName;
        } else {
            throw new Error('');
        }

        if (media.metadata) {
            this.metadata = media.metadata;
        } else {
            throw new Error('missing element');
        }
    }
}
