
  import React from 'react';
  import { Box, Image } from '@chakra-ui/react';
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

  
  export default function CarouselHero() {
    const settings = {
      centerMode:true,
      dots: false,
      arrows: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 5000,
      slidesToShow: 1,
      slidesToScroll: 1,
    };

    return (
      <Box
      maxW="700px"
      boxSize={'lg'} 
      h={"100%"}
            >

        <Slider {...settings}>
            <Box display={"flex !important"} justifyContent={"center"}>
              <Image src='./header-imgs/app-wippe.png' alt='hero'/>
            </Box>
            <Box display={"flex !important"} justifyContent={"center"}>
              <Image src='./header-imgs/Logo-Meu-Credito-Liberado.png' alt='hero'/>
            </Box>
            <Box display={"flex !important"} justifyContent={"center"}>
              <Image src='./header-imgs/Site-CleverPing.png' alt='hero'/>
            </Box>
            <Box display={"flex !important"} justifyContent={"center"}>
              <Image src='./header-imgs/Site-Endolog.png' alt='hero'/>
            </Box>
            <Box display={"flex !important"} justifyContent={"center"}>
              <Image src='./header-imgs/Site-Meu-Credito-Liberado.png' alt='hero'/>
            </Box>
            <Box display={"flex !important"} justifyContent={"center"}>
              <Image src='./header-imgs/site-wippe.png' alt='hero'/>
            </Box>
          </Slider>
      </Box>
    );
  }