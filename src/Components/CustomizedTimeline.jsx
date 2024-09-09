import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Typography, Box } from '@mui/material';

export default function CustomizedTimeline() {
  return (
    <Timeline position="alternate" sx={{
      marginTop:'3rem'
    }}>


<TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot variant="outlined" sx={{  margin:'0px' , padding:'1rem'}} />
          <TimelineConnector sx={{ backgroundColor: '#D1D1F6', height: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6" sx={{ color: '#5E35B1', fontWeight: 'bold' }}>
            
            </Typography>
            <Typography variant="body2">
            
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem >




      <TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot children='1' className='timelineDot' variant="filled" sx={{ backgroundColor: '#CBBEC5', width: '50px', height: '50px' , margin:'0px'}} />
          <TimelineConnector sx={{ backgroundColor: '#D1D1F6', height: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{
            display:'flex' ,
            justifyContent:'center' ,
            width:'30rem' ,
            marginLeft:'auto',
            alignItems:'center',
            columnGap:'1rem',
            marginTop:'-1rem'
          }}>
          <Box sx={{  width:'45%' }}>
            <Typography variant="h6" sx={{ color: '#695F9F', fontWeight: 'bold' }}>
              Profile Creation
            </Typography>
            <Typography variant="body2" sx={{color:'#545F71' , fontSize:'16px' } }>
              Agencies create profiles for their caregivers and clients.
            </Typography>
          </Box>
          <Box sx={{  m: 'auto 0'  , width:'40%'  }}>
            <div className=' py-0.5 bg-timelineBar  w-full  relative'>
              <div className='leftPoint'></div>
            </div>
          </Box>
          </Box>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot children='2' className='timelineDot' variant="filled" sx={{ backgroundColor: '#C2A4B5', width: '50px', height: '50px' , margin:'0px'}} />
          <TimelineConnector sx={{ backgroundColor: '#D1D1F6', height: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{
            display:'flex' ,
            justifyContent:'center' ,
            width:'30rem' ,
            
            alignItems:'center',
            columnGap:'1rem',
            marginTop:'-1rem' ,
            flexDirection:'row-reverse'
          }}>
          <Box sx={{  width:'45%' }}>
            <Typography variant="h6" sx={{ color: '#695F9F', fontWeight: 'bold' }}>
              Profile Creation
            </Typography>
            <Typography variant="body2" sx={{color:'#545F71' , fontSize:'16px' } }>
              Agencies create profiles for their caregivers and clients.
            </Typography>
          </Box>
          <Box sx={{  m: 'auto 0'  , width:'40%'  }}>
            <div className=' py-0.5 bg-timelineBar  w-full  relative'>
              <div className='rightPoint'></div>
            </div>
          </Box>
          </Box>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot children='3' className='timelineDot' variant="filled" sx={{ backgroundColor: '#AB8EAC', width: '50px', height: '50px' , margin:'0px'}} />
          <TimelineConnector sx={{ backgroundColor: '#D1D1F6', height: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{
            display:'flex' ,
            justifyContent:'center' ,
            width:'30rem' ,
            marginLeft:'auto',
            alignItems:'center',
            columnGap:'1rem',
            marginTop:'-1rem'
          }}>
          <Box sx={{  width:'45%' }}>
            <Typography variant="h6" sx={{ color: '#695F9F', fontWeight: 'bold' }}>
              Profile Creation
            </Typography>
            <Typography variant="body2" sx={{color:'#545F71' , fontSize:'16px' } }>
              Agencies create profiles for their caregivers and clients.
            </Typography>
          </Box>
          <Box sx={{  m: 'auto 0'  , width:'40%'  }}>
            <div className=' py-0.5 bg-timelineBar  w-full  relative'>
              <div className='leftPoint'></div>
            </div>
          </Box>
          </Box>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot children='4' className='timelineDot' variant="filled" sx={{ backgroundColor: '#8A74A1', width: '50px', height: '50px' , margin:'0px'}} />
          <TimelineConnector sx={{ backgroundColor: '#D1D1F6', height: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{
            display:'flex' ,
            justifyContent:'center' ,
            width:'30rem' ,
            
            alignItems:'center',
            columnGap:'1rem',
            marginTop:'-1rem',
            flexDirection:'row-reverse'
          }}>
          <Box sx={{  width:'45%' }}>
            <Typography variant="h6" sx={{ color: '#695F9F', fontWeight: 'bold' }}>
              Profile Creation
            </Typography>
            <Typography variant="body2" sx={{color:'#545F71' , fontSize:'16px' } }>
              Agencies create profiles for their caregivers and clients.
            </Typography>
          </Box>
          <Box sx={{  m: 'auto 0'  , width:'40%'  }}>
            <div className=' py-0.5 bg-timelineBar  w-full  relative'>
              <div className='rightPoint'></div>
            </div>
          </Box>
          </Box>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot children='5' className='timelineDot' variant="filled" sx={{ backgroundColor: '#5D5595', width: '50px', height: '50px' , margin:'0px'}} />
          <TimelineConnector sx={{ backgroundColor: '#D1D1F6', height: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{
            display:'flex' ,
            justifyContent:'center' ,
            width:'30rem' ,
            marginLeft:'auto',
            alignItems:'center',
            columnGap:'1rem',
            marginTop:'-1rem'
          }}>
          <Box sx={{  width:'45%' }}>
            <Typography variant="h6" sx={{ color: '#695F9F', fontWeight: 'bold' }}>
              Profile Creation
            </Typography>
            <Typography variant="body2" sx={{color:'#545F71' , fontSize:'16px' } }>
              Agencies create profiles for their caregivers and clients.
            </Typography>
          </Box>
          <Box sx={{  m: 'auto 0'  , width:'40%'  }}>
            <div className=' py-0.5 bg-timelineBar  w-full  relative'>
              <div className='leftPoint'></div>
            </div>
          </Box>
          </Box>
        </TimelineContent>
        </TimelineItem>
        <TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot children='6' className='timelineDot' variant="filled" sx={{ backgroundColor: '#2D3C8C', width: '50px', height: '50px' , margin:'0px'}} />
          <TimelineConnector sx={{ backgroundColor: '#D1D1F6', height: '50px' }} />
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{
            display:'flex' ,
            justifyContent:'center' ,
            width:'30rem' ,
            flexDirection:'row-reverse',
            alignItems:'center',
            columnGap:'1rem',
            marginTop:'-1rem'
          }}>
          <Box sx={{  width:'45%' }}>
            <Typography variant="h6" sx={{ color: '#695F9F', fontWeight: 'bold' }}>
              Profile Creation
            </Typography>
            <Typography variant="body2" sx={{color:'#545F71' , fontSize:'16px' } }>
              Agencies create profiles for their caregivers and clients.
            </Typography>
          </Box>
          <Box sx={{  m: 'auto 0'  , width:'40%'  }}>
            <div className=' py-0.5 bg-timelineBar  w-full  relative'>
              <div className='rightPoint'></div>
            </div>
          </Box>
          </Box>
        </TimelineContent>
        </TimelineItem>


     
      
<TimelineItem >
        <TimelineSeparator 
     
        >
          <TimelineDot variant="outlined" sx={{  margin:'0px' , padding:'1rem' , backgroundColor:'#2A1A38'}} />
     
        </TimelineSeparator>
        <TimelineContent>
          <Box sx={{ ml: 2 }}>
            <Typography variant="h6" sx={{ color: '#5E35B1', fontWeight: 'bold' }}>
            
            </Typography>
            <Typography variant="body2">
            
            </Typography>
          </Box>
        </TimelineContent>
      </TimelineItem >

     
    </Timeline>
  );
}
