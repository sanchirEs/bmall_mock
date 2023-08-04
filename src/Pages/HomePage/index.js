import React from "react";
import css from "./style.module.css";
import png from "../../assets/Stella-McCartney-Hero.png";
import Category from "../../components/Category";


const HomePage = () => {
  return (
    <>
      <div className={css.Container}>
        <Category />
        <div>
            <img src={png} className={css.StellaMcCartneyHero} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
