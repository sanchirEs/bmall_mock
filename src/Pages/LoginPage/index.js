import React from "react"
import { useState } from "react";
import css from "./style.module.css"

const LoginPage =()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = () => {
        alert("login....")
    };
    
    return (
        <div className={css.Login}>
        <input type="text" placeholder="email" 
        onChange={event => setEmail(event.target.value)}/>
        <input type="password" placeholder="password"
        onChange={event => setPassword(event.target.value)}/>
        <button text="submit" onClick={login}/>

        <p>{email}:::{password}</p>
        </div>
    )
}

export default LoginPage;