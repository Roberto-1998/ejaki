import  {useState} from 'react'
import { useForm } from 'react-hook-form';

// MUI
import { Autocomplete, Checkbox, Chip, FormControlLabel } from '@mui/material'
import  {Clear } from '@mui/icons-material'
import { Box } from '@mui/system'


import { descriptionSchema } from './validations/DescriptionValidation'
import {CssTextField} from './styled'
import './Description.component.css'

const selectLabels=[
  'Mercado', 'Muebles', 'Belleza', 'Moda', 'Tecnología', 'Misceláneas', 'Diseño gráfico', 'Artesanías','Hola', 'Mundo'
]

const initialChipLabels=['Mercado', 'Calzado', 'Perfumería']

const Description = () => {

  const [chipLabels, setChipsLabels] = useState(initialChipLabels)
  const [showAllCategories, setShowAllCategories]=useState(false)


// REACT-HOOK-FORM
  const { register, handleSubmit} = useForm();



  // SUBMIT FORM
  const onSubmit =async (data:any) => {
    let payload={
      ...data,
      labels:[...chipLabels]
    }
    const isValid = await descriptionSchema.isValid(payload)   
    console.log(isValid);
    console.log(payload);
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
            />
      </div>



        <div className='categoryBox'>
          <h4>¿Cómo categorizarías esta tienda?</h4>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
              {!showAllCategories ? (
                <>
                {selectLabels.slice(0, 8).map((label, index)=>(
                <FormControlLabel key={label+index} control={<Checkbox value={label} {...register('categories')} />} label={label} sx={{flex:'0 0 30%'}} />
              ))}
              <p onClick={()=>setShowAllCategories(true)}>Ver todos los campos...</p>
              </>
              ) : (
                <>
                {selectLabels.map((label, index)=>(
                <FormControlLabel key={label+index} control={<Checkbox value={label} {...register('categories')} />} label={label} sx={{flex:'0 0 30%'}} />
              ))}
              <p onClick={()=>setShowAllCategories(false)} >Ocultar campos...</p>
              </>
              )}
            
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
                    <Chip  variant="outlined" label={option} {...getTagProps({ index })} deleteIcon={<Clear className='iconStyle' sx= {{color:'red'}}></Clear>} />
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
