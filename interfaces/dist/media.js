"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Media = exports.mediaType = void 0;
const base_1 = require("./base");
var mediaType;
(function (mediaType) {
    mediaType[mediaType["Photo"] = 0] = "Photo";
    mediaType[mediaType["Video"] = 1] = "Video";
})(mediaType = exports.mediaType || (exports.mediaType = {}));
class Media extends base_1.Base {
    constructor(media) {
        super(media);
        if (media.medias) {
            this.medias = media.medias;
        }
        else {
            throw new Error('No media ');
        }
        if (media.description) {
            this.description = media.description;
        }
        if (media.user) {
            this.user = media.user;
        }
        else {
            throw new Error('');
        }
        if (media.date) {
            this.date = media.date;
        }
        else {
            this.date = new Date();
        }
        if (media.references) {
            this.references = media.references;
        }
        else {
            this.references = [];
        }
    }
}
exports.Media = Media;
