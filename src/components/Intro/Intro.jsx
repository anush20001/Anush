import React, { useContext } from "react";
import "./Intro.css";
import "../../App.css"

import {BsInstagram} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import myimg from "../../img/myimg.jpg";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Anush Kadav</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button bn5">Hire me</button>
        </Link>
       
         <div className="socialM">
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
       
      </div>
      {/* right image side */}
      <div className="i-right">
         {/* <img src={Vector1} alt="" />  */}
        {/* <img src={Vector2} alt="" />  */}
        
        <img src={myimg} alt=""  className="myimg"/>
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div 
          initial={{ top: "4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div web" 
        >
          <FloatinDiv  img={crown} text1="Web" text2="Developer" className='web'  />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Frontend " text2="Developer" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
