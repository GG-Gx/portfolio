import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, List, ListItem, ListIcon, OrderedList, UnorderedList,Button } from "@chakra-ui/react";
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


    >
      <Flex
      minWidth='max-content' alignItems='center' gap='2'
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"left"}
      

       >
      
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
          >Experience</Heading>

          <UnorderedList
          borderLeft={"1px solid"}
          borderColor={"gray.200"}
          paddingLeft={3}
          styleType="''"

          >
            <ListItem>
              <Box>
                <Heading as="h2" size="md"
                alignSelf={"flex-start"}
                margin={0}
                maxWidth={"500px"}
                textAlign={"left"}
                >Junior Web Developer
                </Heading>
          <Heading as="h3" size="sm"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Bootcamp. </Heading>
          <Text fontSize="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Enthusiastic junior web developer with a passion for creating dynamic and responsive web applications. </Text>
          </Box>
        </ListItem>
          <ListItem>
          <Box>
          <Heading as="h2" size="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Junior Web Developer</Heading>
          <Heading as="h3" size="sm"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Bootcamp. </Heading>
           <Text fontSize="md"
          alignSelf={"flex-start"}
          margin={0}
          maxWidth={"500px"}
          textAlign={"left"}
          >Enthusiastic junior web developer with a passion for creating dynamic and responsive web applications. </Text>
          </Box>
          </ListItem>
          </UnorderedList>
          </Box>
          
      </Flex>
    
    </Box>
    </>
  
  );
}

export default Experience;
