import { FormLabel, TextField } from '@mui/material';
import React from 'react';
import './CustomDomain.component.css';

const CustomDomain = () => {
    return (
        <div id='custom-domain-field'>
        <TextField label="Dominio"></TextField>
        <FormLabel>Agregue el dominio con el que se identificará su tienda en la web</FormLabel>
        </div>
    );
}

export default CustomDomain;