import styled from 'styled-components';
import phone from './../../assets/phone.png';
import { Box, Divider, Grid } from '@mui/material';

export const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Phone = styled.div`
    background-image: url(${phone});
    height: 100%;
    background-repeat: no-repeat;
`;

export const Container = styled(Grid).attrs((props) => ({
    container: true,
    spacing: props.spacing
}))`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const PhotoItem = styled(Grid).attrs((props) => ({
    item: true,
    sm: props.sm,
    md: props.md,
    xs: props.xs
}))`
    background-image: url(${phone});
    background-repeat: no-repeat;
    background-position: right;
    height: 650px;
`;
export const LoginItem = styled(Grid).attrs((props) => ({
    item: true,
    sm: props.sm,
    md: props.md,
    xs: props.xs
}))``;

export const LoginForm = styled(Box).attrs((props) => ({
    component: 'form',
    noValidate: true,
    autoComplete: 'off',
    onSubmit: props.onSubmit,
    sx: { '& .MuiTextField-root': { m: 1, width: '100%' } }
}))`
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
    background: white;
    margin-right: 20px;
    margin-left: 20px;
    gap: 15px;
    width: 400px;
`;

export const SignUpRedirection = styled.div`
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 1px;
    margin-top: 8px;
    background: white;
    padding: 15px;
    width: 400px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const DividerStyles = styled(Divider)`
    width: 100%;
`;
