import React from 'react';
import { Login } from '../../pages/login/login';
import { Outlet } from 'react-router';
import { useGetUser } from '../../hooks/auth/useGetUser';

export function PrivateRoute() {
    const [user] = useGetUser();

    return user ? <Outlet /> : <Login />;
}
