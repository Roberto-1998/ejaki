import { TextField } from "@mui/material";
import { Controller, Control } from "react-hook-form";

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
            <TextField onChange={onChange} value={value} label='Dominio' sx={{ 'margin': '10px 0' }} InputProps={{
                endAdornment: '.tienda.ejaki.cu'
            }}/>
        )}
        />
    );
}

export default DomainField;