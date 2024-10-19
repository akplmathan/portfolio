import React from 'react'
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import ContactUs from "./components/contact/Contact";
import Project from './components/project/Project';

const Container = () => {
  return (
    <div>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <ContactUs/>
    </div>
  )
}

export default Container
