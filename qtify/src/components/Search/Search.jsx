import React from "react";
import styles from "./Search.module.css";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input className={styles.search} placeholder={placeholder} />
      <button className={styles.searchbutton}>
        <img
          src={require("../../assets/Search-icon.png")}
          //   height={20}
          width={20}
        />
      </button>
    </div>
  );
};

export default Search;
