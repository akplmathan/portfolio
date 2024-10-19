import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/project/Project";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from "./Container";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <div className="nav">

          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Container />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
};

export default App;
