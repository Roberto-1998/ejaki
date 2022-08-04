import { CheckCircle } from "@mui/icons-material";
import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

type DomainFieldProps = {
    control: Control<{
        name: string,
        domain: string,
        currency: string,
        visibility: string
    }>,
    isValid: boolean
}

const DomainField = ({ control, isValid }: DomainFieldProps) => {
    return (
        <Controller
        name="domain"
        control={control}
        render={({ field: { onChange, value } }) => (
            <TextField onChange={onChange} value={value} label='Dominio' sx={{ marginTop: '20px' }} fullWidth InputProps={{
                endAdornment: <>
                    {isValid  && <CheckCircle color='info' sx={{ margin: '0 10px'}} />}
                    <span>.tienda.ejaki.cu</span>
                </> 
            }}/>
        )}
        />
    );
}

export default DomainField;