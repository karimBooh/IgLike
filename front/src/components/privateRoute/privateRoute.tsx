import React, { useEffect } from 'react';
import { Login } from '../../pages/login/login';
import { Outlet } from 'react-router';
import { useGetUser } from '../../hooks/auth/useGetUser';
import { Navigation } from '../navigation/navigation';

export function PrivateRoute() {
    console.log('private route');
    const [user] = useGetUser();

    useEffect(() => {
        console.log(user);
    }, [user]);

    return user ? (
        <>
            <Navigation />
            <Outlet />
        </>
    ) : (
        <Login />
    );
}
