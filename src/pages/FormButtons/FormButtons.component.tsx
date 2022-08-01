import React from 'react';
import { ButtonGroup, Button } from '@mui/material'
import './FormButtons.component.css'

const FormButtons = () => {
    return (
        <ButtonGroup id='btn-container'>
            <Button variant='outlined' id='btn-skip'>Saltar</Button>
            <Button variant='contained' id='btn-save'>Guardar y continuar</Button>
        </ButtonGroup>
    );
}

export default FormButtons;