import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css"

const Menu = (props) => {
    return (
        <>
        <div className={css.Container}>
            <ul className={css.Menu}>
                <div className={css.Category}>Барааны ангилал</div>
                <MenuItem link="/freeship">Хүргэлт үнэгүй</MenuItem>
                <MenuItem link="/brand">Брэнд бараа</MenuItem>
                <MenuItem link="/new">Шинэ бараа</MenuItem>
                <MenuItem link="/sale">Хямдралтай</MenuItem>                
            </ul>
        </div>
        </>
    )
}

export default Menu;