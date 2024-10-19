import React from 'react';
import html from '../../assets/logo/html.png'
import css from '../../assets/logo/css.png'
import js from '../../assets/logo/js.png'
import git from '../../assets/logo/git.png'
import api from '../../assets/logo/api.png'
import bootstrap from '../../assets/logo/bootstrap.png'
import mongoDB from '../../assets/logo/db.png'
import express from '../../assets/logo/express.png'
import mongoose from '../../assets/logo/mongo.png'
import node from '../../assets/logo/node.png'
import postman from '../../assets/logo/postman.png'
import react from '../../assets/logo/react.png'
import './style.css'

const Skill = () => {
  return (
    <div className='skill' id='skill'>
        <h1>Skills</h1>
        
        <div className="frontend" >
            <h2>Front-End</h2>
          <div className="card-container">
          <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={html} alt="" />
                <h2>HTML</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={css} alt="" />
                <h2>CSS</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={js} alt="" />
                <h2>JAVASCRIPT</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={bootstrap} alt="" />
                <h2>BOOTSTRAP</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={react} alt="" />
                <h2>REACT</h2>
            </div>
          </div>
        </div>
        <div className="backend">
            <h2>Back-End</h2>
            <div className="card-container">
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={express} alt="" />
                <h2>NODE JS</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={node} alt="" />
                <h2>EXPRESS JS</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={mongoDB} alt="" />
                <h2>MONGODB</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={mongoose} alt="" />
                <h2>MONGOOSE</h2>
            </div>
            <div className="card" data-aos="zoom-in" data-aos-duration="1000">
                <img src={api} alt="" />
                <h2>REST API</h2>
            </div>
            </div>
        </div>
        <div className="tools">
            <h2>TOOLS</h2>
            <div className="card-container">
            <div className="card1" data-aos="zoom-in" data-aos-duration="1000">
                <img src={git} alt="" />
                <h2>GIT</h2>
            </div>
            <div className="card1 " data-aos="zoom-in" data-aos-duration="1000">
                <img src={postman} alt="" />
                <h2>POSTMAN</h2>
            </div>
            </div>
        </div>
            
    </div>
  )
}

export default Skill