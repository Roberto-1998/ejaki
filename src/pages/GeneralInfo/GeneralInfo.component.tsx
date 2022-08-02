import React from "react";
import './GeneralInfo.component.css';
import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import CustomDomain from "./components/CustomDomain.component";
import { useForm } from 'react-hook-form';
import FormButtons from "../FormButtons";

const GeneralInfo = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data: object) => alert(data);

    return (
        <form id='general-info-content'>
            <h2>Datos Generales</h2>
            <TextField label="Nombre de la tienda" {...register('name', { required: true })}></TextField>
            {errors.name && <span>Dedes ponerle un nombre a tu tienda</span>}
            
            <CustomDomain register={register}></CustomDomain>

            <h2>Tipo de moneda</h2>
            <FormLabel>Seleccione el tipo de moneda con la que se comercializará su tienda en la web</FormLabel>
            <RadioGroup defaultValue='cup' sx={{
                'display': 'flex',
                'flexDirection': 'row'
            }}>
                <FormControlLabel value='cup' control={<Radio />} label='CUP'/>
                <FormControlLabel value='mlc'control={<Radio />} label='MLC'/>
                <FormControlLabel value='usd' control={<Radio />} label='USD'/>
            </RadioGroup>

            <h2>Visibilidad</h2>
            <FormLabel>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</FormLabel>
            <RadioGroup defaultValue='all' sx={{
                'display': 'flex',
                'flexDirection': 'row'
            }}>
                <FormControlLabel value='all' control={<Radio />} label='Todos'/>
                <FormControlLabel value='private' control={<Radio />} label='Privado'/>
            </RadioGroup>            
            <FormButtons handleSubmit={handleSubmit} onSubmit={onSubmit}></FormButtons>
        </form>
    );
}

export default GeneralInfo;
