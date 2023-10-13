import React from "react";
import "./Footer.css";
import {BsInstagram} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
const Footer = () => {
  return (
    
      <div className="footers">
     
     <a href="https://www.instagram.com/iam_anush_kadav_/?hl=en">
          <BsInstagram  size={30} className="insta"/>
          </a>
       
           <a href="https://github.com/anush20001">
           <BsGithub size={30} className="git"/>
           </a>
        
          <a href="https://www.linkedin.com/in/anush-kadav">
          <BsLinkedin size={30} className="link"/>
          </a>
      </div>

         
        
  );
};

export default Footer;
