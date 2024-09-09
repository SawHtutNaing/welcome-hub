import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

import { Box, Typography } from '@mui/material';

export default function AccordionUsage() {
  return (
    <div className=' w-9/12 mx-auto'>
      <Accordion 
      
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{
            border:'2px solid #545F71' ,
            borderRadius:'10px'
          }}
          
        >
          What kind of support is available if I encounter issues?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
      <Accordion
      sx={{
        marginTop:'1rem'
      }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
          sx={{
            border:'2px solid #545F71' ,
            borderRadius:'10px'
          }}
        >
         How does the verification process work?
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion>
    
   <Box
   sx={{
    display:'flex',
    justifyContent:'end' ,
    marginTop:'2rem'
    
   }}
   >
   <Typography 
    sx={{
        color:'#90386B',
        fontSize:'1rem' ,
  marginLeft:'auto',
        borderBottom:'1px solid #90386B' ,
        display:'inline-block',
        fontWeight:'700'
    }}
    >
        Read more 

         
    </Typography>
    <Typography>
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke='#90386B' class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
</svg>

    </Typography>
   </Box>

    </div>
  );
}
