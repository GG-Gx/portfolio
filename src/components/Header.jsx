import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, Button} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ReactSVG } from 'react-svg';
import { useTypewriter, Cursor} from 'react-simple-typewriter'




const Header = () => {

  const handleMailTo = (e) => {
    e.preventDefault();
    window.location.href = "mailto:garciagermangabriel@gmail.com";
  };

  const [text] = useTypewriter({
    words: ['Hi! I am Germán,'],
  
})


  return (

    <Box  p={7}
    display="flex"
    flexDirection={"column"}
    justifyContent="center"
    id="header"
    pt = {{ base: "10%", md: "8%" }}
    flexWrap={"wrap"}
    alignItems="flex-start"
    paddingTop={10}
    pl={5} 
    ml={5}
    mb={8}
  
    >
      <Flex
      minWidth='max-content' alignItems='center' gap='2'
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"left"}
      mx={"auto"}
      paddingTop="8%"
      maxWidth={"7x1"}


       >
        <Box
        display={"flex"}
        flexWrap={"wrap"}
        maxW={"70vw"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        alignSelf={"flex-start"}
        flexShrink={0}
        >
        <Image src=".\IMG-20240518-WA0008.jpg"
        fallbackSrc="https://via.placeholder.com/80"
        borderRadius='full'
        boxSize='80px'
        objectFit={"cover"}
        alt="Germán Gabriel García"
       
        />
        <Box
        className="fancy"
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        alignSelf={"center"}


        >
          
        <Button 
        className="fancy-text"
        borderRadius={23}
        height='30px'
        colorScheme="green.500"
        color={"black"}
        justifyContent={"center"}
        alignSelf={"center"}
        onClick={() => window.open("https://www.linkedin.com/in/german-g-g/")}
        >
        open to work
        </Button>
        
        </Box>
        </Box>
        <Spacer />
        <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"left"}
        alignItems={"left"}
        gap={3}
        alignSelf={"flex-start"}

        >
          <Heading as="h1" 
          size={"xl"}
          alignSelf={"flex-start"}
          margin={0}
          justifyContent={"left"}
          alignItems={"left"}
          gap={3}
          maxWidth={"50vw"}
          textAlign={"left"}
          wordBreak={"keep-all"}
          >{text}
          <Cursor cursorColor='red' />
         
          </Heading>
          <Text fontSize="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"60vw"}
          textAlign={"left"}
          
          >I’m an enthusiastic Junior Web Developer passionate about crafting dynamic, responsive web applications. With a strong foundation in the MERN stack (MongoDB, Express.js, React, Node.js), I honed my skills through an intensive bootcamp and freelance projects, including developing full-stack solutions tailored to client needs. I bring expertise in JavaScript, React, and Node.js, combined with creativity and attention to detail, ready to contribute to a forward-thinking tech team.</Text>
          </Box>
          <Spacer />

          <Box
          display='flex'
          alignSelf={"flex-start"}
          gap={3}
          flexWrap={"wrap"}
          flexDirection={"row"}
          justifyContent={"left"}
          alignItems={"center"}
          maxWidth={"70vw"}

          >
         
          <Button
            colorScheme="purple"
            variant="outline"
            borderRadius={23}
            height="30px"
            onClick={handleMailTo}
            
          >
          <Image
          src=".\mail-forward.svg" 
          boxSize="15px"
          objectFit="cover"
          alt="Linkedin"
          marginRight={1}
          justifyContent={"center"}
          alignSelf={"center"}
          alignContent={"center"}
          className="svg-icon-header"
          />
          Contact
          
          </Button>

        
          <Button colorScheme="purple" variant="outline"
          borderRadius={23}
          height='30px'
          onClick={() => window.open("https://www.linkedin.com/in/german-g-g/")}
          >
            <Image
          src=".\brand-linkedin.svg" 
          boxSize="15px"
          objectFit="cover"
          alt="Contact me"
          marginRight={1}
          justifyContent={"center"}
          alignSelf={"center"}
          alignContent={"center"}
          className="svg-icon-header"
          />
          Linkedin
          </Button>
          </Box>

      </Flex>
    
    </Box>
  );
};


export default Header;
