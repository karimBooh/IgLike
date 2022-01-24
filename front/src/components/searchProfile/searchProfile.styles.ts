import styled from 'styled-components';
import { Autocomplete } from '@mui/material';
import Popper from '@mui/material/Popper';

export const AutoCompletSearch = styled(Autocomplete).attrs((props) => ({
    freeSolo: true,
    id: props.id,
    disableClearable: true,
    options: props.options,
    renderInput: props.renderInput
}))`
    width: 50%;
`;
