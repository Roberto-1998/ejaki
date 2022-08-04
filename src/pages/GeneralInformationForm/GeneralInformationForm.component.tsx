import { 
    Alert, 
    FormControlLabel, 
    FormLabel, 
    Radio, 
    RadioGroup, 
    TextField,
    Box
} from "@mui/material";
import { Controller, useForm } from 'react-hook-form';
import DomainField from "./DomainField.component";
import FormButtons from "../FormButtons";
import { yupResolver } from '@hookform/resolvers/yup';
import formSchema from "./form.schema";
import { TitleTypography } from "../description/components/TitleTypography";

const GeneralInformationForm = () => {
    const { handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
            name: '',
            domain: '',
            currency: 'cup',
            visibility: 'all'
        },
        resolver: yupResolver(formSchema) 
    });

    const onSubmit = (data: any) => {
        if (data.domain) data.domain += '.tienda.ejaki.cu';
        console.table(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{
            'display': 'flex', 'flexDirection': 'column'
        }}>
            <Box className='md:w-[638px] md:h-[487.23px] p-[30px_40.5px_0_30px] overflow-y-scroll'>
            <TitleTypography>Datos generales</TitleTypography>
            <Controller 
            name="name"
            control={control}
            render={({ field: { onChange, value } }) => (<>
            <TextField onChange={onChange} value={value} label='Nombre de la tienda' error={!!errors.name} fullWidth />
            </>)}
            />
            {errors.name && <Alert severity="error">{errors.name.message}</Alert>}
            
            <DomainField control={control} isValid={!errors.domain}/>
            {errors.domain && <Alert severity="error">{errors.domain.message}</Alert>}
            
            <FormLabel sx={{ marginTop: '5px' }}>Agrege el dominio con el que se identificará su tienda en la web</FormLabel>
            
            <TitleTypography sx={{ margin: '5px 0 0 0'}}>Tipo de moneda</TitleTypography>
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

            <TitleTypography sx={{ margin: '5px 0 0 0' }}>Visibilidad</TitleTypography>
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
            )} />
            </Box>
            
            <Box className='md:h-[96px]' sx={{borderTop:'1px #E4E4E4 solid'}} >
                <FormButtons />
            </Box>
        </form>
    );
}

export default GeneralInformationForm;