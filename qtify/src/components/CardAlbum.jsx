import React from "react";

function CardAlbum({ data }) {
  const { title, image, follows } = data;

  return (
    <div className="card_album">
      <div className="card_data">
        <img src={image} alt="CardImage" className="cardimage" loading="lazy" />
        <div className="cardbutton_data">
          <button className="cardbutton">
            <span className="card_button_text">{follows} Follows</span>
          </button>
        </div>
      </div>
      <div className="cardtext">
        <span>{title}</span>
      </div>
    </div>
  );
}

export default CardAlbum;
