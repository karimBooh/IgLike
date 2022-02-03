import { AuthService } from '../../services/Auth/auth.service';
import { User } from '@karibooh/ig-interfaces';
import jwtDecode from 'jwt-decode';

const auth = new AuthService();

export const onSubmit = async (user: Pick<User, 'email' | 'password'>) => {
    const jsonWebToken: { access_token: string } = await auth.connection(user);

    if (jsonWebToken.access_token) {
        console.log(jwtDecode(jsonWebToken.access_token));
        localStorage.setItem('access_token', jsonWebToken.access_token);
    }
};
