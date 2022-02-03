import { useEffect, useState } from 'react';

export function useJwt() {
    const [jwt, setJwt] = useState(localStorage.getItem('jwt') as string);

    useEffect(() => {
        console.log('useEffect');
        localStorage.setItem('jwt', jwt);
    }, [jwt]);

    return [jwt, setJwt] as const;
}
