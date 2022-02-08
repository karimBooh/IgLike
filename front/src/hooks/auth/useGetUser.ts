import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { User } from '@karibooh/ig-interfaces';
import jwtDecode from 'jwt-decode';

export function useGetUser(): [User | undefined, Dispatch<SetStateAction<User | undefined>>] {
    const [user, setUser] = useState<User>();
    const jwt = window.localStorage.getItem('access_token');

    useEffect(() => {
        console.log(jwt);
        if (!user && jwt) {
            setUser(jwtDecode<{ lat: number; exp: number; user: User }>(jwt).user);
        }
    });

    return [user, setUser];
}
