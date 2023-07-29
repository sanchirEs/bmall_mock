import React from "react";
import css from "./style.module.css"
import logoImage from "../../assets/Group 180.png"

const Logo = () => (
    <div className={css.Logo}>
      <img src={logoImage} alt=""/>
      <button type="button" className="btn btn-primary">Primary</button>
    </div>
  );

export default Logo;  