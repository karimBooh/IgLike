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
        if (media.length) {
            this.length = media.length;
        }
        else {
            throw new Error('length missing ');
        }
        if (media.chunkSize) {
            this.chunkSize = media.chunkSize;
        }
        else {
            throw new Error('chunck size missing');
        }
        if (media.uploadDate) {
            this.uploadDate = media.uploadDate;
        }
        else {
            this.uploadDate = new Date();
        }
        if (media.fileName) {
            this.fileName = media.fileName;
        }
        else {
            throw new Error('');
        }
        if (media.metadata) {
            this.metadata = media.metadata;
        }
        else {
            throw new Error('missing element');
        }
    }
}
exports.Media = Media;
