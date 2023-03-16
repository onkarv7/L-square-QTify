import React from "react";
import { useSwiper } from "swiper/react";

export function Carouselbutton() {
  const swiper = useSwiper();
  return (
    <div className="carousel_Nav_Button">
      <button className="carousel_btn" onClick={() => swiper.slidePrev()}>
        {"<"}
      </button>
      <button
        className="carousel_btn"
        id="carousel_left"
        onClick={() => swiper.slideNext()}
      >
        {">"}
      </button>
    </div>
  );
}
