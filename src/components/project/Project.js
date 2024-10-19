import React from "react";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import hulu from "../../assets/project/hulu.jpg";
import shoeMart from "../../assets/project/shoe.PNG";
import Restaurent from "../../assets/project/rest.PNG";
import MovieStore from "../../assets/project/movie.PNG";
import metube from "../../assets/project/metube.PNG";
import sps from "../../assets/project/sps.PNG";
import "./style.css";

const Project = () => {
  return (
    <div className="project" id="project">
      <h2>Projects</h2>
      <div data-aos="zoom-in-left" className="card"  data-aos-duration="2000">
        <div className="card-top">
          <img src={metube} alt="" />

          <div className="card-detail">
            <h2>Video Sharing Application</h2>
            <p>
              A fully responsive Full Stack Video Sharing Application. The
              frontend technologies used are React, HTML, CSS, and JavaScript,
              while the backend is built with Node.js and Express.js. Users can
              create an account, upload videos, edit their profile details, and
              watch videos posted by other users. Videos are stored in cloud
              storage.
            </p>
            <div className="links">
              <a href="https://github.com/akplmathan/video-sharing-app-frontend">
                <FaCode /> View Code
              </a>
              <a href="https://metube-video-sharing-app.netlify.app/">
                <FaEye /> View Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="card" data-aos-duration="2000">
        <div className="card-top">
          <img src={hulu} alt="" />

          <div className="card-detail">
            <h2>Hulu App Clone</h2>
            <p>
              A good-looking Hulu app clone that is fully responsive. React,
              HTML, CSS, and JavaScript are the technologies used. obtained an
              Application Programming Interface with up-to-date, current movie
              information from The Movie Database.
            </p>
            <div className="links">
              <a href="https://github.com/akplmathan/Hulu-App-Clone">
                <FaCode /> View Code
              </a>
              <a href="https://cool-bavarois-5c13a1.netlify.app/">
                <FaEye /> View Live
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="card" data-aos-duration="2000">
        <div className="card-top">
          <div className="card-img">
            <img src={sps} alt="" />
          </div>
          <div className="card-detail">
            <h2>Stone Paper Scissor</h2>
            <p>
              The Stone Paper Scissors game using the MERN stack (MongoDB,
              Express, React, Node.js) features a web application with 6-round
              games, where results are stored in a MongoDB database. The
              backend, developed with Express, manages game data and handles API
              endpoints for game operations. The React frontend captures player
              inputs, displays results, and uses Axios for API communication.
              Each round's winner is determined based on player 1 and player 2
              moves.
            </p>
            <div className="links">
              <a href="https://github.com/akplmathan/mern-stone-paper-scissor.git">
                <FaCode /> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="card" data-aos-duration="2000">
        <div className="card-top">
          <div className="card-img">
            <img src={MovieStore} alt="" />
          </div>
          <div className="card-detail">
            <h2>Movie Store</h2>
            <p>
              The Full stack application is this one. On this website, we may
              use the CRUD operations (create, update, read, and delete).Data
              that we make are immediately saved in a cloud database.Utilize the
              following technologies: JavaScript, HTML, CSS, React, Express,
              MongoDB, and Mongoose
            </p>
            <div className="links">
              <a href="https://github.com/akplmathan/MERN-STACK">
                <FaCode /> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="card" data-aos-duration="2000">
        <div className="card-top">
          <div className="card-img">
            <img src={Restaurent} alt="" />
          </div>
          <div className="card-detail">
            <h2>Food Filter</h2>
            <p>
              a restaurant food app with a good UI.This initiative is dependent
              on restaurant fare, including a wide range of dishes and ice
              creams.Utilized technologies include JavaScript, HTML, and CSS.To
              choose what kind of food to order, use the search bars or category
              categories.
            </p>
            <div className="links">
              <a href="https://github.com/akplmathan/JavaScript-Projects/tree/main/Restuarent">
                <FaCode /> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-in-left" className="card" data-aos-duration="2000">
        <div className="card-top">
          <div className="card-img">
            <img src={shoeMart} alt="" />
          </div>
          <div className="card-detail">
            <h2>Shoes Mart</h2>
            <p>
              This is the well-designed Ecommerse website.The technologies used
              are JavaScript, HTML, and CSS. This website is exclusively for
              shoe things; when you hover over an item, buy choices appear
              instantly.
            </p>
            <div className="links">
              <a href="https://github.com/akplmathan/JavaScript-Projects/tree/main/shoes%20mart">
                <FaCode /> View Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
