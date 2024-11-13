import React, { useState, useEffect } from "react";
import { Box, Flex, Center, IconButton, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbarsmall = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSmoothScroll = (targetId, event) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Center paddingTop={2}
    zIndex={10}

    >
      <Box
    
        className="navbarsmall"
        zIndex={10}

      >
        <Flex
          width={"100%"}
          align={"right"}
          alignSelf={"right"}
          alignContent={"center"}
          justifyContent={"flex-end"}
          mx={"auto"}
          margin="0 auto"
        >
          <Box
            p="2"
            // about="center"
            // display="flex"
            // flexDirection="row"
            // justifyContent="center"
            // alignItems="center"
            // gap={4}
            // scrollBehavior={"smooth"}
            // boxShadow={isScrolled ? "md" : "none"}
            // transition="box-shadow 0.3s"
            // zIndex={10}
            // padding={4}
            // height="5px"
            // // bg={isScrolled ? "rgba(209, 209, 209, 0.1)" : "transparent"}
            // // backdropFilter={isScrolled ? "blur(15px)" : "none"}
            className="navbarsmall"
          >
            <Menu
              isLazy
              closeOnSelect={true}
              closeOnBlur={true}
              zIndex={10}
              placement='bottom-end'
            >
              <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                _hover={{ color: "purple.500" }}
                border={0}
                zIndex={10}
                onAbort={handleSmoothScroll}
                color='red'
                bg={isScrolled ? "rgba(209, 209, 209, 0.1)" : "transparent"}
                backdropFilter={isScrolled ? "blur(15px)" : "none"}
                
              />
              <MenuList
                backdropFilter = "blur(15px)"
                border={0}
                zIndex={10}
                backgroundColor={"transparent"}

              >
                <MenuItem
                  href="#experience"
                  onClick={(e) => handleSmoothScroll("experience", e)}
                  style={{ textDecoration: 'none' }}
                  _hover={{ color: "purple.500" }}
                  backgroundColor={"transparent"}
                  zIndex={10}


                >

                    Experience
                </MenuItem>
                <MenuItem
                                    href="#projects"
                                    onClick={(e) => handleSmoothScroll("projects", e)}
                                    style={{ textDecoration: 'none' }}
                                    _hover={{ color: "purple.500" }}
                                    backgroundColor={"transparent"}

                
                >
                 
                    Projects
                </MenuItem>
                <MenuItem
                                    href="#about"
                                    onClick={(e) => handleSmoothScroll("about", e)}
                                    style={{ textDecoration: 'none' }}
                                    _hover={{ color: "purple.500" }}
                                    backgroundColor={"transparent"}

                >

                    About
                </MenuItem>
                <MenuItem
                                    href="#header"
                                    style={{ textDecoration: 'none' }}
                                    _hover={{ color: "purple.500" }}
                                    onClick={(e) => handleSmoothScroll("header", e)}
                                    backgroundColor={"transparent"}

                >

                    Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
};

export default Navbarsmall;
