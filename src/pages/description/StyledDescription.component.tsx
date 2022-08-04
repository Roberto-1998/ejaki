import styled from "@emotion/styled";
import { Chip, TextField, Checkbox } from "@mui/material";
import { Clear} from '@mui/icons-material'

// TEXT FIELD BORDERS
export const CssTextField = styled(TextField)({

    '& label.Mui-focused': {
      color: '#031A1E',
      opacity:'0.7',
      fontSize:'20px',
      fontFamily: 'Open Sans,sans-serif ',
    
     
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0000001F',
     
     
    
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0000001F',
       
      
        
      },
      '&:hover fieldset': {
        borderColor: '#0000001F',
      
        
      
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0000001F',
       
     
       
      },
    },
  });


  // CHIP STYLES
  export const CssChip=styled(Chip)({
    backgroundColor:'#031A1E',
    color: 'rgb(188, 188, 194)',
    borderRadius: '5px',
    fontSize: '14px'
  })


  export const CssClearIcon=styled(Clear)({
    color: 'rgb(83, 83, 85)',
    fontSize: '18px',
  })


  export const CssCheckbox=styled(Checkbox)({
    '&.Mui-checked':{
      color: '#16A1FF',
    }
  })