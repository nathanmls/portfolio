import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  Box,
} from '@chakra-ui/react'
import CarouselHero from '../atoms/CarouselHero';
import Sun from '../atoms/Sun';
// import { TypeAnimation } from 'react-type-animation';

// const TypeAnimationHero = () => {
//   return (
//     <TypeAnimation
//       sequence={[
//         // Same substring at the start will only be typed out once, initially
//         'Front-End Developer',
//         1000, // wait 1s before replacing "Mice" with "Hamsters"
//         'Video Producer',
//         1000,
//         'Graphic Designer',
//         1000,
//         'Photographer',
//         1000
//       ]}
//       wrapper="span"
//       speed={50}
//       style={{ fontWeight: '600', display: 'inline-block' }}
//       repeat={Infinity}
//     />
//   );
// };
  

export default function Hero() {

  return (
    <>
    <Container maxW={"1200px"} px={{ base: 4, md: 4}} py={12}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacingy={3} alignSelf="center" maxW="500px" textAlign={{ base:"center", md:"left"}}>
          <chakra.h1 color={"#DD9331"} fontSize="43" lineHeight={1} fontWeight="bold">
          I Am<br />
            <chakra.span color="#1D4036">Nathan Martins</chakra.span>
          </chakra.h1>
          <Text
            fontSize="16"
            lineHeight="1.375"
            fontWeight="400"
            color="#1D4036"
          >
            Advertisier especialized in <chakra.span fontWeight="600">UX Designer</chakra.span>. I love to bring ideas to life through designs that inspires, communicates, and connects people.
          </Text>
        </Stack>
        <Box mt={{ base:"4rem", md: 0 }} ml={{ base: 0, md: 5 }} display="flex" alignSelf={"center"}>
          <Box pos="absolute" mb={"0"} height="auto" align={"center"} zIndex={-1}>
          <Sun/>
          </Box>
          <Box>
          <CarouselHero/>
          </Box>
        </Box>
      </Stack>
    </Container>
    </>
  );
};