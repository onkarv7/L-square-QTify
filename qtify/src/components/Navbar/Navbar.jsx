import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Logo />
      <Button>Give Feedback</Button>
    </div>
  );
};

export default Navbar;
