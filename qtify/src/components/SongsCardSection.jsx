import React from "react";
import FilterSong from "./FilterSong";

function SongsCardSection({ title, albumData }) {
  return (
    <div className="CardSection">
      <div className="card_title">
        <span className="topalbum">{title}</span>
      </div>
      <div>
        <FilterSong albumData={albumData} />
      </div>
      <div></div>
    </div>
  );
}

export default SongsCardSection;
