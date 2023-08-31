
  import React from 'react';
  import { Box, Image } from '@chakra-ui/react';
  import {ArrowRightIcon} from '@chakra-ui/icons';
  // Here we have used react-icons package for the icons
  //import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  // And react-slick as our Carousel Lib
  import Slider from 'react-slick';
  // As we have used custom buttons, we need a reference variable to
  // change the state
  //const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes


  // Settings for the slider
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "red", right:"10px" }}
        onClick={onClick}
      ><ArrowRightIcon/></div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", color: "green", left:"10px", zIndex:"9" }}
        onClick={onClick}
      />
    );
  }
  
  export default function CarouselShowCase() {
    const settings = {
      centerMode:true,
      dots: true,
      arrows: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 4,
      slidesToScroll: 4,
      focusOnSelect:true ,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]

    };

    return (
      <Box
      maxW={"100vw"}
      boxSize={"100%"}
      >

        <Slider {...settings} >
            <Box _hover={{transform: "scale(1.06)", transition: "all .2s ease-in-out",}} p={{base:"6", xl:"8"}} display={"flex !important"} justifyContent={"center"}>
              <Image src='./exemple.svg' alt='exemple'/>
            </Box>
            <Box _hover={{transform: "scale(1.06)", transition: "all .2s ease-in-out",}} p={{base:"6", xl:"8"}} display={"flex !important"} justifyContent={"center"}>
              <Image src='./exemple.svg' alt='exemple'/>
            </Box>
            <Box _hover={{transform: "scale(1.06)", transition: "all .2s ease-in-out",}} p={{base:"6", xl:"8"}} display={"flex !important"} justifyContent={"center"}>
              <Image src='./exemple.svg' alt='exemple'/>
            </Box>
            <Box _hover={{transform: "scale(1.06)", transition: "all .2s ease-in-out",}} p={{base:"6", xl:"8"}} display={"flex !important"} justifyContent={"center"}>
              <Image src='./exemple.svg' alt='exemple'/>
            </Box>
            <Box _hover={{transform: "scale(1.06)", transition: "all .2s ease-in-out",}} p={{base:"6", xl:"8"}} display={"flex !important"} justifyContent={"center"}>
              <Image src='./exemple.svg' alt='exemple'/>
            </Box>
            <Box _hover={{transform: "scale(1.06)", transition: "all .2s ease-in-out",}} p={{base:"6", xl:"8"}} display={"flex !important"} justifyContent={"center"}>
              <Image src='./exemple.svg' alt='exemple'/>
            </Box>
          </Slider>
      </Box>
    );
  }