import React from "react";
import { popularKitchen } from "../Data";
const PopularKitchen = () => {
  return (
    <>
      <section className="popularKitchen menu" id="menu">
        <h1 className="heading">
          <span>Popular </span> in your area
        </h1>

        <div className="box-container">
          {popularKitchen.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
              </div>
              {item.name === "Sudha's Kitchen" && (
                <a href="/sudhaskitchen" className="btn">
                  View
                </a>
              )}
              {item.name === "Kalpna Kitchen" && (
                <a href="/kalpnakitchen" className="btn">
                  View
                </a>
              )}
              {item.name === "Shri Sai Kitchen" && (
                <a href="/shrisaikitchen" className="btn">
                  View
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularKitchen;
