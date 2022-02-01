"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.EGender = void 0;
const base_1 = require("./base");
var EGender;
(function (EGender) {
    EGender[EGender["MALE"] = 0] = "MALE";
    EGender[EGender["FEMALE"] = 1] = "FEMALE";
    EGender[EGender["NON_SPECIFIED"] = 2] = "NON_SPECIFIED";
})(EGender = exports.EGender || (exports.EGender = {}));
class User extends base_1.Base {
    constructor(user) {
        super(user);
        if (user.email) {
            this.email = user.email;
        }
        else {
            throw Error('no email');
        }
        if (user.name) {
            this.name = user.name;
        }
        else {
            throw Error('no name');
        }
        if (user.username) {
            this.username = user.username;
        }
        else {
            throw Error('no username');
        }
        if (user.birthday) {
            this.birthday = user.birthday;
        }
        if (user.gender) {
            this.gender = user.gender;
        }
        if (user.CGU) {
            this.CGU = user.CGU;
        }
        if (user.password) {
            this.password = user.password;
        }
        if (user.phone) {
            this.phone = user.phone;
        }
    }
}
exports.User = User;
