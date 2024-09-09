import { Typography } from '@mui/material'
import React from 'react'

const H3Heding = ({text,sx}) => {
  return (
   <Typography
   sx={{
    color:'#F4F4F4',
    fontSize:'1.5rem',
    fontWeight:'bold',
    lineHeight:"30px",
    letterSpacing:"-0.02em" ,
    textAlign:"center" ,
    ...sx
   }}
   >
{text}

   </Typography>
  )
}

export default H3Heding