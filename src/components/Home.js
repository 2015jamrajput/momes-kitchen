import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="content">
          <h3>
            Discover <span>kitchens </span>that deliver near you
          </h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
            labore, sint cupiditate distinctio tempora reiciendis.
          </p>
          <Link to="/kitchen" className="btn">
            Explore kitchens
          </Link>
          {/* <input width placeholder="Search kitchens or restaurants" type="search" /> */}
        </div>
      </section>
    </>
  );
};

export default Home;
