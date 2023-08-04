import React from "react";
import ListItem from "../ListItem";
import css from "./style.module.css"
import { List } from "phosphor-react";

const Menu = (props) => {
    return (
        <>
        <div className={css.Container}>
            <ul className={css.Menu}>
                <button className={css.Head}> <List style={{padding: "14px"}}size={36} color="white" weight="bold" /> Барааны ангилал</button>
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