import React from "react";
import css from "./style.module.css";
import png from "../../assets/Stella-McCartney-Hero.png";
import Category from "../../components/Category";
import Card from "../../components/general/Card";


const HomePage = () => {
  return (
    <>
      <div className={css.Container}>
        
        <div style={{display: 'flex'}}>
          <Category />
          <img src={png} className={css.StellaMcCartneyHero} alt="" />
        </div>
        <Card/>
      </div>
      
    </>
  );
};

export default HomePage;
