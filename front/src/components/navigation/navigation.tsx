import React from 'react';
import { NavigationStyles, ContainerStyles, GridNav } from './navigation.styles';
import logo from '../../assets/instagram.png';
import { SearchProfile } from '../searchProfile/searchProfile';

export function Navigation() {
    return (
        <NavigationStyles>
            <ContainerStyles maxWidth={'md'}>
                <GridNav>
                    <img src={logo} width={'100px'} alt={'logo'} />
                    <SearchProfile />
                    <img src={logo} width={'100px'} alt={'logo'} />
                </GridNav>
            </ContainerStyles>
        </NavigationStyles>
    );
}
