import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/Group 180.png";

const Logo = () => (
  <a href="/">
  <i  className={css.Logo}>
    <img src={logoImage} alt="" />
  </i>
  </a>
);

export default Logo;
