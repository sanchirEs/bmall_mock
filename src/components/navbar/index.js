import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";
import Menu from "../Menu";

const NavBar = () => {
    return (
        <>
            <div className={css.NavBar}>
               <div className={css.Rectangle}></div>
               <Logo /> 
               <Menu />
               
            </div>
            

        </>
    )
}

export default NavBar;