import { Typography } from '@mui/material'
import React from 'react'

const ComonFont = ({text,sx}) => {
  return (
   <Typography
   sx={{
    color:'#F4F4F4',
    fontSize:'18px',
    
    lineHeight:"30px",
    letterSpacing:"-0.02em" ,
    textAlign:"center" ,
    ...sx
   }}
   dangerouslySetInnerHTML={{ __html: text }}
   />


   
  )
}

export default ComonFont