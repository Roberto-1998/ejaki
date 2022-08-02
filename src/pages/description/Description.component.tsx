import { Autocomplete, Checkbox, Chip, FormControlLabel, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React, {useState} from 'react'
import './Description.component.css'
import { styled } from '@mui/material/styles';
import  {Clear } from '@mui/icons-material'
import { useForm } from 'react-hook-form';


// TEXT FIELD BORDERS
const CssTextField = styled(TextField)({
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


const selectLabels=[
  'Mercado', 'Muebles', 'Belleza', 'Moda', 'Tecnología', 'Misceláneas', 'Diseño gráfico', 'Artesanías'
]

const initialChipLabels=['Mercado', 'Calzado', 'Perfumería']




const Description = () => {

  const [chipLabels, setChipsLabels] = useState(initialChipLabels)
    const [aboutText, setAboutText]=useState('')

// REACT-HOOK-FORM
  const { register, handleSubmit} = useForm();


 

  // SUBMIT FORM
  const onSubmit = (data:any) => {

    let info={
      ...data,
      labels:[...chipLabels]
    }
    console.log(info);

 

    
  };

  return (
    <form className='formContent' onSubmit={handleSubmit(onSubmit)}>
      <h4>Descripción de la tienda</h4>

      <div className='aboutBox'>
            <p>Información general de qué hace tu tienda y que se puede encontrar en ella</p>
            <CssTextField
              {...register('about')}
              id="outlined-multiline-static"
              label="Acerca de"
              multiline
              fullWidth
              rows={4}
              InputProps={{inputProps:{style:{color:'#031A1E',fontWeight:'bold', fontSize:'15px', fontFamily:'Open Sans', height:'80%'}}}}
              value={aboutText}
              onChange={(e)=>setAboutText(e.target.value)}
            />
      </div>



        <div className='categoryBox'>
          <h4>¿Cómo categorizarías esta tienda?</h4>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
            
              {selectLabels.map((label, index)=>(
                <FormControlLabel key={label+index} control={<Checkbox value={label} {...register('categories')} />} label={label} sx={{flex:'0 0 30%'}} />
              ))}
              <p>Ver todos los campos...</p>
          </Box>
        </div>


        <div className='chipBox'>
            <h4>Etiquetas de la tienda</h4>
            <Autocomplete
               value={chipLabels}
               onChange={(event, value:any) => setChipsLabels(value)}
              multiple
              id="tags-filled"
              options={chipLabels.map((option) => option)}
              defaultValue={[chipLabels[0], chipLabels[1], chipLabels[2]]}
              freeSolo
              renderTags={(value: readonly string[], getTagProps) =>
                value.map((option: string, index: number) => (
                  <Chip  variant="outlined" label={option} {...getTagProps({ index })} deleteIcon={<Clear className='iconStyle' sx={{color:'red'}}></Clear>} />
                ))
              }
              renderInput={(params) => (
                <CssTextField  {...params} variant="outlined" label="Etiquetas" />
              )}
            />
        </div>

<button>Enviar</button>
    
    </form>
  )
}

export default Description
