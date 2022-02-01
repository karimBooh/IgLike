import { AuthService } from '../../services/Auth/auth.service';
import { User } from '@karibooh/ig-interfaces';

const auth = new AuthService();

export const onSubmit = async (data: Pick<User, 'email' | 'password'>) => {
    const jsonWebToken: { access_token: string } = await auth.connection(data);
    console.log(jsonWebToken);
};
