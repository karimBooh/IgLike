import { HttpService } from '../http.service';
import { User } from '@karibooh/ig-interfaces';

export class AuthService extends HttpService<any> {
    constructor() {
        super('/auth');
    }

    async signUp(user: User): Promise<User> {
        return await this.post('/signup', user);
    }

    async connection(user: Pick<User, 'email' | 'password'>): Promise<{ access_token: string }> {
        return this.post('/login', user);
    }
}
