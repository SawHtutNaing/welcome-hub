import { Button, Paper, Typography } from '@mui/material'
import React from 'react'




const Card = ({item}) => {
  return (
<Paper 
      
      variant="outlined"
      style={{
        width:'296px',
        padding: '24px',
        textAlign: 'center',
        borderRadius: '10px',
        minHeight: '374px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center' ,
        borderRadius:'12px',
        boxShadow: '0px 4px 10px 2px rgba(157, 144, 172, 0.5)', 
        


            overflow:'visible'
      }}
    >
      {/* Replace this emoji with a real icon as needed */}
      <div style={{marginBottom: '16px' , display:'flex' , justifyContent:'center' }}>
        <img src={item.icon} alt="" />
      </div>
      <Typography 
      sx={{
        fontSize:'1.5rem',
        lineHeight:'1.3',
        letterSpacing:'-0.02em'
      }}
      gutterBottom>
        {item.title}
      </Typography>
      <Typography variant="body2" component="p">
        {item.description}
      </Typography>
     
    </Paper>
  )
}

export default Card