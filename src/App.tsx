import React from 'react'
import Description from './pages/description'
import Layout from './pages/layout'
import './App.css'


const App = () => {
  return (
    <div className='main-box'>
     
      <Layout></Layout>
   

   <div className="rightBox">
          <div className="main-content">
                  <Description></Description>        
          </div>

          <div className="buttons-content">

          </div>
    </div>
     

    </div>
  )
}

export default App