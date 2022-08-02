import React from 'react';
import { ButtonGroup, Button } from '@mui/material'
import './FormButtons.component.css'

type FormButtonsProps = {
    handleSubmit: Function,
    onSubmit: Function
}

const FormButtons = ({ handleSubmit, onSubmit }: FormButtonsProps) => {
    return (
        <ButtonGroup id='btn-container'>
            <Button variant='outlined' id='btn-skip'>Saltar</Button>
            <Button variant='contained' id='btn-save' onClick={handleSubmit(onSubmit)}>
                Guardar y continuar
            </Button>
        </ButtonGroup>
    );
}

export default FormButtons;