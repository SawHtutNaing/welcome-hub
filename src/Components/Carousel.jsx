import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Paper, Button, Container } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material'; // For the custom icons
import Card from './Card'
import Revenue from '../assets/icons/Revenue.svg'
import Partnership from '../assets/icons/Partnership.svg'
import Innovation from '../assets/icons/Innovation.svg'
const cardData = [
  {
    title: "Increased Revenue",
    description: "Efficiently match caregivers for short visits to prevent lost clients and boost your agency's revenue.",
    icon: Revenue
  },
  {
    title: "Advanced AI Matching",
    description: "Our AI-powered platform ensures the best matches between caregivers and patients, reducing manual work.",
    icon: Innovation
  },
  {
    title: "Exclusive Access",
    description: "Only verified and invited home care agencies can join, ensuring a trustworthy and secure environment.",
    icon: Partnership
  }

 
]

// const responsive = {
//   superLargeDesktop: { breakpoint: { max: 4000, min: 1024 }, items: 3 },
//   desktop: { breakpoint: { max: 1024, min: 768 }, items: 3 },
//   tablet: { breakpoint: { max: 768, min: 464 }, items: 2 },
//   mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
// };
let responsive={
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024
    },
    items: 3,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0
    },
    items: 1,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464
    },
    items: 2,
    partialVisibilityGutter: 30
  }
}

// Custom Left Arrow
const CustomLeftArrow = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        position: "absolute",
        left: "0",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer"
      }}
    >
      <ArrowBackIos style={{ fontSize: '40px', color: '#545F71' }} />
    </button>
  );
};

// Custom Right Arrow
const CustomRightArrow = ({ onClick }) => {
  return (
    <button 
      onClick={onClick} 
      style={{
        position: "absolute",
        right: "0",
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "transparent",
        border: "none",
        cursor: "pointer"
      }}
    >
      <ArrowForwardIos style={{ fontSize: '40px', color: '#545F71' }} />
    </button>
  );
};




export default function MyCarousel() {
  return (
    <Container
    maxWidth="false"
    disableGutters
    sx={{
      marginTop: '4rem',
    
    }}
  >
    <Carousel
      responsive={responsive}
      
      ssr={true}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      itemClass="carousel-item-no-padding"
      partialVisible={false}
      
      
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      // centerMode={true}     
    
    >
      {cardData.map((item, i) => (
       
          <Card item={item} key={i} />
       
      ))}
    </Carousel>
  </Container>
  );
}
