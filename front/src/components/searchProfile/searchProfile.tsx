import React from 'react';
import { TextField } from '@mui/material';
import { AutoCompletSearch } from './searchProfile.styles';

export function SearchProfile() {
    return (
        <AutoCompletSearch
            id="free-solo-2-demo"
            options={['hey', 'ho']}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Search Profile"
                    InputProps={{
                        ...params.InputProps,
                        type: 'search'
                    }}
                />
            )}
        />
    );
}
