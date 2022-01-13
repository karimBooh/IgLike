import React from 'react';
import { theme } from './App.style';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { Login } from './pages/login/login';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Routes>
                <Route path={'/'} element={<Login />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
