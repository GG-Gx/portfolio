import React from "react";
import { Box, Flex, Spacer, Text, Heading, Img, Button} from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";




const Header = () => {
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
        <Img src='https://scontent-ber1-1.xx.fbcdn.net/v/t39.30808-6/343121592_574560228103568_3077254718671390705_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=w3J3eE9KFJsQ7kNvgG-BIG_&_nc_ht=scontent-ber1-1.xx&oh=00_AYBX5G-2IZYadm4QEE5b5S45b4I-NS-RnX4xWLN7RcMsZQ&oe=66510193'
        borderRadius='full'
        boxSize='150px'
        objectFit={"cover"}
        />
        </Box>
        <Spacer />
        <Box>
          <Heading as="h1" size="xl">Hello, I'm GGG</Heading>
          <Text fontSize="xl">I'm a junior full stack web developer</Text>
          </Box>
          <Spacer />
          <Box

          display='flex'
          
          alignSelf={"flex-end"}
          >
          <Button colorScheme="teal" variant="outline"
          borderRadius={23}
          
          >Contact me</Button>
          <Button colorScheme="teal" variant="outline"
          borderRadius={23}
          >Linkedin</Button>
          </Box>

      </Flex>
    
    </Box>
  );
};


export default Header;
