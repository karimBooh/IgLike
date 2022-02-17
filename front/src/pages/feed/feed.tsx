import React from 'react';
import { Container } from '@mui/material';
import useFeedController from './feed.controller';

export function Feed() {
    const { medias, setMedias } = useFeedController();

    return (
        <>
            <Container maxWidth={'md'}>feed</Container>;
        </>
    );
}
