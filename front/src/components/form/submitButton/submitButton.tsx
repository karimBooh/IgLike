import React from 'react';
import { SubmitButtonStyles } from './submitButton.styles';

export function SubmitButton(props: { disabled: boolean; name: string }) {
    return <SubmitButtonStyles disabled={props.disabled}>{props.name}</SubmitButtonStyles>;
}
