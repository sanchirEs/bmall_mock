import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css"

const Menu = (props) => {
    return (
        <>
        <div>
            <ul className={css.Menu}>
             <>
                <MenuItem link="/freeship">Хүргэлт үнэгүй</MenuItem>
                <MenuItem link="/brand">Брэнд бараа</MenuItem>
                <MenuItem link="/new">Шинэ бараа</MenuItem>
                <MenuItem link="/sale">Хямдралтай</MenuItem>
            </>
                
            </ul>
        </div>
        </>
    )
}

export default Menu;