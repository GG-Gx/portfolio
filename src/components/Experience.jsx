import React from "react";
import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";

const Experience = () => {
  const experienceData = [

    {
      title: "Web Developer",
      organization: "Freelance",
      duration: "May 2024 - Present · 7 mos",
      location: "Berlin, Germany · Remote",
      acquiredSkills: [
        "Developed responsive, full-stack applications using the MERN stack, tailored to client requirements",
        "Managed entire project cycles, from planning to deployment, ensuring scalable, high-quality solutions",
        "Collaborated with designers to align with UI/UX goals, creating interactive and user-friendly interfaces",
        "Maintained code quality and optimized performance, following best practices for reliability",
      ],
    },
    {
      title: "Full Stack Web and App Development",
      organization: "WBS Coding School Bootcamp",
      acquiredSkills: [
        "HTML5, CSS3 and Responsive Web Design",
        "Frontend Programming with JavaScript/React",
        "Backend Programming with Node.js/Express",
        "Version Control Systems (Git & GitHub)",
        "Databases (SQL, NoSQL)",
        "Restful APIs",
        "Unit Testing",
        "Agile Tools and Methodologies",
      ],
    },
  ];

  return (
    <Box
      paddingTop={10}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      pt="8%"
      id="experience"
      mx="auto"
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
              alt="Briefcase"
              marginTop={1}
              padding={1}
            />
            Experience
          </Heading>

          {/* Map through the experience data */}
          {experienceData.map((experience, index) => (
            <Box key={index} pl={5} ml={5} mb={8}>
              <Heading
                as="h2"
                size="md"
                alignSelf="flex-start"
                marginTop={5}
                textAlign="left"
                flexWrap="wrap"
                display="flex"
                maxWidth="50vw"
              >
                {experience.title}
              </Heading>
              <Heading
                as="h3"
                size="sm"
                alignSelf="flex-start"
                m={0}
                maxWidth="500px"
                textAlign="left"
              >
                {experience.organization}
              </Heading>
              {experience.duration && (
                <Text fontSize="sm" alignSelf="flex-start" textAlign="left">
                  {experience.duration}
                </Text>
              )}
              {experience.location && (
                <Text fontSize="sm" alignSelf="flex-start" textAlign="left">
                  {experience.location}
                </Text>
              )}
              <Text
                fontSize="md"
                alignSelf="flex-start"
                marginTop={2}
                maxWidth="50vw"
                textAlign="left"
              >
                Acquired Skills:
              </Text>
              <UnorderedList
                fontSize="md"
                alignSelf="flex-start"
                m={0}
                display="flex"
                flexDirection="column"
                maxWidth="50vw"
                justifyContent="flex-start"
                flexWrap="wrap"
                textAlign="left"
                borderLeft="1px solid"
                borderColor="gray.300"
                paddingLeft="12.5px"
                listStylePosition="outside"
              >
                {experience.acquiredSkills.map((skill, skillIndex) => (
                  <ListItem key={skillIndex}>{skill}</ListItem>
                ))}
              </UnorderedList>
            </Box>
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Experience;
