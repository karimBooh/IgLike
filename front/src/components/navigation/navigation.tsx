import React from 'react';
import { NavigationStyles, ContainerStyles, GridNav, RedirectButton } from './navigation.styles';
import logo from '../../assets/instagram.png';
import { SearchProfile } from '../searchProfile/searchProfile';
import { IconButton } from '@mui/material';
import { AccountBoxOutlined, AddBoxOutlined, Explore, FavoriteBorderOutlined, HomeRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

export function Navigation(props: any) {
    return (
        <NavigationStyles>
            <ContainerStyles maxWidth={'md'}>
                <GridNav>
                    <img src={logo} width={'100px'} alt={'logo'} />
                    <SearchProfile />
                    <RedirectButton>
                        <Link to={'/hello'}>
                            <IconButton aria-label="home">
                                <HomeRounded />
                            </IconButton>
                        </Link>
                        <label htmlFor="icon-button-file">
                            <input style={{ display: 'none' }} accept="image/*" id="icon-button-file" type="file" />
                            <IconButton aria-label="upload picture" component="span">
                                <AddBoxOutlined />
                            </IconButton>
                        </label>
                        <Link to={'/explore'}>
                            <IconButton aria-label="explore">
                                <Explore />
                            </IconButton>
                        </Link>
                        <Link to={'/fav'}>
                            <IconButton aria-label="fav">
                                <FavoriteBorderOutlined />
                            </IconButton>
                        </Link>
                        <Link to={'/profile'}>
                            <IconButton aria-label="profile">
                                <AccountBoxOutlined />
                            </IconButton>
                        </Link>
                    </RedirectButton>
                </GridNav>
            </ContainerStyles>
        </NavigationStyles>
    );
}
