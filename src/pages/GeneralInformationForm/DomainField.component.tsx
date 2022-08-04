import { CheckCircle } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";
import formSchema from './form.schema'

const domainSchema = formSchema.fields.domain

type DomainFieldProps = {
    control: Control<{
        name: string,
        domain: string,
        currency: string,
        visibility: string
    }>
}

const DomainField = ({ control }: DomainFieldProps) => {
    return (
        <Controller
        name="domain"
        control={control}
        render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label='Dominio' sx={{ marginTop: '20px' }} InputProps={{
                endAdornment: <>
                    {true  && <CheckCircle color='info' sx={{ margin: '0 10px'}} />}
                    <span>.tienda.ejaki.cu</span>
                </> 
            }}/>
        )}
        />
    );
}

export default DomainField;