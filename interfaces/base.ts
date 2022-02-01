import { ObjectId } from 'bson';
import { User } from './user';

export class Base {
    _id: ObjectId;
    creationDate: Date;
    updateDate?: Date;
    creationPId?: ObjectId | User;
    constructor(base: any) {
        if (base._id) {
            this._id = base._id;
        }

        if (base.creationDate) {
            this.creationDate = base.creationDate;
        }

        if (base.updateDate) {
            this.updateDate = base.updateDate;
        }

        if (base.creationPId) {
            this.creationPId = base.creationPId;
        }
    }
}
