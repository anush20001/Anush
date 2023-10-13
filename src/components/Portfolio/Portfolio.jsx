import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import devdetectives from "../../img/devdectives.png";
import movieflix from "../../img/movieflix.png";
import codefusion from "../../img/codefusion.png";
import shopzone from "../../img/shopzone.png";
import gifgenerator from "../../img/gifgenerator.png";

import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent </span>
      <span>Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
         <a href="https://shop-zone-black.vercel.app/">
         <img src={shopzone} alt="" className="img"/>
         <h2>ShopZone</h2>
         
         </a>
        </SwiperSlide>
        <SwiperSlide>
         <a href="https://movie-flix-ten.vercel.app/">
         <img src={movieflix} alt="" className="img"/>
         <h2>MovieFlix</h2>
         
         </a>
        </SwiperSlide>
        <SwiperSlide>      
        <a href="https://dev-detectives.vercel.app/">
          <img src={devdetectives} alt="" className="img" />
          <h2>DevDectives</h2>
         
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://codefusion-delta.vercel.app/">
          <img src={codefusion} alt="" className="img" />
          <h2>CodeFusion</h2>
         
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://gif-generator-three.vercel.app/">
          <img src={gifgenerator} alt="" className="img" />
          <h2>Gif-Generator</h2>
          
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
