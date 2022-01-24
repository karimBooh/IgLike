import { AuthService } from '../../services/Auth/auth.service';
import { useJwt } from '../../hooks/auth/useJwt';
import { User } from '../../../../interfaces/user';
import { useNavigate } from 'react-router-dom';

const auth = new AuthService();

export const onSubmit = async (data: Pick<User, 'email' | 'password'>) => {
    const setJwt = useJwt()[1];
    const navigate = useNavigate();

    const jsonWebToken: string = (await auth.connection(data).catch((error) => {
        console.log(error);
    })) as string;
    setJwt(jsonWebToken);
    navigate('/', { replace: true });
};
