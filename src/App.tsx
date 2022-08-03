import React from 'react'
import Description from './pages/description'
import Layout from './pages/layout'

import { Box } from '@mui/material'


const App = () => {
  return (
    <Box className='flex w-full flex-wrap md:w-[938.96px] md:h-[583.23px] md:m-[111px_auto_73.77px_auto]  shadow-[0_5px_10px_#18244E26]'>
     
          <Layout></Layout>
   

          <Box className='flex flex-col'>
                  <Box className='md:w-[638px] md:h-[487.23px] p-[30px_40.5px_0_30px] overflow-y-scroll'>
                          <Description></Description>        
                  </Box>

                  <Box className='md:h-[96px]' sx={{borderTop:'1px #E4E4E4 solid'}} >
                  </Box>
            </Box>
            

    </Box>
  )
}

export default App