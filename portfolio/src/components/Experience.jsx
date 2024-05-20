
import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
 } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";




const Experience = () => {


  return (

    <Box  p={4}
    justifyContent="center"
    alignItems="center"
    display="flex"

    >

      <Flex

      minWidth='max-content' alignItems='center' gap='2'

        >
        <Box>

          
        </Box>

        <Spacer />
        <Box>
          <Heading as="h1" size="xl">Experience</Heading>
            <UnorderedList>

            <ListItem>Integer molestie lorem at massa</ListItem>
            <ListItem>Facilisis in pretium nisl aliquet</ListItem>
            
          </UnorderedList>
          </Box>
      </Flex>
    </Box>
  );
}



export default Experience;