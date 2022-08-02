import styled from "@emotion/styled";
import { TextField } from "@mui/material";

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