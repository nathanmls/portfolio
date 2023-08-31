import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { BsLinkedin, BsPerson} from 'react-icons/bs';
import { MdEmail, MdOutlineEmail } from 'react-icons/md';

export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard('nathanmls@hotmail.com');

  return (
    <Flex
      bg={useColorModeValue('#F9F0DF', '#F9F0DF')}
      w={"full"}
      align={"center"}
      justify={"flex-end"}
      wrap={"wrap"}

      id="contact">
      <Box
            align="center"
            direction={'column'}
            position={"sticky"}
            top="70px"
            mb={"-45vh"}
            className={"sticky-social"}
            
          >
                
                <Tooltip
                  label={hasCopied ? 'Email Copied!' : 'Copy Email'}
                  closeOnClick={false}
                  hasArrow>
                  <IconButton
                    aria-label="email"
                    variant="ghost"
                    color={"#1D4036"}
                    size="lg"
                    fontSize="3xl"
                    icon={<MdEmail />}
                    _hover={{
                      bg: '#115744',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    onClick={onCopy}
                    isRound
                  />
                </Tooltip>

                <Link href="#">
                  <IconButton
                    aria-label="linkedin"
                    variant="ghost"
                    color={"#1D4036"}
                    size="lg"
                    icon={<BsLinkedin size="28px" />}
                    _hover={{
                      bg: '#115744',
                      color: useColorModeValue('white', 'gray.700'),
                    }}
                    isRound
                  />
                </Link>
              </Box>
      <Box
        borderRadius="lg"
        m={{ base: 5, md: 16, lg: 10 }}
        p={{ base: 5, lg: 16 }}
        w={"full"}
        >
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
            <Heading
              fontSize={{
                base: '4xl',
                md: '5xl',
              }}>
              Let's Get in Touch
            </Heading>

            <Stack
              spacing={{ base: 4, md: 8, lg: 20 }}
              direction={{ base: 'row', md: 'row' }}
              w={{base:"80vw", md:"50vw"}}>
              <Box
                bg={useColorModeValue('white', 'gray.700')}
                borderRadius="15px"
                p={8}
                w={"full"}
                color={useColorModeValue('gray.700', 'whiteAlpha.900')}
                shadow="xl">
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<BsPerson />} />
                      <Input type="text" name="name" placeholder="Your Name" />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement children={<MdOutlineEmail />} />
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      resize="none"
                    />
                  </FormControl>

                  <Button
                    colorScheme="green"
                    bg="#115945"
                    color="white"
                    _hover={{
                      bg: '#1D4036',
                    }}
                    isFullWidth>
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}