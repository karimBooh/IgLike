import React from 'react';
import { InputLabel, OutlinedInput } from '@mui/material';
import { InputFormControl } from './input.styles';

interface IInput {
    register: any;
    name: string;
    require: boolean;
}

export function Input(props: IInput) {
    return (
        <InputFormControl>
            <InputLabel htmlFor="component-outlined">{props.name}</InputLabel>
            <OutlinedInput {...props.register(props.name, { required: props.require })} />
        </InputFormControl>
    );
}
