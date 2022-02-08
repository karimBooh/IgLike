import { Base } from './base';
import { ObjectId } from 'bson';

export enum EGender {
    MALE,
    FEMALE,
    NON_SPECIFIED
}

export class User extends Base {
    email: string;
    name: string;
    username: string;
    birthday?: Date;
    gender?: EGender;
    password?: string;
    CGU?: Date;
    phone?: string;
    followers: Array<User | ObjectId>;
    subscribers: Array<User | ObjectId>;
    isPublic: boolean;

    constructor(user: any) {
        super(user);

        if (user.email) {
            this.email = user.email;
        } else {
            throw Error('no email');
        }

        if (user.name) {
            this.name = user.name;
        } else {
            throw Error('no name');
        }

        if (user.username) {
            this.username = user.username;
        } else {
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

        if (user.followers) {
            this.followers = user.followers;
        } else {
            this.followers = [];
        }

        if (user.subscribers) {
            this.subscribers = user.subscribers;
        } else {
            this.subscribers = [];
        }

        if (user.isPublic) {
            this.isPublic = user.isPublic;
        } else {
            this.isPublic = false;
        }
    }
}
