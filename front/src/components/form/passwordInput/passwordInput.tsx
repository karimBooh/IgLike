import React from 'react';
import { InputLabel, OutlinedInput } from '@mui/material';
import { PasswordForm } from './passwordInput.styles';

export function PasswordInput(props: { register: any }) {
    return (
        <PasswordForm>
            <InputLabel htmlFor="component-outlined">Password</InputLabel>
            <OutlinedInput
                id="outlined-password-input"
                type="password"
                {...props.register('password', { required: true })}
                autoComplete="current-password"
            />
        </PasswordForm>
    );
}
