import styled from 'styled-components';
import { Button } from '@mui/material';

export const SubmitButtonStyles = styled(Button).attrs((props: { disabled: boolean }) => ({
    variant: 'contained',
    type: 'submit',
    disabled: props.disabled
}))``;
