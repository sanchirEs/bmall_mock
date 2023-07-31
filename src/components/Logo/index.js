import React from "react";
import css from "./style.module.css";
import logoImage from "../../assets/Group 180.png";

const Logo = () => (
  <div className={css.Logo}>
    <img src={logoImage} alt="" />
  </div>
);

export default Logo;
