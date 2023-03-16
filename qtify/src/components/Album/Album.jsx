import React from "react";
import styles from "./Album.module.css";

const Album = () => {
  return (
    <div className={styles.wrapper}>
      Album
      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={require("../../assets/headphone.png")} alt="" />
          <div className={styles.text}>
            <h3>100 Follows</h3>
          </div>
        </div>
      </div>
      <h3 className={styles.title}>New Bollywood</h3>
    </div>
  );
};

export default Album;
