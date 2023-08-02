import React from "react";
import css from "./style.module.css";
import png from "../../assets/Stella-McCartney-Hero.png";
import CategoryList from "../../components/CategoryList";

const HomePage = () => {
  return (
    <>
      <div className={css.Container}>
        <div>
            <CategoryList />
            <img src={png} className={css.StellaMcCartneyHero} alt="" />
        </div>
      </div>
    </>
  );
};

export default HomePage;
