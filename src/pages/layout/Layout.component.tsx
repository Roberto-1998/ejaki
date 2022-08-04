
import React from 'react'

import StepperForm from './components/StepperForm'
import { Box, Typography } from '@mui/material'


const Layout = () => {
  return (
    <Box className='w-full md:w-[300.96px]' sx={{backgroundColor:'#F9F9F9', padding:'30px 22px 0 20.46px'}} >
      <Typography variant='h1' sx={{fontSize:'24px', fontWeight:'600', color:"#031A1E"}}>Bienvenido Francisco!</Typography>
      <Typography paragraph={true} sx={{fontWeight:'400', fontSize:'14px', color:'#031A1E', opacity:'0.7', marginTop:'15px'}}>Ya casi comenzamos, solo necesitamos unos datos más</Typography>
      <StepperForm></StepperForm>
    </Box>
  )
}

export default Layout


