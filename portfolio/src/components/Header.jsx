import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, Button} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";




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
        <Img src='https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/343121592_574560228103568_3077254718671390705_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w3J3eE9KFJsQ7kNvgG-BIG_&_nc_ht=scontent-ber1-1.xx&oh=00_AYBX5G-2IZYadm4QEE5b5S45b4I-NS-RnX4xWLN7RcMsZQ&oe=66510193'
        borderRadius='full'
        boxSize='80px'
        objectFit={"cover"}
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
          <Button colorScheme="teal" variant="outline"
          borderRadius={23}

          height='30px'
          
          >Contact me</Button>
          <Button colorScheme="teal" variant="outline"
          borderRadius={23}
          height='30px'
          
            
          >Linkedin</Button>
          </Box>

      </Flex>
    
    </Box>
  );
};


export default Header;
