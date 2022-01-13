import React from 'react';
import { SubmitButtonStyles } from './submitButton.styles';

export function SubmitButton(props: { disabled: boolean }) {
    return <SubmitButtonStyles disabled={props.disabled}>connexion</SubmitButtonStyles>;
}
