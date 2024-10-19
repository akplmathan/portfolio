import React from 'react'
import profile from '../../assets/profile.jpg'
import Typist from '../helper/Typist'
import { FaGithub } from "react-icons/fa";
import { FaRegFileAlt } from "react-icons/fa";
import './style.css'




const Home = () => {
  return (
    <div className='home' id='home'>
      <div data-aos="fade-right" data-aos-duration="1000" className="home-left">
           <div className="info">
           <h3>Hii, My Name is <span>Mathan</span> </h3>
            <h3> and I am passionate</h3>
            <h2 className='type'><Typist  text='F ull Stack Developer' speed={100}/></h2>
           </div>
           <div className="social-media">
            <a href="https://drive.google.com/file/d/1QhaaTWSfGIAJ1QE5MF9CIuxB82Lf4dzS/view?usp=drive_link">
            <button>
              <FaRegFileAlt/>  View Resume
            </button>
            </a>
            <a href="https://github.com/akplmathan">
            <button>
               <FaGithub/>   Visit GitHub
            </button>
            </a>
            
           </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000" className="home-right">
           <div className="img">
           <img src={profile} alt="" />
           </div>
      </div>
      <hr />
    </div>
    
  )
}

export default Home