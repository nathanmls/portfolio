import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import LogoHeader from '../atoms/Logo';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Logo = () => {
  return (
    <LogoHeader/>
  );
};

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <>
    <Box
      bg={useColorModeValue('#E5D5B8', '#E5D5B8')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>About</ListHeader>
            <Text>Advertisier especialized in UX Designer. I love to bring ideas to life through designs that inspires, communicates, and connects people.</Text>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Skills</ListHeader>
            <Text>Front-Page Dev and SEO</Text>
            <Text>UX/UI + Design Thinking</Text>
            <Text>Visual Softwares</Text>
            <Text>3D</Text>
            <Text>AI Tools</Text>
          </Stack>
          <Stack fontSize={'2xl'} align={'flex-start'}>
            <ListHeader>Follow Me</ListHeader>
            <Link href="https://www.linkedin.com/in/nathanmls/">
              <FaLinkedin /> 
            </Link>

            <Link href="https://www.facebook.com/nathanmls">
              <FaFacebook /> 
            </Link>

            <Link href="https://www.instagram.com/nathanmls/">
              <FaInstagram />
            </Link>
          </Stack>
        </SimpleGrid>
      </Container>
      <Box py={10}>
        <Flex
          align={'center'}
          _before={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('#D1BB91', '#D1BB91'),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: '1px solid',
            borderColor: useColorModeValue('#D1BB91', '#D1BB91'),
            flexGrow: 1,
            ml: 8,
          }}>
          <Logo />
        </Flex>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2023 Nathan Martins. All rights reserved
        </Text>
      </Box>
    </Box>
    </>
  );
}