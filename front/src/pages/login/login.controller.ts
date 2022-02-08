import { AuthService } from '../../services/Auth/auth.service';
import { User } from '@karibooh/ig-interfaces';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLoginController = (): any => {
    console.log('useLoginController');
    const [user, setUser] = useState<User>();
    const navigate = useNavigate();
    const auth = new AuthService();

    const onSubmit = async (user: Pick<User, 'email' | 'password'>) => {
        const jsonWebToken: { access_token: string } = await auth.connection(user);

        if (jsonWebToken.access_token) {
            console.log(jwtDecode(jsonWebToken.access_token));
            localStorage.setItem('access_token', jsonWebToken.access_token);
            navigate('/');
        }
    };

    return { user, setUser, onSubmit };
};

export default useLoginController;
