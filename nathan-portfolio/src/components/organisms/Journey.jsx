import React from 'react';
import {
  Box,
  chakra,
  Container,
  Text,
  HStack,
  VStack,
  Flex,
  Image,
  useColorModeValue,
  useBreakpointValue
} from '@chakra-ui/react';
import Slider from 'react-slick';

const journey = [
  {
    id: 1,
    date: '2022 - 2023',
    imgURL:'./port-imgs/sites-providers.jpg',
    imgURL2:'./port-imgs/site-meu-credito-liberado.jpg',
    imgURL3:'./port-imgs/site-cleverping.jpg',
    title: 'UX Designer',
    company: 'ElevenRush',
    description: `To deliver provider's landing pages and sites faster, lighter and optimized for SEO, I opted to use React JS and Chackra UI. This not only provided a more efficient and intuitive experience for users, but it also gave us the opportunity to make sure that the pages and sites were optimized for search engine optimization.

    In addition, through the e-mail marketing campaigns that we were running, we were able to acquire leads at a lower cost, helping to maximize the return on investments. This, in addition to the optimization of the landing pages and sites, allowed us to further increase our visibility and reach to potential customers.`
  },
  {
    id: 2,
    date: '2019 - 2020',
    imgURL:'./port-imgs/site-wippe.jpg',
    imgURL2:'./port-imgs/app-wippe.jpg',
    imgURL3:'./port-imgs/site-endolog.jpg',
    title: 'Web Design Analyst',
    company: 'SP Intervention',
    description: `By making UI improvements in the Wippe App and creating instructional video tutorials, we were able to make it much more accessible to our target audience. In addition, I produced social media content, landing pages, and e-books to deliver helpful tips, news, and additional content related to healthcare to B2C leads.

    We also designed event stands, brochures, and email marketing to present our telemedicine, prostheses, and related products to B2B partners. This all helped to effectively promote our product and services, and in turn, increase our user base.`
  },
  {
    id: 3,
    date: '2017 - 2018',
    imgURL:'./port-imgs/mateus-mateus-app.jpg',
    imgURL2:'./port-imgs/flyer-beleza-e-higiene.jpg',
    imgURL3:'./port-imgs/mateus-mapa-logo-banner.jpg',
    title: 'Marketing Analyst',
    company: 'Grupo Mateus',
    description:
    `I implemented standardized processes based on design thinking methodologies, automating time-consuming activities and standardizing communication between designers and account managers. These improvements led to a significant acceleration in the team's productivity, by a factor of three.
    
    Additionally, as a videomaker, I covered events and store openings, helping to maintain engagement and feed social media channels. By creating engaging videos that showcased our products and services, we were able to attract more customers and drive sales.`
  },
  {
    id: 4,
    date: '2016',
    imgURL:'./port-imgs/universal-software-infographics.jpg',
    imgURL2:'./port-imgs/universalsoftware-imoview-landing-page.jpg',
    imgURL3:'./port-imgs/universalsoftware-imoview-interface.jpg',
    title: 'Graphic Designer',
    company: 'Universal Software',
    description:
    `I made significant contributions to the success of events involving real estate businessmen. I was responsible for creating visually effective presentation materials, providing photographic coverage, and producing engaging videos for social media and blogs. Additionally, my expertise in developing optimized landing pages and eBooks helped to capture valuable leads and drive growth for the business.

    Through my dedication in delivering high-quality work and my ability to collaborate effectively with team members, I was able to help the business to establish a strong online presence and achieve marketing success.`
  },
  {
    id: 5,
    date: '2015',
    title: 'Marketing Trainee',
    company: 'IK Productions and Events / Objetiva Productions',
  },
  {
    id: 6,
    date: '2014',
    title: 'Marketing Trainee',
    company: 'Vetta Group',
  },
  {
    id: 7,
    date: '2013',
    title: 'Marketing Trainee',
    company: 'Gebauer',
  },
  {
    id: 8,
    date: '2012',
    title: 'Administration Trainee',
    company: 'CDL Contagem',
  },
  {
    id: 9,
    date: '2012',
    title: 'Graphic Design Trainee',
    company: 'ESMU - Escola de Música',
  },
  {
    id: 10,
    date: '2009',
    title: 'Computer Instructor Trainee',
    company: 'Cedaspy',
  }
];

