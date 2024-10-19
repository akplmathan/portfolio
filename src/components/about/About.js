import React from 'react'
import Typist from '../helper/Typist'
import './style.css'

const About = () => {
  return (
    <div className='about' id='about'>
        <h1>About Me</h1>
        <div data-aos='zoom-in' data-aos-duration="1000" className="objective">
            <h3>Objective</h3>
            <p> Hello, I'm Mathan, a dedicated web developer with a passion for crafting seamless and visually appealing user experiences. With a strong foundation in MERN Stack development, I'm actively seeking opportunities for both internships and full-time positions. My daily routine revolves around honing my skills through hands-on practice, tackling diverse projects, and continuously enhancing my problem-solving abilities. I thrive on creating elegant and functional websites that marry aesthetics with functionality. If you're looking for a motivated and adaptable web developer, I'm excited to bring my expertise to your team</p>
            <h3>Education</h3>
        </div>
        
        <div className="education">
        
            <div data-aos="fade-right" data-aos-duration="1600" className="card">
                <h2>B.Sc Computer Science</h2>
                <h3>MRG Arts College</h3>
                <h4>Bharathidasan University</h4>
                <h5>2020-2023</h5>
            </div>
            <div className="card" data-aos-duration="1600" data-aos="fade-right">
                <h2>Higher Secondary Education</h2>
                <h3>Govt Higher Secodary School</h3>
                <h4>Maths-Biology</h4>
                <h5>2018-2020</h5>
            </div>
            <div className="card" data-aos-duration="1600" data-aos="fade-right">
                <h2>Higher Education</h2>
                <h3>Govt Higher Secodary School</h3>
                <h5>2017-2018</h5>
            </div>
        </div>
    </div>
  )
}

export default About