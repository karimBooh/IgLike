export enum EGender {
    MALE,
    FEMALE,
    NON_SPECIFIED
}

export interface User {
    email: string;
    name: string;
    username: string;
    age: Date;
    gender: EGender;
    password?: string;
    CGU?: Date;
}
