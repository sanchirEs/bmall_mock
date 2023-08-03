import React from "react";
import ListItem from "../ListItem";
import css from "./style.module.css"
import Category from "../Category";

const Menu = (props) => {
    return (
        <>
        <div className={css.Container}>
            <ul className={css.Menu}>
                <Category />
                <ListItem link="/freeship">Хүргэлт үнэгүй</ListItem>
                <ListItem link="/brand">Брэнд бараа</ListItem>
                <ListItem link="/new">Шинэ бараа</ListItem>
                <ListItem link="/sale">Хямдралтай</ListItem>                
            </ul>
        </div>
        </>
    )
}

export default Menu;