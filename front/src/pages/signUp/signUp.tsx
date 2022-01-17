import React from 'react';
import { SignUpForm, Layout, ConnectionRedirection } from './signUp.styles';
import logo from '../../assets/instagram.png';
import { DividerStyles } from './signUp.styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button, Typography } from '@mui/material';
import { onSubmit } from './signUp.controller';
import { EmailInput } from '../../components/form/emailInput/emailInput';
import { PasswordInput } from '../../components/form/passwordInput/passwordInput';
import { useForm } from 'react-hook-form';
import { SubmitButton } from '../../components/form/submitButton/submitButton';
import { Input } from '../../components/form/input/input';
import { Link } from 'react-router-dom';

export function SignUp() {
    const { register, handleSubmit, formState } = useForm<any>({ mode: 'onChange' });

    return (
        <Layout>
            <SignUpForm onSubmit={handleSubmit(onSubmit)}>
                <img src={logo} width={'200px'} alt={'instagram'} />
                <Button size="small" startIcon={<FacebookIcon />}>
                    Se connecter avec facebook
                </Button>
                <DividerStyles>ou</DividerStyles>
                <EmailInput register={register} />
                <Input register={register} name={'Name'} require={true} />
                <Input register={register} name={'UserName'} require={true} />
                <PasswordInput register={register} />
                <SubmitButton disabled={!formState.isValid} />
            </SignUpForm>
            <ConnectionRedirection>
                <Typography>
                    Vous avez un compte ?<Link to={'/connexion'}> Connectez-vous </Link>
                </Typography>
            </ConnectionRedirection>
        </Layout>
    );
}
