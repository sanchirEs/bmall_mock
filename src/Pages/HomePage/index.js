import React from "react";
import css from "./style.module.css";
import png from "../../assets/Stella-McCartney-Hero.png";


const HomePage = () => {
  return (
    <>
      <div className={css.Container}>
        <div>
            <img src={png} className={css.StellaMcCartneyHero} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
