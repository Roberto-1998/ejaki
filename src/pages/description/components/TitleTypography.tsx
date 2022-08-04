import React from 'react'
import { Typography } from '@mui/material';

type Props = {
  children: string;
  sx?: object;
};

export const TitleTypography = ({ children, sx }: Props) => {
  return (
    <Typography sx={{fontWeight:'600', color:'#031A1E', fontSize:'17px', marginBottom:'10px', ...sx}} variant='h4'>
      {children}
    </Typography>
  )
}


