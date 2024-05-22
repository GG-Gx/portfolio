import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'

import './App.css'


function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Experience />
      <Projects />
      <About />
      <Footer />
      

    </>
  
  )
}

export default App
