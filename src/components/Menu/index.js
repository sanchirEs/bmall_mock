import React from "react";
import MenuItem from "../MenuItem";
import css from "./style.module.css"

const Menu = (props) => {
    return (
        <>
        <div>
            <ul className={css.Menu}>
            {props.userId ? (
                <>
                <MenuItem exact link="/">
                    ШИНЭ ЗАХИАЛГА
                </MenuItem>
                <MenuItem link="/orders">ЗАХИАЛГАНУУД</MenuItem>
                <MenuItem link="/logout">ГАРАХ</MenuItem>
                </>
            ) : (
                <>
                <MenuItem link="/login">НЭВТРЭХ</MenuItem>
                <MenuItem link="/signup">БҮРТГҮҮЛЭХ</MenuItem>
                </>
            )}
            </ul>
        </div>
        </>
    )
}

export default Menu;