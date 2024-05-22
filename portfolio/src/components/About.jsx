import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, List, ListItem, ListIcon, OrderedList, UnorderedList,Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon,TriangleUpIcon } from '@chakra-ui/icons'


const About = () => {
  return (
    <>

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
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        alignSelf={"flex-start"}
        >
         <Heading as="h1" size="xl"
          alignSelf={"flex-start"}
          gap={3}


          >About me</Heading>
          <Img src='https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/343121592_574560228103568_3077254718671390705_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w3J3eE9KFJsQ7kNvgG-BIG_&_nc_ht=scontent-ber1-1.xx&oh=00_AYBX5G-2IZYadm4QEE5b5S45b4I-NS-RnX4xWLN7RcMsZQ&oe=66510193'
        borderRadius='16px'
        boxSize='300px'
        objectFit={"cover"}
        />
      

        </Box>
        <Spacer />
        
        <Box
        display={"flex"}
        justifyContent={"left"}
        alignItems={"left"}
        gap={3}
        alignSelf={"flex-start"}

        >

          <Text fontSize="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Enthusiastic junior web developer with a passion for creating dynamic and responsive web applications. Recently completed an intensive bootcamp focused on full-stack development, where I built a comprehensive final project using the MERN stack (MongoDB, Express.js, React, Node.js). Eager to bring my skills in JavaScript, React, and Node.js to a growing tech team.</Text>
          </Box>

      </Flex>
    
    </Box>



    </>
 
    
  );
};

export default About;