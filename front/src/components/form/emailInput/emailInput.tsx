import React from 'react';
import { InputLabel, OutlinedInput } from '@mui/material';
import { EmailForm } from './emailInput.styles';

export function EmailInput(props: any) {
    return (
        <EmailForm>
            <InputLabel htmlFor="component-outlined">Email</InputLabel>
            <OutlinedInput {...props.register('email', { required: true })} />
        </EmailForm>
    );
}
