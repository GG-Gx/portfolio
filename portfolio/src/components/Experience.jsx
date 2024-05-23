import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, List, ListItem, ListIcon, OrderedList, UnorderedList,Button, Image, Center } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon,TriangleUpIcon } from '@chakra-ui/icons'



const Experience = () => {
  return (
    <>
    
    <Box  p={4}
    display="flex"
    flexDirection={"column"}
    justifyContent="center"
    alignItems="center"
    paddingTop="8%"
    id="experience"
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
          marginLeft={-10}

          >
          <Image src=".\public\briefcase.svg" 
          boxSize="30px"
          objectFit="cover"
          alt="Briefcase"
          alignItems={"center"}
          justifyContent={"center"}
          alignSelf={"left"}
          marginTop={1}
          padding={1}
        
          />
           Experience</Heading>


     
              <Box
              display={"flex"}

              flexDirection={"column"}
              justifyContent={"left"}
              alignItems={"left"}
              borderLeft={"1px solid"}
              borderColor={"gray.300"}
              paddingLeft={5}
              marginLeft={5}
              >
                <Heading as="h2" size="md"
                alignSelf={"flex-start"}
                margin={0}
                maxWidth={"500px"}
                textAlign={"left"}
                >Full Stack Web and App Development
                </Heading>
          <Heading as="h3" size="sm"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >WBS Coding School Bootcamp </Heading>
          <Text fontSize="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Acquired Skills:
          <UnorderedList>
            <ListItem>HTML5, CSS3 and Responsive Web Design</ListItem>
            <ListItem>Frontend Programming with JavaScript/React</ListItem>
            <ListItem>Backend Programming with Node.js/Express</ListItem>
            <ListItem>Version Control Systems (Git & GitHub)</ListItem>
            <ListItem>Databases (SQL, NoSQL)</ListItem>
            <ListItem>Restful APIs</ListItem>
            <ListItem>Unit Testing</ListItem>
            <ListItem>Agile Tools and Methodologies</ListItem>



          </UnorderedList>
          </Text>
          </Box>

          </Box>
      </Flex>
    </Box>
    </>
  
  );
}

export default Experience;
