import React from "react";
import "./style.css";
import {Link,useNavigate } from "react-router-dom";


const Navbar = () => {
  const navigate = useNavigate()

  const handleNavigate=()=>{
      navigate('/')
  }
  return (
    <div className="navbar">
      <div className="nav-left">
        <h2>Mathan Portfolio</h2>
      </div> 
      <div className="nav-right">
        <a onClick={()=>handleNavigate()} href="#home">
          <p>Home</p>
        </a>
        <a onClick={()=>handleNavigate()} href="#about">
          <p>About</p>
        </a>
        <a onClick={()=>handleNavigate()} href="#skill">
          <p>Skills</p>
        </a>
        <a href='#project'>
          <p>Project</p>
        </a>

        <a onClick={()=>handleNavigate()} href="#contact">
          <p>Contact</p>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
