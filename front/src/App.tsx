import React from 'react';
import { theme } from './App.style';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Login } from './pages/login/login';
import { Routes, Route } from 'react-router-dom';
import { SignUp } from './pages/signUp/signUp';
import { PrivateRoute } from './components/privateRoute/privateRoute';
import { Feed } from './pages/feed/feed';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path={'/login'} element={<Login />} />
                <Route path={'/signup'} element={<SignUp />} />
                <Route element={<PrivateRoute />}>
                    <Route path={'/'} element={<Feed />} />
                    <Route path={'/explore'} element={<div> 404 </div>} />
                </Route>
                <Route path={'*'} element={<div> 404 </div>} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
