import { useEffect, useState } from 'react';

const useFeedController = () => {
    const [medias, setMedias] = useState([]);

    useEffect(() => {
        console.log('hello');
    });
    return { medias, setMedias };
};

export default useFeedController;
