import React, { useState } from "react";
import Card from "../Card";

function CardSection({ title, albumData }) {
  const [isShowAll, setISShowAll] = useState(false);

  const handleToggle = () => {
    setISShowAll((prevState) => !prevState);
  };

  return (
    <div className="CardSection">
      <div className="card_title">
        <span className="topalbum">{title}</span>
        <button className="showbtn" onClick={handleToggle}>
          <span className="show">{isShowAll ? "Show All" : "Collapse"}</span>
        </button>
      </div>
      <div>
        <Card
          albumData={albumData}
          isShowAll={isShowAll}
          setISShowAll={setISShowAll}
        />
      </div>
    </div>
  );
}

export default CardSection;
