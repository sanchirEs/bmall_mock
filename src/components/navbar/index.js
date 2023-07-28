import React from "react";
import css from "./style.module.css";
import Logo from "../Logo";

const NavBar = () => {
    return (
        <>
            <div className={css.NavBar}>
               <div className={css.Rectangle}></div>
               <Logo /> 
            </div>
            

        </>
    )
}

export default NavBar;