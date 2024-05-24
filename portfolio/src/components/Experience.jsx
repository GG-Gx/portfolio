import React from "react";
import { Box, Flex, Text, Heading, Image, UnorderedList, ListItem, Link, Button, Spacer, Center } from "@chakra-ui/react";

const Experience = () => {
  return (
    
    <Box
    p={4}

    display="flex"
    flexWrap={"wrap"}
    flexDirection="column"
    alignItems="flex-start"
    pt="8%"
    id="experience"
  >
    <Flex
      minWidth="max-content"
      alignItems="flex-start"
      gap={2}
      flexDirection="column"
      mx="auto"
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        gap={3}
      >
        <Heading
          as="h1"
          size="xl"
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="center"
          marginBottom={4}
          gap={3}
          paddingTop={2}
        >
          <Image
            src="/briefcase.svg"
            boxSize="30px"
            objectFit="cover"
            alt="Code"
            marginTop={1}
            padding={1}
          />
          Experience
        </Heading>

        <Box

          pl={5}
          ml={5}
        >

          <Heading
            as="h2"
            size="md"
            alignSelf="flex-start"
            marginTop={5}
            textAlign="left"
            flexWrap={"wrap"}
            display={"flex"}
            maxWidth={"50vw"}


          >
            Full Stack Web and App Development
          </Heading>
          <Heading
            as="h3"
            size="sm"
            alignSelf="flex-start"
            m={0}
            maxWidth="500px"
            textAlign="left"
          >
            WBS Coding School Bootcamp
          </Heading>
          <Text
            fontSize="md"
            alignSelf="flex-start"
            margin={0}
            maxWidth={"50vw"}              
            textAlign="left"
          >
            Acquired Skills:
          </Text>
          <UnorderedList
            fontSize="md"
            alignSelf="flex-start"
            m={0}
            display={"flex"}
            flexDirection={"column"}
            maxWidth={"50vw"}
            justifyContent={"flex-start"}
            flexWrap={"wrap"}
            textAlign="left"
            borderLeft={"1px solid"}
            borderColor={"gray.300"}
            paddingLeft="14px"
          >
            <ListItem>HTML5, CSS3 and Responsive Web Design</ListItem>
            <ListItem>Frontend Programming with JavaScript/React</ListItem>
            <ListItem>Backend Programming with Node.js/Express</ListItem>
            <ListItem>Version Control Systems (Git & GitHub)</ListItem>
            <ListItem>Databases (SQL, NoSQL)</ListItem>
            <ListItem>Restful APIs</ListItem>
            <ListItem>Unit Testing</ListItem>
            <ListItem>Agile Tools and Methodologies</ListItem>
          </UnorderedList>

      
        </Box>
      </Box>
    </Flex>
  </Box>




    // <Box
    //   p={4}
    //   display="flex"
    //   flexDirection="column"
    //   alignItems="flex-start"
    //   flexWrap={"wrap"}
    //   pt="8%"
    //   id="experience"
    // >
    //   <Flex
    //     minWidth="max-content"
    //     alignItems="flex-start"
    //     gap={2}
    //     flexDirection="column"
    //     mx="auto"
    //   >
    //     <Box
    //       display="flex"
    //       flexDirection="column"
    //       justifyContent="flex-start"
    //       alignItems="flex-start"
    //       gap={3}
    //     >
    //       <Heading
    //         as="h1"
    //         size="xl"
    //         display="flex"
    //         flexDirection="row"
    //         justifyContent="flex-start"
    //         alignItems="center"
    //         marginBottom={4}
    //         gap={3}
    //       >
    //         <Image
    //           src="/briefcase.svg"
    //           boxSize="30px"
    //           objectFit="cover"
    //           alt="Briefcase"
    //           marginTop={1}
    //           padding={1}
    //         />
    //         Experience
    //       </Heading>

    //       <Box
    //         borderLeft="1px solid"
    //         borderColor="gray.300"
    //         pl={5}
    //         ml={5}
    //         alignSelf={"flex-start"}
    //         alignContent={"flex-start"}
    //         alignItems={"flex-start"}
    //         display={"flex"}
    //         flexDirection={"column"}
    //         justifyContent={"flex-start"}
    //         flex-wrap={"wrap"}
    //       >
    //         <Heading
    //           as="h2"
    //           size="md"
    //           alignSelf="flex-start"
    //           m={0}
    //           maxWidth="500px"
    //           textAlign="left"
    //         >
    //           Full Stack Web and App Development
    //         </Heading>
    //         <Heading
    //           as="h3"
    //           size="sm"
    //           alignSelf="flex-start"
    //           m={0}
    //           maxWidth="500px"
    //           textAlign="left"
    //         >
    //           WBS Coding School Bootcamp
    //         </Heading>
    //         <Text
    //           fontSize="md"
    //           alignSelf="flex-start"
    //           textAlign="left"
    //           m={0}
    //           maxWidth="500px"
    //         >
    //           </Text>

    //           Acquired Skills:
    //           <UnorderedList
    //             fontSize="md"
    //             alignSelf="flex-start"
    //             m={0}
    //             maxWidth="500px"
    //             textAlign="left"
    //             paddingLeft={5}
    //           >
    //             <ListItem>HTML5, CSS3 and Responsive Web Design</ListItem>
    //             <ListItem>Frontend Programming with JavaScript/React</ListItem>
    //             <ListItem>Backend Programming with Node.js/Express</ListItem>
    //             <ListItem>Version Control Systems (Git & GitHub)</ListItem>
    //             <ListItem>Databases (SQL, NoSQL)</ListItem>
    //             <ListItem>Restful APIs</ListItem>
    //             <ListItem>Unit Testing</ListItem>
    //             <ListItem>Agile Tools and Methodologies</ListItem>
    //           </UnorderedList>
    //       </Box>
    //     </Box>
    //   </Flex>
    // </Box>
  );
};

export default Experience;
