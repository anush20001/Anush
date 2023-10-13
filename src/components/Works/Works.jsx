import React, { useContext } from "react";
import "./Works.css";
import tailwind from "../../img/tailwind.png";
import react from "../../img/react.png";
import github from "../../img/github2.png";
import javascript from "../../img/javascript.png";
import material from "../../img/material.png";
import mongodb from "../../img/mogodb.png";
import firebase from "../../img/firebase.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
           Skills
          </span>


         <div className="yellow1">
         Skills
         </div>
         
         
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 0 }}
          whileInView={{ rotate: 360 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration:17.1,  type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle c1">
            <img src={tailwind} alt="" className=" c1" />
          </div>
          <div className="w-secCircle">
            <img src={react} alt="" className=" c1"/>
          </div>
          <div className="w-secCircle">
            <img src={github} alt="" className=" c1"/>
          </div>{" "}
          <div className="w-secCircle">
            <img src={javascript} alt="" className=" c1"/>
          </div>
         
          <div className="w-secCircle">
            <img src={material} alt="" className=" c1"/>
          </div>
        
          <div className="w-secCircle">
            <img src={firebase} alt="" className=" c1"/>
          </div>
          {/* <div className="w-secCircle">
            <img src={mongodb} alt="" className=" c1"/>
          </div> */}
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
