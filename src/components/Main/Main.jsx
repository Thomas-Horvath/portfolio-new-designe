import React from 'react';
import Home from '../../pages/Home/Home';
import About from '../../pages/About/About';
import Quote from '../../components/Quote/Quote';
import Skills from '../../pages/Skills/Skills';
import Blog from '../../pages/Blog/Blog';
import Contact from '../../pages/Contact/Contact';
import ProjectPage from '../../pages/ProjectPage/ProjectPage';


const Main = () => {
  
  return (
    <>
        <Home />
        <About /> 
        <Quote />
        <Skills />
        <ProjectPage />
        <Blog />
        <Contact />
    </>
  )
}

export default Main