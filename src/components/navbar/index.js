import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";

import { Link } from "react-router-dom";
import { HeartStraight, ShoppingCart, UserCircle } from "phosphor-react";
import Menu from "../Menu";

const NavBar = () => {
  return (
    <>
      <div className={css.Container}>
        <div className={css.Rectangle}></div>
        <div className={css.Toolbar}>
          <Logo />
          <input className={css.Searchbox} type="search" />
          <div className={css.Links}>
            <Link to="/liked">
              <HeartStraight size={42} color="#c70a83" weight="thin" />
            </Link>
            <Link to="/store">
              <ShoppingCart size={42} color="#c70a83" weight="thin" />
            </Link>
            <Link to="/">
              <UserCircle size={42} color="#c70a83" weight="thin" />
            </Link>
          </div>
        </div>
        <Menu />
      </div>
    </>
  );
};

export default NavBar;
