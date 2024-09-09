import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import CustomizedTimeline from './Components/CustomizedTimeline'
import H2Heading from './Components/H2Heading'
import H3Heding from './Components/H3Heding'
import ComonFont from './Components/ComonFont'

H2Heading

const Work = () => {
  return (
<Container
maxWidth={false}
disableGutters
sx={{
  // height:'150vh'
}}
>
<Typography
textAlign='center'
lineHeight='1.3'
letterSpacing='-0.02em'
fontWeight='700'
sx={{
  
  color:'#90386B',
  fontSize:'2rem',
}}
>How Welcome Hub Works</Typography>

<Typography
textAlign='center'
lineHeight='1.3'
letterSpacing='-0.02em'
fontWeight='700'
marginTop='10px'
sx={{
  
  color:'#545F71',
  fontSize:'24px',
}}
>
Simplifying the Caregiver Matching Process

</Typography>
  

<CustomizedTimeline></CustomizedTimeline>


<Box 
sx={{
  display:'flex',
  justifyContent:"center",
  
}}

>
<Typography 
color='#2A3C8D'
fontWeight='700'

fontsize='1.5rem'
lineHeight='1.3'
letterSpacing='-0.02em'
width='1280px'
textAlign='center'
>
Want to Simplify  <br /> the Caregiver Matching <br /> Process in Your Agency? 
</Typography>

</Box>
<Box 
sx={{
  display:'flex',
  justifyContent:"center",
  marginTop:'3rem'

  
  
}}
>
<button
            className=" text-white bg-primary border-primary border-2
              text-button-m font-semibold  text-sm px-4  py-3  me-2 mb-2  rounded-button  my-button text-center" 
           
          >
            <Box sx={{ display: 'flex', alignItems: 'center' , justifyContent:'center' }}>
              <Typography
              fontWeight='600'
              lineHeight='1.3'
letterSpacing='-0.02em'
fontsize='1.5rem'
              >Join the Hub</Typography>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </Box>
          </button>
</Box>


<Box
sx={{
  background:'linear-gradient(180deg, #90386B 0%, #69629D 100%)' ,
  marginTop:'5rem ' ,
  paddingTop:'5rem'
}}
height='120vh'


>
<H2Heading  text={'How to Join Our Platform?'}/>

<Box  
sx={{
  marginTop:'2rem ' ,
  
}}
>
<H2Heading  text={'1'}/>
<H3Heding 
sx={{
  marginTop:'1rem'
}}
text={'Fill Out the Application Form'}></H3Heding>
<ComonFont 
sx={{
  marginTop:'1rem'

}}

text={'Submit the required documents and review the terms <br/> of our platform. The process is quick and simple, <br/> and we are always here to help you.'} />
</Box>


<Box  
sx={{
  marginTop:'2rem ' ,
  
}}
>
<H2Heading  text={'2'}/>
<H3Heding 
sx={{
  marginTop:'1rem'
}}
text={'Screening Process and Acreditation'}></H3Heding>
<ComonFont 
sx={{
  marginTop:'1rem'

}}

text={'We will ensure that your agency provides professional <br/>  caregivers, meets all legal requirements, and has good  <br/>  reviews. This step is crucial to maintaining the high quality <br/>  of our services.'} />
</Box>


<Box  
sx={{
  marginTop:'2rem ' ,
  
}}
>
<H2Heading  text={'3'}/>
<H3Heding 
sx={{
  marginTop:'1rem'
}}
text={'Log In and Find a Caregiver for Your Client'}></H3Heding>
<ComonFont 
sx={{
  marginTop:'1rem'

}}

text={'Once approved, log in to our platform and easily find <br/> the right caregiver for your client\'s needs.'} />
</Box>

</Box>

</Container>
  )
}

export default Work