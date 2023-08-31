import React from "react";
import { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Fade,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import LogoHeader from "../atoms/Logo"
import Overlay from "../atoms/Overlay";

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      setScrollDir(direction);
      lastScrollY = scrollY > 0 ? scrollY : 0;
    }
    
    window.addEventListener('scroll', updateScrollDirection);

    return () => {
       window.removeEventListener('scroll', updateScrollDirection);
    }

  }, [scrollDir]);

  return scrollDir;
}

export default function HeaderMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSticky, setIsSticky] = useState(false);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  // Conditionally apply sticky class


  const scrollDir = useScrollDirection();
  
  const headerClass = `header ${isSticky ? 'sticky' : ''} ${isOpen ? 'open' : ''} ${scrollDir === 'down' ? 'hide' : 'show'}`;
const Links = [
  {name: 'About Me', href: '#aboutme'},
  {name: 'My Journey', href: '#journey'},
  {name: 'Showcase', href: '#showcase'},
  {name: 'Contact', href: '#contact'}
];

  return (
    <>
    {isOpen ? <Overlay/> : ""}
      <Box className={headerClass} zIndex={99}>
        <Flex px={4} h={16} alignItems={'center'} w={"100%"} justify={"space-between"}>
          <IconButton
            fontSize='30px'
            color={"#115945"}
            backgroundColor={"transparent"}
            _hover={{
              backgroundColor:"#DD9331",
            }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{base: 'flex', md: 'none'}}
            onClick={isOpen ? onClose : onOpen}
            zIndex={2}
          />
          
          <HStack spacing={8} w={"100%"} justify={{base:"flex-end", md:"space-between"}}>
            <Box ><LogoHeader /></Box>
            
            <HStack
              as={'nav'}
              spacing={4}
              display={{base: 'none', md: 'flex'}}
              zIndex={99}
            >
              {Links.map(link => (
                <Link 
                  px={2}
                  href={link.href}
                  key={link.name}
                  textDecoration={"none"}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>
        </Flex>

        
        {isOpen ? (
          <>
          <Fade in={isOpen} >
          <Box fontSize={"3xl"} mt={"2"} rounded={"15px"} position={"fixed"} h={"80vh"} w="90vw" zIndex={1} alignItems={"center"} verticalAlign={"center"} justifyContent={"center"} bg={"#F9F0DF"} display={{ base: 'flex', md: 'none' }}>
            <Stack as={'nav'} spacing={4} align={'center'} >
            {Links.map(link => (
                <Link 
                  px={2}
                  href={link.href}
                  key={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </Box>
          </Fade>
          </>
        ) : null}
      </Box>
    </>
  );
}