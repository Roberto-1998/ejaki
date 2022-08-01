import { FormLabel, TextField, InputAdornment } from '@mui/material';
import React from 'react';
import './CustomDomain.component.css';

const CustomDomain = () => {
    return (
        <>
            <div id='input-wrapper'>
                <TextField 
                id='input' 
                label="Dominio" 
                fullWidth
                InputProps={{
                    endAdornment: '.tienda_ejaki.cu'                
                }}
                ></TextField>
            </div>
            <FormLabel>Agregue el dominio con el que se identificará su tienda en la web</FormLabel>
        </>
    );
}

export default CustomDomain;