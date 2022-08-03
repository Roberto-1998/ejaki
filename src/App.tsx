import React from 'react'
import Description from './pages/description'
import Layout from './pages/layout'

import { Box } from '@mui/material'


const App = () => {
  return (
    <Box sx={{display:'flex', maxWidth:'938.96px', minHeight:'583.23px', margin:'111px auto 73.77px auto', boxShadow:'0px 5px 10px #18244E26'}}>
     
      <Layout></Layout>
   

   <Box sx={{display:'flex', flexDirection:'column'}}>
          <Box sx={{height:'487.23px', maxWidth:'638px', padding:"30px 40.5px 0 30px", overflow:'scroll'}}>
                  <Description></Description>        
          </Box>

          <Box sx={{borderTop:'1px #E4E4E4 solid', minHeight:'96px'}} >

          </Box>
    </Box>
     

    </Box>
  )
}

export default App