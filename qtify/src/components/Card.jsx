import React from "react";
//import Carouselbutton from "./Carouselbutton";
import CardAlbum from "./CardAlbum";
import { useEffect, useState } from "react";
import Carousel from "./Carousel";

function Card({ albumData, isShowAll }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    // albumData().then((data) => {
    //   // console.log("data getting passed", data);
    //   setCards(data);
    // });

    //IIFE method in useEffect for async/await

    (async () => {
      const data = await albumData();
      setCards(data);
    })();
  }, []);

  return (
    <>
      {/* <Carouselbutton /> */}

      {isShowAll ? (
        <div className="card">
          {cards.map((card) => (
            <CardAlbum
              data={{
                title: card.title,
                image: card.image,
                follows: card.follows,
              }}
              key={card.id}
            />
          ))}
        </div>
      ) : (
        <div id="carousel_Card">
          <Carousel cards={cards} />
        </div>
      )}
    </>
  );
}

export default Card;
