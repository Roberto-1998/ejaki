import React from 'react'


// Material UI
import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import {CssStepper} from './StyledStepperForm.component'


const steps = [
  {
    label: 'Datos generales',
 
  },
  {
    label: 'Acerca de la tienda',
   
  },
  {
    label: 'Logo de la tienda',
  },
  {
    label: 'Imagen para el catálogo',
  },
  {
    label: 'Imagen de banner',
  },
  {
    label: 'Métodos de entrega',
  },
];


const StepperForm = () => {
  const [activeStep, setActiveStep] = React.useState(0);

/*   const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  }; */



  return (
    <Box sx={{ maxWidth: 400}}>
      <CssStepper activeStep={activeStep} orientation="vertical"  >
        {steps.map((step, index) => (
          <Step  key={step.label} >
            <StepLabel 
              /* optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              } */
            >
           {step.label}
            </StepLabel>
            <StepContent>
             {/*  <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box> */}
            </StepContent>
          </Step>
        ))}
      </CssStepper>
     {/*  {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )} */}
    </Box>
  );
}

export default StepperForm
