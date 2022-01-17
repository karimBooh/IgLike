import styled from 'styled-components';
import { Divider } from '@mui/material';

export const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    gap: 24px;
`;

export const SignUpForm = styled.form.attrs((props) => ({
    submit: props.onSubmit
}))`
    border: 1px solid rgba(219, 219, 219, 1);
    background: white;
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const DividerStyles = styled(Divider)`
    width: 100%;
`;

export const ConnectionRedirection = styled.div`
    background: white;
    padding: 32px;
    border: 1px solid rgba(219, 219, 219, 1);
`;
