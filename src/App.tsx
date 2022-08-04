import React from 'react'
import Layout from './pages/layout'
import GeneralInformationForm from './pages/GeneralInformationForm';
import { Box } from '@mui/material'
import Description from './pages/description'

const App = () => {
  return (
    <Box className='flex w-full flex-wrap md:w-[938.96px] md:h-[583.23px] md:m-[111px_auto_73.77px_auto]  shadow-[0_5px_10px_#18244E26]'>  
      <Layout />
      <Box className='flex flex-col'>
        <GeneralInformationForm />
        {/*<Description />*/}
      </Box>
    </Box>
  )
}

export default App