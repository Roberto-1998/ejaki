import { Button, Box } from '@mui/material'

const FormButtons = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end'}}>
            <Button variant='outlined' sx={{
                margin: '25px 15px 25px 0',
                borderColor: '#e4e4e4',
                color: '#031a1e',
                ':hover': {
                    borderColor: '#031a1e'
                }
            }}>Saltar</Button>
            
            <Button variant='contained' type='submit' sx={{
                margin: '25px 15px 25px 0',
                ':hover': { 
                    backgroundColor: '#16a1ff' 
                }
            }}>Guardar y continuar</Button>
        </Box>
    );
}

export default FormButtons;