import React from "react";
import { Box, Flex, Text, Heading, Image, Button } from "@chakra-ui/react";

const projectData = [
  {
    id: 1,
    title: "tuneGather",
    description: "A user-friendly calendar system designed for booking freelance music teachers. Whether you're a student looking to enhance your musical skills or a teacher eager to share your expertise, tuneGather simplifies the scheduling process, allowing seamless booking of music lessons.",
    imageSrc: "/tuneGather - Google Chrome 23_05_2024 14_51_13.png",
    codeLink: "https://github.com/GG-Gx/final-project",
    previewLink: "https://admirable-halva-1c9c04.netlify.app/"
  },
  {
    id: 2,
    title: "Ticket App",
    description: "This app served as a hands-on exercise to enhance my skills with Next.js. It functions as a straightforward ticketing solution, enabling users to effortlessly generate and oversee tickets for various events.",
    imageSrc: "/ticketing-app.png",
    codeLink: "https://github.com/GG-Gx/ticket-app",
    previewLink: "https://ticket-app-eta.vercel.app/"
  },
  {
    id: 3,
    title: "Pokedex Fight Club",
    description: "A React app where users can explore Pokémon, choose their favorites, and watch them battle. Featuring basic stats and animations, it’s a fun way to bring Pokémon encounters to the screen.",
    imageSrc: "/pokedex.png",
    codeLink: "https://github.com/GG-Gx/PokeFight",
    previewLink: "https://poke-fight-ggg.netlify.app/"},
  {
    id: 4,
    title: "To-Do List",
    description: "A simple to-do list app created with React. Users can add, delete, and mark tasks as complete. This project was created to practice React state management.",
    imageSrc: "/todo.png",
    codeLink: "https://github.com/GG-Gx/to-do-list-react",
    previewLink: "https://to-do-list-ggg.netlify.app/",
  },

];

const ProjectCard = ({ project }) => {
 
  return (
    <Box key={project.id}     paddingTop={10}
    pl={5} 
    ml={5}
    mb={8} 
    id="projectcards">
      <Image
        src={project.imageSrc}
        fallbackSrc="/fallback-image.png" // Show fallback if the image fails to load
        width="300px"
        maxWidth="60vw"
        height="auto"
        objectFit="cover"
        alt={project.title}
        borderRadius={23}
        _hover={{
          transform: 'scale(1.04)',
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
        {project.title}
      </Heading>
      <Text
        fontSize="md"
        alignSelf="flex-start"
        margin={0}
        maxWidth="60vw"
        textAlign="left"
      >
        {project.description}
      </Text>
      <Box
        display="flex"
        alignSelf="flex-start"
        gap={3}
        flexWrap="wrap"
        flexDirection="row"
        justifyContent="left"
        alignItems="center"
        maxWidth="70vw"
        marginTop={3}
      >
        <Button
          borderRadius={23}
          colorScheme="orange"
          height="30px"
          onClick={() => window.open(project.codeLink, "_blank", "noopener noreferrer")}
        >
          <Image
            src="./brand-github.svg"
            boxSize="15px"
            objectFit="cover"
            alt="GitHub"
            marginRight={1}
            justifyContent="center"
            alignSelf="center"
            alignContent="center"
          />
          Code
        </Button>
        <Button
          borderRadius={26}
          colorScheme="orange"
          height="30px"
          onClick={() => window.open(project.previewLink, "_blank", "noopener noreferrer")}
        >
          <Image
            src="./link.svg"
            boxSize="15px"
            objectFit="cover"
            alt="Preview"
            marginRight={1}
            justifyContent="center"
            alignSelf="center"
            alignContent="center"
          />
          Preview
        </Button>
      </Box>
    </Box>
  );
};

const Projects = () => {
  return (
    <Box
    paddingTop={10}

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

          {/* Map over the project data to render each project */}
          {projectData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Box>
      </Flex>
    </Box>
  );
};

export default Projects;
