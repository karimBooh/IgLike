import { ObjectId } from 'bson';
import { User } from './user';

export class Base {
    _id?: ObjectId;
    creationDate: Date;
    updateDate?: Date;
    creationPId?: ObjectId | User;

    constructor(base: any) {
        if (base._id) {
            this._id = base._id;
        } else {
            this._id = undefined;
        }

        if (base.creationDate) {
            this.creationDate = base.creationDate;
        } else {
            this.creationDate = new Date();
        }

        if (base.updateDate) {
            this.updateDate = base.updateDate;
        }

        if (base.creationPId) {
            this.creationPId = base.creationPId;
        }
    }
}
