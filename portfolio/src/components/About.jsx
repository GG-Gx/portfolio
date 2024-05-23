import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, List, ListItem, ListIcon, OrderedList, UnorderedList,Button, Image } from "@chakra-ui/react";
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
    id="about"


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
        justifyContent={"center"}
        alignItems={"center"}
        gap={3}
        alignSelf={"flex-start"}
        flexGrow={1}
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
          <Image src=".\public\user.svg" 
          boxSize="30px"
          objectFit="cover"
          alt="Briefcase"
          alignItems={"center"}
          justifyContent={"center"}
          alignSelf={"left"}
          marginTop={1}
          padding={1}
          />
            About me</Heading>
          <Img src='.\public\aka_ggg.mp4 06_12_2022 22_30_09.png'
        borderRadius='16px'
        height='150px'
        width='400px'
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
          >My name is Germán Gabriel García, and I am originally from Argentina but currently residing in Berlin. As a musician, I developed a solo project that combines trumpet performance with audio processing and generative audio-reactive visuals, requiring extensive programming skills.

          Last year, I decided to embark on a new journey to become a full stack web developer. After completing an intensive bootcamp at WBS Coding School, I am now ready to take on new challenges and continue learning in this fascinating field. </Text>
          </Box>

      </Flex>
    
    </Box>



    </>
 
    
  );
};

export default About;