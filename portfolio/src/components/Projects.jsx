import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, List, ListItem, ListIcon, OrderedList, UnorderedList,Button, Image, Center, transition } from "@chakra-ui/react";
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
    id="projects"
    >
      <Flex
      minWidth='max-content' alignItems='center' gap='2'
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"left"}
      mx={"auto"}

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
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          alignSelf={"flex-start"}
          marginBottom={4}
          gap={3}
          >
          <Image src=".\public\code.svg" 
          boxSize="30px"
          objectFit="cover"
          alt="Briefcase"
          alignItems={"center"}
          justifyContent={"center"}
          alignSelf={"left"}
          marginTop={1}
          padding={1}
        
     
          />Projects</Heading>

            <Box  
          display={"flex"}

        flexDirection={"column"}
        justifyContent={"left"}
        alignItems={"left"}
        gap={3}
        alignSelf={"flex-start"}

        marginLeft={5}


            >
            <Img src=".\public\tuneGather - Google Chrome 23_05_2024 14_51_13.png" 
            width={"300px"}
            height={"200px"}
            objectFit="cover"
            alt="project"
            borderRadius={23}
            _hover={{
              transform: 'scale(1.02)',
              transition: 'transform 1s ease-in-out',
            }}
            transition="transform 0.5s ease-in-out"
          
            />
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
            <Link href="https://github.com/GG-Gx/final-project" isExternal

             >

          <Button    borderRadius={23}
          colorScheme='orange'
          height='30px'
          >Code</Button>
          </Link>
            <Link href="https://admirable-halva-1c9c04.netlify.app/" isExternal>
           <Button    borderRadius={26}
          colorScheme='orange'
          height='30px'
          >Preview</Button>
          </Link>
          </Box>

          </Box>
         
          </Box>
          
      </Flex>
    
    </Box>
    </>
  
  );
}

export default Projects;
