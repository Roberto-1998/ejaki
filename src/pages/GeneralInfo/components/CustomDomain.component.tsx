import { FormLabel, TextField } from '@mui/material';
import React from 'react';
import './CustomDomain.component.css';

type CustomDomainProps = {
    register: Function
}

const CustomDomain = ({ register }: CustomDomainProps) => {
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
                {...register('domain', { required: true })}
                ></TextField>
            </div>
            <FormLabel>Agregue el dominio con el que se identificará su tienda en la web</FormLabel>
        </>
    );
}

export default CustomDomain;