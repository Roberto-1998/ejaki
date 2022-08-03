import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";
import { Controller, useForm } from 'react-hook-form';
import DomainField from "./DomainField.component";
import FormButtons from "../FormButtons";
import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup.string(),
    domain: yup.string(),
    currency: yup.string(),
    visibility: yup.string()
});

const resolver = (data: any) => {
    try {
        const values = formSchema.validate(data, {abortEarly: false});
        return { values, errors: {} };
    } catch(errors) {
        return { values: {}, errors };
    }
}

const GeneralInformationForm = () => {
    const { handleSubmit, control } = useForm({
        defaultValues: {
            name: '',
            domain: '',
            currency: 'cup',
            visibility: 'all'
        }
    });

    const onSubmit = (data: any) => {
        if (data.domain) data.domain += '.tienda.ejaki.cu';
        console.table(data);
    };    

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{
            'display': 'flex', 'flexDirection': 'column'
        }}>
            <h2>Datos generales</h2>
            <Controller 
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (
                <TextField onChange={onChange} value={value} label='Nombre de la tienda' sx={{ 'margin': '10px 0' }}/>
            )}
            />

            <DomainField control={control}/>
            <FormLabel>Agrege el dominio con el que se identificará su tienda en la web</FormLabel>

            <h2>Tipo de moneda</h2>
            <FormLabel>Seleccione el tipo de moneda con la que se comercializará en su tienda</FormLabel>
            <Controller
            name="currency"
            control={control}
            render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value} sx={{
                    'display': 'flex',
                    'flexDirection': 'row'
                }}>
                    <FormControlLabel label={'CUP'} value={'cup'} control={<Radio />} />
                    <FormControlLabel label={'MLC'} value={'mlc'} control={<Radio />} />
                    <FormControlLabel label={'USD'} value={'usd'} control={<Radio />} />
                </RadioGroup>
            )}
            />

            <h2>Visibilidad</h2>
            <FormLabel>Seleccione la visibilidad que tendrá su tienda</FormLabel>
            <Controller
            name="visibility"
            control={control}
            render={({ field: { onChange, value } }) => (
                <RadioGroup onChange={onChange} value={value} sx={{
                    'display': 'flex',
                    'flexDirection': 'row'
                }}>
                    <FormControlLabel label={'Todos'} value={'all'} control={<Radio />} />
                    <FormControlLabel label={'Privado'} value={'private'} control={<Radio />} />
                </RadioGroup>
            )}
            />
            <FormButtons />
        </form>

    );
}

export default GeneralInformationForm;