import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

import "./style.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="left"></div>
      <div className="center">
        <p> Copyrights &copy; 2024 All rights Reserved</p>
      </div>
      <div className="right">
        <a
          href="https://www.linkedin.com/in/m-mathan-014505246/"
          className="linked"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://www.instagram.com/mathan_18_01/?utm_source=qr&igshid=OGUzMzk1ZmEzMg%3D%3D"
          className="insta"
        >
          <FaInstagramSquare />
        </a>

        <a href="https://wa.link/mbaplo" className="whatsapp">
          <FaSquareWhatsapp />
        </a>
        <a href="mailto:akplmathan@gmail.com" className="call">
          <IoMdMail />
        </a>
      </div>
    </div>
  );
};

export default Footer;
