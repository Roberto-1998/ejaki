import React from 'react'
//import GeneralInfo from './pages/GeneralInfo';
//import FormButtons from './pages/FormButtons';
//import CustomDomain from './pages/GeneralInfo/components/CustomDomain.component'
import ImageLoader from './pages/ImageLoader'

const App = () => {
  return (
    <>
      {/*<GeneralInfo></GeneralInfo>
      <hr />
  <FormButtons></FormButtons>*/}
    <ImageLoader 
    title='Logo de la tienda'
    description='Este logo será el identificador de tu tienda en nuestro catálogo de tiendas. La imagen del logo debe ser cuadrada y no menor de 80 x 80 píxeles.'/>
    </>
  )
}

export default App