import { useState, useEffect } from 'react';
import { Spinner, Center, Box } from '@chakra-ui/react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Navbarsmall from './components/Navbarsmall';

import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const timer = setTimeout(() => setLoading(false), 1000); // 
    return () => clearTimeout(timer); 
  }, []);

  if (loading) {
    return (
      <Center h="100vh">
        <Spinner size="xl" color="red.500" thickness="4px" speed="0.65s"
         />
      </Center>
    );
  }

  return (
    <>
      <Navbar />
      <Navbarsmall />
      <Header />
      <Experience />
      <Projects />
      <About />
      <Footer />
    </>
  );
}

export default App;
