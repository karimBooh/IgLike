"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor(base) {
        if (base._id) {
            this._id = base._id;
        }
        else {
            this._id = undefined;
        }
        if (base.creationDate) {
            this.creationDate = base.creationDate;
        }
        else {
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
exports.Base = Base;
