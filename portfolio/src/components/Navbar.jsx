import React, { useState, useEffect } from "react";
import { Box, Flex, Spacer, Text, Center } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {MoonIcon} from '@chakra-ui/icons';


const Navbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (



    <Box  p={4} 
    position={"fixed"}
    justifyContent="center"
    alignItems="center"
    display="flex"
    marginTop={-8}
    width={"100%"}
    zIndex={10}
    

  

    >
      <Center>
      <Flex 
             width={"100%"}
             maxWidth="600px"
       
             margin="0 auto"  
      >
        <Box p="2"
        about="center"
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        gap={4}
        scrollBehavior={"smooth"}
        boxShadow={isScrolled ? "md" : "none"}
        transition="box-shadow 0.3s"
        zIndex={10}
        h="35px"
        padding={4}
        borderRadius={23}
        bg={isScrolled ? "rgba(209, 209, 209, 0.1)" : "white"}
        backdropFilter={isScrolled ? "blur(10px)" : "none"} // Apply backdrop blur on scroll
        >
          <Link href="#">Experience </Link>
          <Link href="#">Projects </Link>
          <Link href="#">About </Link>
          <Link href="#">Contact </Link>
          <MoonIcon />
        </Box>
      </Flex>
      </Center>
    </Box>
  );
};


export default Navbar;