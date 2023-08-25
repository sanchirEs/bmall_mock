import css from "./style.module.css";
import { useState, useEffect } from "react";
import React from "react";

const Card = () => {
  // https://fakestoreapi.com/products
  const [fake, setFake] = useState([]);
  console.log(fake);
  useEffect(() => {
    fakestore();
  }, []);

  const fakestore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    //console.log(response);
    const jsonData = await response.json();
    //console.log(jsonData);
    setFake(jsonData);
  };

  return (
    <>
      <div className={css.container}>
        {fake.map((values) => {
          return (
            <>
              <div className={css.box}>
                <div className={css.content}>
                  <h5>{values.title}</h5>
                  <p>{values.description}</p>
                </div>
                <img src={values.image} alt="" />
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Card;
