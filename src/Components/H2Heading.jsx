import { Typography } from '@mui/material'
import React from 'react'

const H2Heading = ({text , sx}) => {
  return (
   <Typography
   sx={{
    color:'#F4F4F4',
    fontSize:'2rem',
    fontWeight:'bold',
    lineHeight:"1.3",
    letterSpacing:"-0.02em" ,
    textAlign:"center" ,
    ...sx 
   }}
   >
{text}

   </Typography>
  )
}

export default H2Heading