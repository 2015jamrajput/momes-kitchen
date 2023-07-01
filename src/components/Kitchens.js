import React from "react";
import { kitchen } from "../Data";
const Kitchens = () => {
  return (
    <>
      <section
        className="kitchen menu"
        id="kitchen"
      >
        <h1 className="heading">
          <span>Kitchens</span> Near You
        </h1>

        <div className="box-container">
          {kitchen.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.name}</h3>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                {item.name === "Sudha's Kitchen" ||
                item.name === "Kalpna Kitchen" ||
                item.name === "Shri Sai Kitchen" ? (
                  <i className="fas fa-star"></i>
                ) : (
                  <i className="fas fa-star-half-alt"></i>
                )}
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
              {item.name === "Jamai Da Kitchen" && (
                <a href="/jamaidakitchen" className="btn">
                  View
                </a>
              )}
              {item.name === "Siddheswari Kitchen" && (
                <a href="/siddheswarikitchen" className="btn">
                  View
                </a>
              )}
              {item.name === "New Deshapran Kitchen" && (
                <a href="/newdeshaprankitchen" className="btn">
                  View
                </a>
              )}
              {/* <a href="/" className="btn">
                View
              </a> */}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Kitchens;
