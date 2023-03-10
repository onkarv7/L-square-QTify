import React from "react";
import Logo from "../Logo/Logo";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
    </div>
  );
};

export default Navbar;
