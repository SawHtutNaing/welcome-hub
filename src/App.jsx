import { useState } from 'react';
import './App.css';
import { Box, Container, Typography } from '@mui/material';
import HomeHero from './assets/images/home-hero.png';
import RightArrow from './assets/icons/RightArrow.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Container
    maxWidth="false"
    disableGutters
    
    >
      <Container
      maxWidth="false"
      disableGutters
      sx={{
        padding: '0rem',
        display: 'grid',
        gridTemplateColumns: '35% 65%',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left Side with Text and Button */}
      <Box
        sx={{
          marginTop:'2rem',
          paddingLeft: '11rem',
          zIndex: '1',
          marginRight: '-15rem',  // Overlaps the right side image
          height: '100%',
          backgroundImage: `linear-gradient(to right, rgba(250, 250, 250, 1), rgba(255, 255, 255, 0))`,
          backgroundSize: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          
          alignItems: 'start',
          position: 'relative',
        }}
      >
        {/* Text Elements */}
        <Typography
          color="#2A3C8D"
          fontSize="3rem"
          lineHeight="1.3"
          letterSpacing="-0.02em"
          fontWeight="800"
          textAlign="start"
        >
          Match Clients with Ideal <br /> Caregivers Instantly
        </Typography>

        <Typography
          fontSize="1.5rem"
          lineHeight="1.3"
          letterSpacing="-0.02em"
          fontWeight="700"
          textAlign="start"
        >
          AI-powered matching for seamless caregiver connections.
        </Typography>

        <Typography textAlign="start">
          Wellcome Hub is a cutting-edge application designed to streamline the
          process of matching caregivers with patients, either within a single
          home care agency or across multiple agencies. We are a dedicated team
          committed to enhancing the efficiency and effectiveness of home care
          services in Connecticut.
        </Typography>

        {/* Button */}
        <Box>
          <button
            className=" text-primary border-primary border-2
              text-button-m font-semibold  text-sm px-4  py-3  me-2 mb-2  rounded-button"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Learn More</Typography>
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>


            </Box>
          </button>
          <button
            className=" text-white bg-primary border-primary border-2
              text-button-m font-semibold  text-sm px-4  py-3  me-2 mb-2  rounded-button"
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography>Join the Hub</Typography>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

            </Box>
          </button>
        </Box>
      </Box>

      {/* Right Side with Image */}
      <Box
  sx={{
    position: 'relative',
    width: '100%',
    height: '100%',

    zIndex: 0, // Background and image are in the same layer
  }}
>
  {/* Left Side with the white gradient background */}
  <Box
    sx={{
      width:'10rem',
      backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)`,
      height: '100%',
      zIndex: 8000, 
      position:'absolute',
      left:'0',
      top:'0'
    }}
  />

  {/* Right Side with Image */}
  <Box
    component="img"
    src={HomeHero}
    alt="Home Hero"
    sx={{
      width: '100%',
      height: '100%',
      objectFit: '100%',
      zIndex:'-9',
      position: 'relative', // Keeps image aligned in its box
    }}
  />
</Box>

     
    </Container>

    <Container 
      maxWidth="false"
      disableGutters
    sx={{
      paddingTop:'7rem',
      height:'100vh'
    }}
    >
      <Box>
        <Typography
        variant='h2'
        textAlign='center'
        fontSize='2rem'
        lineHeight='1.3'
        letterSpacing='-0.02em'
        fontWeight='700'

        sx={{
          color:'#90386B' 
        }}
        >
          Why Welcome Hub ?
        </Typography>
        <Typography
        variant='h2'
        textAlign='center'
        fontSize='2rem'
        lineHeight='1.3'
        letterSpacing='-0.02em'
        fontWeight='800'

        sx={{
          color:'##222222' 
        }}
        >
          Discover the Benefits and Value We Offer
        </Typography>
        <Typography
        variant='h2'
        textAlign='center'
        fontSize='1rem'
        lineHeight='1.5'
        letterSpacing='0em'
        fontWeight='400'
        paddingX='15rem'

        sx={{
          color:'##222222' 
        }}
        >
          Wellcome Hub is a pioneer in the home care industry, leveraging advanced technology to address the common challenges faced by home care agencies. 
        </Typography>
      </Box>
    </Container>

    </Container>

  );
}

export default App;
