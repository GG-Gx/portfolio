import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, List, ListItem, ListIcon, OrderedList, UnorderedList,Button } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon,TriangleUpIcon } from '@chakra-ui/icons'



const Projects = () => {
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
        justifyContent={"left"}
        alignItems={"left"}
        gap={3}
        alignSelf={"flex-start"}

        >
          <Heading as="h1" size="xl"
          alignSelf={"flex-start"}
          gap={3}
          >Projects</Heading>

            <Box flexDirection="row" gap={3}
            >
            <Img src="https://placehold.co/300x150" alt="project" borderRadius={23}/>
            <Heading as="h2" size="md"
          alignSelf={"flex-start"}
          marginTop={5}
          maxWidth={"500px"}
          textAlign={"left"}

          >tuneGather</Heading>
          <Text fontSize="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >A user-friendly calendar system designed for booking freelance music teachers. Whether you're a student looking to enhance your musical skills or a teacher eager to share your expertise, tuneGather simplifies the scheduling process, allowing seamless booking of music lessons. </Text>
          <Box  
          display={"flex"}
        flexDirection={"row"}
        justifyContent={"left"}
        alignItems={"left"}
        gap={3}
        alignSelf={"flex-start"}
        marginTop="3%"
          >
          <Button    borderRadius={23}
          colorScheme='orange'
          height='30px'
          >Code</Button>
           <Button    borderRadius={26}
          colorScheme='orange'
          height='30px'
          >Preview</Button>
          </Box>

          </Box>
         
          </Box>
          
      </Flex>
    
    </Box>
    </>
  
  );
}

export default Projects;
