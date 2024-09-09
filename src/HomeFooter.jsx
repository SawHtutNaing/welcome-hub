import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import Accordion from './Components/Accordion'
import H2Heading from './Components/H2Heading'

import Vector from './assets/images/Vector.svg'
import H3Heding from './Components/H3Heding'


const HomeFooter = () => {
  return (
    <Container 
    maxWidth
    disableGutters
    sx={{
        
        paddingTop:'4rem'
    }}
    >
        <H2Heading text={'Frequently Asked Questions'}
        sx={{
            color:'#90386B'
        }}
        
        ></H2Heading>
        
<Box 
sx={{
    marginTop:'3rem'
}}
>
<Accordion></Accordion>
</Box>

<Box
sx={{
    
    marginTop:'3rem'
}}
>
<Box
component='img'
src={Vector}
width='300px'
height='300px'
margin='auto'
/>

<H2Heading text={'Ready to Transform Your Agency?'}
        sx={{
            color:'#2A3C8D' ,
            marginTop:'1rem'
        }}
        
        ></H2Heading>

        <H3Heding
        text={'Apply for Membership Today'}
        sx={{
            color:'#90386B' ,
            marginTop:'1rem'
        }}
        >

        </H3Heding>

       <Box
       sx={{
        display:'flex',
        justifyContent:'center',
        marginTop:'1rem'
       }}
       >
       <button
            className=" text-white bg-primary border-primary border-2
              text-button-m font-semibold  text-sm px-4  py-3  me-2 mb-2  rounded-button"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Join the Hub</Typography>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


            </Box>
          </button>
       </Box>
</Box>

<Box
sx={{
    background: 'linear-gradient(90deg, #69629D 0%, #2A3C8D 100%)',
    marginTop:'3rem',
    height: '300px',
    width:'100vw' ,
    paddingTop:'3rem'
    
}}
>
<H3Heding
        text={'Contact Us'}
        sx={{
            color:'#F4F4F4' ,
            marginTop:'1rem'
        }}
        >

        </H3Heding>
        <H3Heding
        text={'About'}
        sx={{
            color:'#F4F4F4' ,
            marginTop:'1rem'
        }}
        >

        </H3Heding>
        <H3Heding
        text={'Privacy Policy'}
        sx={{
            color:'#F4F4F4' ,
            marginTop:'2rem'
        }}
        >

        </H3Heding>

        <H3Heding
        text={'Terms & Conditions'}
        sx={{
            color:'#F4F4F4' ,
            marginTop:'1rem'
        }}
        >

        </H3Heding>
        <Typography
        sx={{
            color:'#F4F4F4',
            textAlign:'center',
            marginTop:'1rem'
        }}
        >
        © 2024 Wellcome Hub, LLC. All Rights Reserved.
        </Typography>
</Box>
    </Container>
  )
}

export default HomeFooter