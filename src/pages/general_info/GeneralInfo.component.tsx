import React from "react";
import './GeneralInfo.component.css';
import { Button, ButtonGroup, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import CustomDomain from "./components/CustomDomain.component";

const GeneralInfo = () => {
    return (
        <div id='general-info-content'>
            <h2>Datos Generales</h2>
            <TextField label="Nombre de la tienda"></TextField>
            <CustomDomain></CustomDomain>

            <h2>Tipo de moneda</h2>
            <FormLabel>Seleccione el tipo de moneda con la que se comercializará su tienda en la web</FormLabel>
            <RadioGroup defaultValue='cup' className='radio-group'>
                <FormControlLabel value='cup' control={<Radio />} label='CUP'/>
                <FormControlLabel value='mlc'control={<Radio />} label='MLC'/>
                <FormControlLabel value='usd' control={<Radio />} label='USD'/>
            </RadioGroup>

            <h2>Visibilidad</h2>
            <FormLabel>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</FormLabel>
            <RadioGroup defaultValue='all'>
                <FormControlLabel value='all' control={<Radio />} label='Todos'/>
                <FormControlLabel value='private' control={<Radio />} label='Privado'/>
            </RadioGroup>
        
            <hr />
        
            <ButtonGroup>
                <Button variant='outlined'>Saltar</Button>
                <Button variant='contained'>Guardar y continuar</Button>
            </ButtonGroup>
        </div>
    );
}

export default GeneralInfo;
