import React from 'react';
import { Box, Flex, Spacer, Text, Heading, Img, List, ListItem, ListIcon, OrderedList, UnorderedList,Button } from "@chakra-ui/react";


const Footer = () => {
  return (
    <footer
    >
      <Text
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"center"}
      alignItems={"center"}
      alignSelf={"center"}
      marginTop={10}
      marginBottom={-5}
      mx={"auto"}

      >© 2024 made with love by GGG</Text>
    </footer>
  );
};

export default Footer;