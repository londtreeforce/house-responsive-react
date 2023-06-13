import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import "swiper/css";
import "./residence.css";

import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";


const Residence = () => {
  return (
    <section className="residence-wrapper ">
      <div className="paddings innerWidth residence-container">
        <div className="residence flexColStart ">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residence</span>
        </div>

        <Swiper {...sliderSettings}>
            <SliderButtons />
          {data.map((card, i) => (
            <SwiperSlide key={i} >
              <div className="residence-card">
                <div className="flexColStart residence-card">
                  <img src={card.image} alt="house" />

                  <span className="secondaryText residence-price">
                    <span style={{ color: "orange" }}>$</span>
                    <span>{card.price}</span>
                  </span>

                  <span className="primaryText">{card.name}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residence;


const SliderButtons = () => {
    
    const swiper = useSwiper();
    
    return(
        <div className="flexCenter residence-buttons">
            <button onClick={()=> swiper.slidePrev()}>&lt;</button>
            <button onClick={()=> swiper.slideNext()}>&gt;</button>
        </div>
    )
}