const Journey = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const isDesktop = useBreakpointValue({ base: false, md: true });

  return (
    <Container id="journey" maxWidth="auto" py={{base:"50px", sm:"0"}} px={{ base: 0, sm: 0, md:0 }}>
      {journey.map((journey) => (
        <Flex key={journey.id}>
          {/* Desktop view(left card) */}
          {isDesktop && journey.id % 2 === 0 && (
            <>
            <Box pl={"5vw"} pr={"1vw"} bg={"#07241C"} >
              <CarouselJourney {...journey} />
            </Box>
            <Box mr={"5vw"} ml={"2vw"} >
              <Card {...journey} />
            </Box>
            </>
          )}

          {/* Mobile view */}
          {isMobile && (
            <>
              <Flex flexDirection={"column"}>
              <Box bg={"#07241C"} w={"100%"} align={"center"}>
              <CarouselJourney {...journey} />
              </Box>
              <Box mx={"2vw"}>
              <Card {...journey} />
              </Box>
              </Flex>
            </>
          )}

          {/* Desktop view(right card) */}
          {isDesktop && journey.id % 2 !== 0 && (
            <>
            <Box pl={"5vw"} pr={"1vw"} bg={"#07241C"}>
              <CarouselJourney {...journey} />
            </Box>
            <Box mr={"5vw"} ml={"2vw"}  >
              <Card {...journey} />
            </Box>
            </>
          )}
        </Flex>
        
      ))}
    </Container>
  );

};

// interface CardProps {
//   id: number;
//   imgURL: string;
//   imgURL2: string;
//   imgURL3: string;
//   title: string;
//   company: string;
//   description: string;
//   date: string;
// }

const Card = ({ id, title, company, description, date }) => {
  // For even id show card on left side
  // For odd id show card on right side
  const isEvenId = id % 2 === 0;
  let borderWidthValue = isEvenId ? '15px 15px 15px 0' : '15px 0 15px 15px';
  let leftValue = isEvenId ? '-15px' : 'unset';
  let rightValue = isEvenId ? 'unset' : '-15px';

  const isMobile = useBreakpointValue({ base: true, md: false });
  if (isMobile) {
    leftValue = '-15px';
    rightValue = 'unset';
    borderWidthValue = '15px 15px 15px 0';
  }

  return (
    <HStack
      flex={1}
      p={3}
      pr={50}
      bg={useColorModeValue('none', 'none')}
      spacing={5}
      rounded="lg"
      alignItems="top"
      pos="relative"
      _before={{
        content: `""`,
        w: '0',
        h: '0',
        borderColor: `transparent ${useColorModeValue('#edf2f6', '#1a202c')} transparent`,
        borderStyle: 'solid',
        borderWidth: borderWidthValue,
        position: 'absolute',
        left: leftValue,
        right: rightValue,
        display: 'none'
      }}
    >
      <Box>
        <Text fontSize="lg" color={isEvenId ? '#1D4036' : '#1D4036'}>
          {date}
        </Text>

        <VStack spacing={2} mb={3} textAlign="left">
          <chakra.h1 fontSize="2xl" lineHeight={1.2} fontWeight="bold" w="100%">
            {title}
          </chakra.h1>
          <Text fontSize="lg" fontWeight="600" w="100%" color={isEvenId ? '#A45826' : '#A45826'}>
          {company}
          </Text>
          <Text whiteSpace={"pre-line"} fontSize="md">{description}</Text>
        </VStack>
      </Box>
      </HStack>
  );
};

// const LineWithDot = () => {
//   return (
//     <Flex
//       pos="relative"
//       alignItems="center"
//     >
//       <Box pos="relative" p="10px">
//         <Box
//           pos="absolute"
//           top="0"
//           left="-50%"
//           bottom="0"
//           right="0"
//           width="100%"
//           height="100%"
//           backgroundSize="cover"
//           backgroundRepeat="no-repeat"
//           backgroundPosition="center center"
//           border={"4px solid #07241C"}
//           bg={useColorModeValue('#F9F0DF', '#F9F0DF')}
//           borderRadius="100px"
//           backgroundImage="none"
//           opacity={1}
//         ></Box>
//       </Box>
//     </Flex>
//   );
// };

const CarouselJourney = ({imgURL, imgURL2, imgURL3}) => {
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
    centerPadding: 0,
    className:"carouseljourney"
  };

  if(!imgURL) {
    return <Box p={{ base: 0, md: 10 }} w={{base:"40vw", sm:"50vw", md:"50vw", lg:"50vw", xl:"40vw"}} bg="transparent"></Box>;
  }

  return (
    <Box
    maxW={{base:"80vw", sm:"80vw", md:"40vw", lg:"50vw", xl:"40vw"}}
    flex={{ base: 1, md: 1 }}
    p={{ base: 0, sm: 3 , md: "30px 10px 0 30px", lg: 4 }}
    bg="transparent"
    h={"auto"}
    flexDirection={"column"}
          >

      <Slider {...settings}>
          <Box display={"flex !important"} justifyContent={"center"}>
            <Image rounded={15} src={imgURL}/>
          </Box>
          <Box display={"flex !important"} justifyContent={"center"}>
            <Image rounded={15}  src={imgURL2}/>
          </Box>
          <Box display={"flex !important"} justifyContent={"center"}>
            <Image rounded={15}  src={imgURL3}/>
          </Box>
      </Slider>
    </Box>
  );
};

// const ImgCard = () => {
//   return (
//   <Box flex={{ base: 0, md: 1 }} p={{ base: 0, md: 6 }} bg="transparent"><CarouselJourney/> </Box>)
// };

export default Journey;