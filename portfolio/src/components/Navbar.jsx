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

  const handleSmoothScroll = (targetId, event) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (



    <Box  p={4} 
    position={"fixed"}
    justifyContent="center"
    alignItems="center"
    display="flex"
    marginTop={-8}
    width={"100%"}
    zIndex={10}
    flexWrap={"wrap"}
  

    >
      <Flex 
             width={"100%"}
             maxWidth="600px"
             align={"center"}
             alignSelf={"center"}
             alignContent={"center"}
              justifyContent={"center"}
              mx={"auto"}

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
        padding={4}
        height="5px"

        borderRadius={23}
        bg={isScrolled ? "rgba(209, 209, 209, 0.1)" : "white"}
        backdropFilter={isScrolled ? "blur(10px)" : "none"} // Apply backdrop blur on scroll
        >
          <Link href="#experience"
           onClick={(e) => handleSmoothScroll("experience", e)}
          style={{ textDecoration: 'none' }}
          _hover={{ color: "purple.500" }}
          >Experience </Link>
          <Link href="#projects"
          onClick={(e) => handleSmoothScroll("projects", e)}
          style={{ textDecoration: 'none' }}
          _hover={{ color: "purple.500" }}
            
          >Projects </Link>
          <Link href="#about"
          onClick={(e) => handleSmoothScroll("about", e)}
          style={{ textDecoration: 'none' }}
          _hover={{ color: "purple.500" }}
          >About </Link>
          <Link href="#header"
          style={{ textDecoration: 'none' }}
          _hover={{ color: "purple.500" }}
          onClick={(e) => handleSmoothScroll("header", e)}
          
          >Contact </Link>
        </Box>
      </Flex>
    </Box>
  );
};


export default Navbar;