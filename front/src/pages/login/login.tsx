import React from 'react';
import { Button, Typography } from '@mui/material';
import { Container, Layout, PhotoItem, LoginItem, LoginForm, SignUpRedirection, DividerStyles } from './login.styles';
import { EmailInput } from '../../components/form/emailInput/emailInput';
import { PasswordInput } from '../../components/form/passwordInput/passwordInput';
import { SubmitButton } from '../../components/form/submitButton/submitButton';
import { Link } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '../../assets/instagram.png';
import { useForm } from 'react-hook-form';
import { onSubmit } from './login.controller';
import { User } from '../../../../interfaces/user';

export function Login() {
    const { register, handleSubmit, formState } = useForm<User>({ mode: 'onChange' });

    return (
        <Layout>
            <Container spacing={0}>
                <PhotoItem item xs={0} sm={6} md={5} />
                <LoginItem item xs={12} sm={6} md={5}>
                    <LoginForm onSubmit={handleSubmit(onSubmit)}>
                        <img src={logo} width={'200px'} alt={'logo'} />
                        <EmailInput register={register} />
                        <PasswordInput register={register} />
                        <SubmitButton disabled={!formState.isValid} name={'connexion'} />
                        <DividerStyles>ou</DividerStyles>
                        <Button size="small" startIcon={<FacebookIcon />}>
                            Se connecter avec facebook
                        </Button>
                        <Typography>
                            <Link to={'/forgotPassword'}>Mot de passe oublier ?</Link>
                        </Typography>
                    </LoginForm>
                    <SignUpRedirection>
                        <Typography>
                            Vous n'avez pas de compte ? <Link to={'/signup'}> Inscrivez-vous ici </Link>
                        </Typography>
                    </SignUpRedirection>
                </LoginItem>
            </Container>
        </Layout>
    );
}
