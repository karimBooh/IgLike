import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { User } from '@karibooh/ig-interfaces';
import jwtDecode from 'jwt-decode';

export function useGetUser(): [User | undefined, Dispatch<SetStateAction<User>>] {
    const [user, setUser] = useState<User>(() => {
        return jwtDecode(window.localStorage.getItem('jwt') as string);
    });
    const jwt = window.localStorage.getItem('jwt');

    useEffect(() => {
        console.log(jwt);
        if (jwt) {
            setUser(jwtDecode(jwt));
        }
    }, [jwt]);

    return [user, setUser];
}
