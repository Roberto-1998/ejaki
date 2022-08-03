import  {useState} from 'react'
import { useForm } from 'react-hook-form';

import { yupResolver } from '@hookform/resolvers/yup';
import { Controller } from 'react-hook-form';

// MUI
import { Autocomplete, FormControlLabel } from '@mui/material'
import  {Clear } from '@mui/icons-material'
import { Box } from '@mui/system'
import { Typography } from '@mui/material';

import { descriptionSchema } from './validations/DescriptionValidation'
import {CssTextField, CssChip, CssCheckbox} from './StyledDescription.component'


import {TitleTypography} from './components/TitleTypography';
import {CssErrorTypo} from './components/ErrorTypography'



interface IFormInput {
  about: string;
  categories: String[];
  labels:String[]
}


const selectLabels=[
  'Mercado', 'Muebles', 'Belleza', 'Moda', 'Tecnología', 'Misceláneas', 'Diseño gráfico', 'Artesanías','Hola', 'Mundo'
]

const initialChipLabels=['Mercado', 'Zapateria', 'Ropa']

const Description = () => {

  const [chipLabels, setChipsLabels] = useState<String[]>(initialChipLabels)
  const [showAllCategories, setShowAllCategories]=useState(false)


 

// REACT-HOOK-FORM
  const { register, handleSubmit,  formState: { errors }, control } = useForm<IFormInput>(
    {
    defaultValues:{
      about:'',
      categories:[],
      labels:[...chipLabels]
    },
    resolver:yupResolver(descriptionSchema)
   
  });



  // SUBMIT FORM
  const onSubmit =async (data:any) => {
    let payload={
      ...data,
    
    }
    const isValid = await descriptionSchema.isValid(payload)   
   

    alert(JSON.stringify({isValid, payload}))

   
  };



  return (
    <form className='formContent' onSubmit={handleSubmit(onSubmit)}>
      <TitleTypography >Descripción de la tienda</TitleTypography>

      <Box>
            <Typography sx={{opacity:"0.7", marginBottom:"25px"}} paragraph={true}>Información general de qué hace tu tienda y que se puede encontrar en ella</Typography>
                    
        <Controller
        name="about"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <CssTextField {...field} label='Acerca de'  multiline
        fullWidth
        rows={4} 
        id="outlined-multiline-static"
        sx={{'& .MuiOutlinedInput-root':{height:"105px"}}}
        InputProps={{inputProps:{style:{color:'#031A1E',fontWeight:'bold', fontSize:'15px', fontFamily:'Open Sans', height:'80%'}}}}
        />}
      />

           


     
      {errors.about?.message && <CssErrorTypo>{errors.about?.message}</CssErrorTypo>}
      </Box>



        <Box sx={{marginTop:'20px'}}>
          <TitleTypography >¿Cómo categorizarías esta tienda?</TitleTypography>
          <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
              {!showAllCategories ? (
                <>
                {selectLabels.slice(0, 8).map((label, index)=>(

                  
                <FormControlLabel key={label+index} control={<CssCheckbox value={label} {...register('categories')} />} label={label} sx={{flex:'0 0 30%'}} />
              ))}
              <Typography paragraph={true} sx={{cursor:"pointer", color:'#16A1FF', marginTop:'10px'}} onClick={()=>setShowAllCategories(true)}>Ver todos los campos...</Typography>
              </>
              ) : (
                <>
                {selectLabels.map((label, index)=>(
              <Controller
               name='categories'
               control={control}
              key={label+index}
              render={({ field }) => (
                   <FormControlLabel
                   sx={{flex:'0 0 30%'}}
                       control={<CssCheckbox {...field} />}
                       label={label}
                   />
               )}
           />
              ))}
            
              </>
              )}
           {errors.categories?.message && <CssErrorTypo>{errors.categories?.message}</CssErrorTypo>}
          </Box>
        </Box>


        <Box sx={{marginTop:'20px'}}>
            
            <TitleTypography >Etiquetas de la tienda</TitleTypography>


            <Controller 
            name='labels'
            control={control}
            render={({field:{onChange, value}})=>(
              <Autocomplete 
              freeSolo
              multiple
              id='tags-filled'
              options={chipLabels.map((option) => option)}
              defaultValue={[chipLabels[0], chipLabels[1], chipLabels[2]]}
              renderTags={(value:any, getTagProps) =>
                value.map((option: string, index: number) => (
                  <CssChip  variant="outlined" label={option} {...getTagProps({ index })} deleteIcon={<Clear style={{color:'rgb(83, 83, 85)', fontSize:'18px'}} />} />
                ))
            }
              renderInput={(params)=>(
                <CssTextField {...params} variant="outlined" label="Etiquetas" />
              )}
              onChange={(_, data)=>{
                onChange(data)
                return data
              }}
              />
            )}
            />
           
           {errors.labels?.message && <CssErrorTypo>{errors.labels?.message}</CssErrorTypo>}
          
        </Box>

        <button>Enviar</button>
      
    
    </form>
  )
}

export default Description
