import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";




const Header = () => {
  return (
    
    <Box  p={4}
    justifyContent="center"
    alignItems="center"
    display="flex"
    >
      <Flex>
        <Box p="2">
        <Img src='portfolio\src\Img\gggg.jpg'
        borderRadius='full'
        boxSize='150px'
        />
          <Heading as="h1" size="xl">Hello, I'm GGG</Heading>
          <Text fontSize="xl">I'm a junior full stack web developer</Text>
        </Box>
      </Flex>
    </Box>
  );
};


export default Header;
