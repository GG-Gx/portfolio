import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, Button} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { ReactSVG } from 'react-svg';



const Header = () => {
  return (


 

    
    <Box  p={4}
    display="flex"
    flexDirection={"column"}
    justifyContent="center"
    alignItems="center"
    paddingTop="8%"


    >
      <Flex
      minWidth='max-content' alignItems='center' gap='2'
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"left"}
      

       >
        <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        alignSelf={"flex-start"}
        >
        <Image src=".\public\IMG-20240518-WA0008.jpg"
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
        >
        <Link href="https://www.linkedin.com/in/german-gabriel-garcia-400515119/" isExternal 
        style={{ textDecoration: 'none' }}
        >
        open to work
        </Link>

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
          <Heading as="h1" size="xl"
          alignSelf={"flex-start"}
          gap={3}


          >Hello,  I'm Germán</Heading>
          <Text fontSize="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Enthusiastic junior web developer with a passion for creating dynamic and responsive web applications. Recently completed an intensive bootcamp focused on full-stack development, where I built a comprehensive final project using the MERN stack (MongoDB, Express.js, React, Node.js). Eager to bring my skills in JavaScript, React, and Node.js to a growing tech team.</Text>
          </Box>
          <Spacer />
          <Box
          display='flex'
          alignSelf={"flex-start"}
          gap={3}
          >
            <Link href="mailto: garciagermangabriel@gmail.com" isExternal
          style={{ textDecoration: 'none' }}
          >
          <Button colorScheme="purple" variant="outline"
          borderRadius={23}
          height='35px'
          >
          <Image
          src=".\public\mail-forward.svg" 
          boxSize="15px"
          objectFit="cover"
          alt="Linkedin"
          marginRight={1}
          justifyContent={"center"}
          alignSelf={"center"}
          alignContent={"center"}
          className="svg-icon-header"
          />
          Contact me
          
          </Button>
          </Link>
          <Spacer />

          <Link href="https://www.linkedin.com/in/german-gabriel-garcia-400515119/" isExternal
          style={{ textDecoration: 'none' }}
          >
          <Button colorScheme="purple" variant="outline"
          borderRadius={23}
          height='35px'
          >
            <Image
          src=".\public\brand-linkedin.svg" 
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
          </Link>
          </Box>

      </Flex>
    
    </Box>
  );
};


export default Header;
