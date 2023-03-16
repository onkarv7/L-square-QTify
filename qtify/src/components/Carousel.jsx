import React from "react";
import CardAlbum from "./CardAlbum";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Carouselbutton } from "./Carouselbutton";

function Carousel({ cards }) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={42}
      slidesPerView={7}
      //navigation
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log("slide change")}
    >
      <div>
        {cards.map((card) => (
          <SwiperSlide>
            <CardAlbum
              data={{
                title: card.title,
                image: card.image,
                follows: card.follows,
              }}
            />
          </SwiperSlide>
        ))}
      </div>
      <Carouselbutton />
    </Swiper>
  );
}

export default Carousel;
