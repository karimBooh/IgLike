import { Base } from './base';

export enum EGender {
    MALE,
    FEMALE,
    NON_SPECIFIED
}

export class User extends Base {
    email: string;
    name: string;
    username: string;
    birthday: Date;
    gender: EGender;
    password?: string;
    CGU?: Date;
    phone?: string;

    constructor(user: any) {
        super(user);

        if (user.email) {
            this.email = user.email;
        }

        if (user.name) {
            this.name = user.name;
        }

        if (user.username) {
            this.username = user.username;
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
