import styled from 'styled-components';
import { Container, Grid } from '@mui/material';

export const NavigationStyles = styled.div`
    background-color: white;
    border: 1px solid rgba(219, 219, 219, 1);
    width: 100%;
`;

export const ContainerStyles = styled(Container).attrs((props) => ({
    maxWidth: props.maxWidth
}))``;

export const GridNav = styled(Grid).attrs(() => ({
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    container: true
}))``;

export const RedirectButton = styled.div`
    display: flex;
`;
