import { Typography } from '@mui/material'
import React from 'react'

const MostFont = ({text , sx }) => {
  return (
    <Typography
  
    sx={{
        fontSize:'12px',
        fontWeight:'700',
        lineHeight:'2',
        letterSpacing:'-0.02',
        color:'#545F71',
        
        ...sx
    }}
    >
    {text}
    </Typography>
  )
}

export default MostFont