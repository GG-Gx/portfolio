import { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Experience from './components/Experience'
import Projects from './components/Projects'
import About from './components/About'
import Footer from './components/Footer'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
  useNavigate,
  Routes,
  Router,
  BrowserRouter,

} from "react-router-dom";

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
