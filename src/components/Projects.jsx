import React from "react";
import { Box, Flex, Text, Heading, Image, UnorderedList, ListItem, Button, Link } from "@chakra-ui/react";

const Projects = () => {
  return (
    <Box
      p={4}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      pt="8%"
      id="projects"
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
              src="/code.svg"
              boxSize="30px"
              objectFit="cover"
              alt="Code"
              marginTop={1}
              padding={1}

            />
            Projects
          </Heading>

          <Box
  
            pl={5}
            ml={5}
          >
            <Image
              src="/tuneGather - Google Chrome 23_05_2024 14_51_13.png"
              width="300px"
              maxWidth={"70vw"}
              height="auto"
              objectFit="cover"
              alt="project"
              borderRadius={23}
              _hover={{
                transform: 'scale(1.02)',
                transition: 'transform 1s ease-in-out',
              }}
              transition="transform 0.5s ease-in-out"
            />
            <Heading
              as="h2"
              size="md"
              alignSelf="flex-start"
              marginTop={5}
              maxWidth="500px"
              textAlign="left"
            >
              tuneGather
            </Heading>
            <Text
              fontSize="md"
              alignSelf="flex-start"
              margin={0}
              maxWidth={"50vw"}              textAlign="left"
            >
              A user-friendly calendar system designed for booking freelance music teachers. Whether you're a student looking to enhance your musical skills or a teacher eager to share your expertise, tuneGather simplifies the scheduling process, allowing seamless booking of music lessons.
            </Text>
            <Box
              display='flex'
              alignSelf={"flex-start"}
              gap={3}
              flexWrap={"wrap"}
              flexDirection={"row"}
              justifyContent={"left"}
              alignItems={"center"}
              maxWidth={"70vw"}
              marginTop={3}

            >
                <Button borderRadius={23} colorScheme="orange" height="30px"
                onClick={() => window.open("https://github.com/GG-Gx/final-project")}
                >
                      <Image
                      src=".\brand-github.svg" 
                      boxSize="15px"
                      objectFit="cover"
                      alt="Linkedin"
                      marginRight={1}
                      justifyContent={"center"}
                      alignSelf={"center"}
                      alignContent={"center"}
                      className="svg-icon-header"
                      />
                  Code</Button>

              
              
                <Button borderRadius={26} colorScheme="orange" height="30px"
                onClick={() => window.open("https://admirable-halva-1c9c04.netlify.app/")}
                >
                                              <Image
                      src=".\link.svg" 
                      boxSize="15px"
                      objectFit="cover"
                      alt="Linkedin"
                      marginRight={1}
                      justifyContent={"center"}
                      alignSelf={"center"}
                      alignContent={"center"}
                      className="svg-icon-header"

                      />
                  
                  Preview</Button>
              
            </Box>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}

export default Projects;
