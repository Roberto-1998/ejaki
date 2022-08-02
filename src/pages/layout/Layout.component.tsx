
import React from 'react'
import './Layout.component.css'
import StepperForm from './components/StepperForm'

const Layout = () => {
  return (
    <div className='contentBox'>
      <h1>Bienvenido Francisco!</h1>
      <p>Ya casi comenzamos, solo necesitamos unos datos más</p>
      <StepperForm></StepperForm>
    </div>
  )
}

export default Layout


