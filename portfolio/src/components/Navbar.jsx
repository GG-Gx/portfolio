import React from "react";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";


const Navbar = () => {

  return (

    <Box  p={4} 
    borderRadius={23}
    position={"fixed"}
    justifyContent="center"
    alignItems="center"
    display="flex"
    marginTop={-10}
    width={"100%"}
    scrollBehavior={"smooth"}
    
    >
      <Flex >
        <Box p="2">
          <Link href="#">Experience </Link>
          <Link href="#">Projects </Link>
          <Link href="#">About </Link>
          <Link href="#">Contact </Link>
        </Box>
      </Flex>
    </Box>
  );
};


export default Navbar;