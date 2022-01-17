import { HttpService } from '../http.service';
import { User } from '../../../../interfaces/user';

export class AuthService extends HttpService<User> {
    constructor() {
        super('/auth');
    }

    async signUp(user: User): Promise<User> {
        return await this.post('/signUp', user);
    }

    async connection(user: Pick<User, 'email' | 'password'>) {
        return await this.get('/connection', { params: user });
    }
}
