import * as React from 'react';
import {
  chakra,
  Container,
  Stack,
  Text,
  Box,
  Image,
  VStack,
  Heading,
  SimpleGrid,
  Tooltip,
  
} from '@chakra-ui/react'

const About = () => {
  
  return (
    <>
    
    <VStack id="aboutme" bg={"url('./noise-bg.png') #115945"} pb={"120px"}>
    <Container mt={{ base: "-100px", md: "-100px" }} maxW={"1200px"} px={{ base: 4, lg:6, md: 6}} pt={12} zIndex={1}>
    
      <Stack mb={"5rem"} direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Box alignSelf={"center"} mb={{ base:"30px", md: 0 }} mr={{ base: "18px", md: 5 }} pos="relative">
          <Image shadow={"18px 18px 0 #DD9331"} minW={"300"} roundedTop={"full"} src="./nathan-martins-profile-picture.jpg" alt="Nathan Martins" />
        </Box>
        <Stack direction="column" spacing={6} justifyContent="center" maxW="650px" px={"5"} textAlign={{base:"center", md:"left"}}>
          <chakra.h1 color={"#DD9331"} fontSize="40px" lineHeight={1} fontWeight="bold">
          Hey There!
          </chakra.h1>
          <Text
            lineHeight="1.375"
            fontWeight="400"
            color="#F9F0DF"
          >
            I am Nathan, a Brazilian professional currently based in Amsterdam. With a strong background in <strong>graphic design</strong>, I specialize in creating visually appealing content for various media platforms. My expertise also extends to <strong>UX/UI</strong> design and <strong>front-end development</strong>, enabling me to deliver responsive and efficient layouts. Additionally, I possess experience in video production and motion graphics, allowing me to create dynamic and engaging pieces. 
            <br/><br/>
I am proficient in utilizing software such as <strong>Figma, Adobe XD, Photoshop, InDesign, Illustrator, Premiere, and After Effects</strong>. Over the years, I have garnered extensive experience working with diverse industries, including Retail, Healthcare, IT, Digital Marketing, Civil Engineering/Architecture, and Event Production. 
<br/><br/>
When it comes to my work, I am confident in my skills and decision-making abilities, which ultimately lead to successful project outcomes. To foster innovation and surpass expectations, I consistently strive to stay abreast of industry trends and acquire new skills. I prioritize efficient delivery and customer satisfaction, recognizing their paramount importance.
          </Text>
        </Stack>
        
      </Stack>

      <SimpleGrid direction={{ base: 'column', md: 'row' }} verticalAlign={"baseline"} columns={{base:"1", sm:"2", md:"3", lg:"5"}} spacingY={"30px"} spacingX={"30px"} justifyContent="center">
      <Box color={"#F9F0DF"} textAlign={"center"} mb={{ base:"0", md: 0 }} pos="relative">
        <Box w={{base:"210px", lg:"100%"}} display={"inline-grid"} border={"3px solid rgba(0, 0, 0, 0.26);"} mb={"10px"} rounded={"15px"}>
          <SimpleGrid display={"inline-grid"} columns="3" spacingX='13px' spacingY='13px' p="4">
            <Tooltip label='HTML'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/html.svg' alt='HTML' /></Tooltip>
            <Tooltip label='CSS'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/css.svg' alt='CSS' /></Tooltip>
            <Tooltip label='SEO'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/seo.svg' alt='SEO' /></Tooltip>
            <Tooltip label='ReactJS'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/react.svg' alt='ReactJS' /></Tooltip>
            <Tooltip label='Wordpress'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/wordpress.svg' alt='Wordpress' /></Tooltip>
            <Tooltip label='JavaScript'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/js.svg' alt='JavaScript' /></Tooltip>
          </SimpleGrid>          
        </Box>
        <Heading mb="10px" size='md'>Front-Page Dev<br/> and SEO</Heading>
        <Text fontSize={"small"}>
          HTML, CSS, Java Script, Wordpress, React JS
        </Text>
      </Box>
      <Box color={"#F9F0DF"} textAlign={"center"} mb={{ base:"30px", md: 0 }} pos="relative">
        <Box w={{base:"210px", lg:"100%"}} display={"inline-grid"} border={"3px solid rgba(0, 0, 0, 0.26);"} mb={"10px"} rounded={"15px"}>
          <SimpleGrid display={"inline-grid"} columns="3" spacingX='13px' spacingY='13px' p="4">
            <Tooltip label='Figma'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/figma.svg' alt='Figma' /></Tooltip>
            <Tooltip label='Adobe XD'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/adobe-xd.svg' alt='Adobe XD' /></Tooltip>
            <Tooltip label='Hotjar'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/hotjar.svg' alt='Hotjar' /></Tooltip>
          </SimpleGrid>          
        </Box>
        <Heading mb="10px" size='md'>UX/UI + <br/>Design Thinking</Heading>
        <Text fontSize={"small"}>
        Figma, Adobe XD, Hotjar, User Journey, A/B Test, Benchmark, React UI
        </Text>
      </Box>
      <Box color={"#F9F0DF"} textAlign={"center"} mb={{ base:"30px", md: 0 }} pos="relative">
        <Box w={{base:"210px", lg:"100%"}} display={"inline-grid"} border={"3px solid rgba(0, 0, 0, 0.26);"} mb={"10px"} rounded={"15px"}>
          <SimpleGrid display={"inline-grid"} columns="3" spacingX='13px' spacingY='13px' p="4">
            <Tooltip label='Photoshop'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/photoshop.svg' alt='Photoshop' /></Tooltip>
            <Tooltip label='Illustrator'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/illustrator.svg' alt='Illustrator' /></Tooltip>
            <Tooltip label='Premiere'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/premiere.svg' alt='Premiere' /></Tooltip>
            <Tooltip label='Adobe XD'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/adobe-xd.svg' alt='Adobe XD' /></Tooltip>
            <Tooltip label='After Effects'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/after-effects.svg' alt='After Effects' /></Tooltip>
          </SimpleGrid>          
        </Box>
        <Heading mb="10px" size='md'>Visual Softwares</Heading>
        <Text fontSize={"small"}>
          Photoshop, Illustrator, InDesign, Premiere, After Effects
        </Text>
      </Box>
      <Box color={"#F9F0DF"} textAlign={"center"} mb={{ base:"30px", md: 0 }} pos="relative">
        <Box w={{base:"210px", lg:"100%"}} display={"inline-grid"} border={"3px solid rgba(0, 0, 0, 0.26);"} mb={"10px"} rounded={"15px"}>
          <SimpleGrid display={"inline-grid"} columns="3" spacingX='13px' spacingY='13px' p="4">
            <Tooltip label='Blender'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/blender.svg' alt='Blender' /></Tooltip>
            <Tooltip label='Dimension'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/dimension.svg' alt='Dimension' /></Tooltip>
            <Tooltip label='ScketchUp'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/sketchup.svg' alt='ScketchUp' /></Tooltip>
          </SimpleGrid>          
        </Box>
        <Heading mb="10px" size='md'>3D</Heading>
        <Text fontSize={"small"}>
        Blender, Sketchup, Dimension, After Effects
        </Text>
      </Box>
      <Box color={"#F9F0DF"} textAlign={"center"} mb={{ base:"30px", md: 0 }} pos="relative">
        <Box w={{base:"210px", lg:"100%"}} display={"inline-grid"} border={"3px solid rgba(0, 0, 0, 0.26);"} mb={"10px"} rounded={"15px"}>
          <SimpleGrid display={"inline-grid"} columns="3" spacingX='13px' spacingY='13px' p="4">
            <Tooltip label='Leonardo AI'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/leonardo-ai.png' alt='Leonardo AI' /></Tooltip>
            <Tooltip label='Stable Diffusion'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/stable-diffusion.svg' alt='Stable Diffusion' /></Tooltip>
            <Tooltip label='Chat GPT (openai)'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/chat-gpt-openai.svg' alt='Chat GPT (openai)' /></Tooltip>
            <Tooltip label='Photoshop Beta'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/photoshop-beta.svg' alt='Photoshop Beta' /></Tooltip>
            <Tooltip label='Midjourney'><Image _hover={{transform: "scale(1.2)", transition: "all .2s ease-in-out",}} src='./skills-icons/midjourney.svg' alt='Midjourney' /></Tooltip>
          </SimpleGrid>          
        </Box>
        <Heading mb="10px" size='md'>AI Tools</Heading>
        <Text fontSize={"small"}>
        PS Beta, Chat-GPT, Midjourney, Leonardo AI, Stable Diffusion
        </Text>
      </Box>
                
      </SimpleGrid>
    </Container>
    </VStack>
    </>
  );
}

export default About;