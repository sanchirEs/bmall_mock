import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";


import Menu from "../Menu";
import Icons from "../Icons";

const NavBar = () => {
  return (
    <>
      <div className={css.Container}>
        <div className={css.Rectangle}><span className={css.CheckOutCode}>20% off! - Check out code: Zitty4</span></div>
        <div className={css.Toolbar}>
          <Logo />
          <input className={css.Searchbox} type="search" placeholder="Бараа хайх "/>
          <div className={css.Links}>
            <Icons />
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default NavBar;
