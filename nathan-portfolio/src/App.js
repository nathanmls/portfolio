import Header from './components/molecules/Header';
import Hero from './components/organisms/Hero';
import About from './components/organisms/About';
import { ChakraProvider, Flex, chakra } from '@chakra-ui/react'
import Journey from './components/organisms/Journey';
import Showcase from './components/organisms/Showcase';
import Contact from './components/organisms/Contact';
import Footer from './components/molecules/Footer';

function App() {
  return (
    <>
    <ChakraProvider>
      <Header/>
      <Hero/>
      <Flex h={{base:"400px", sm:"400px", md:"400px"}} mt="-200px" mb={"-1px"} style={{WebkitMaskImage:"url(./mountain.svg)", WebkitMaskPosition:"bottom center", WebkitMaskRepeat:"repeat-x"}} bgSize="auto" bg={"url('./noise-bg.png')"} bgGradient="linear(to-t, #115945, #1D4036)" backgroundSize={"100% 100%"} zIndex={0}></Flex>
      <About/>
      {/* <Flex h={{base:"60px", sm:"100px", md:"197px"}} mt={"-2px"} align="center"  justify="center" style={{WebkitMaskImage: "url(./curve.svg)", WebkitMaskSize: "100% 101%",  WebkitMaskPosition:"center", WebkitMaskRepeat:"no-repeat"}} bgSize="auto" bg={"url('./noise-bg.png') #115945"} backgroundSize={"100% 100%"} w={"100%"} zIndex={0}></Flex> */}
      <Flex align={"center"} justify={"center"} height={"100px"} mt={-12} color={"#F9F0DF"} background={"#A45826"}><chakra.h2 fontSize="4xl" fontWeight="bold" textAlign="center">My Journey</chakra.h2></Flex>
      <Journey/>
      <Flex w={"50x"} align={"center"} justify={"center"} height={"100px"} color={"#1D4036"} background={"#DD9331"}><chakra.h2 fontSize="4xl" fontWeight="bold" textAlign="center">ShowCase</chakra.h2></Flex>
      <Showcase/>
      <Contact/>
      <Footer/>
    </ChakraProvider>
    </>
  );
}

export default App;
