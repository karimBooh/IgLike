import React from 'react';
import { Login } from '../../pages/login/login';
import { Outlet } from 'react-router';

export function PrivateRoute() {
    const [user] = [null];

    console.log(user);

    return user ? <Outlet /> : <Login />;
}
