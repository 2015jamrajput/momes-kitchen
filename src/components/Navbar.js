import React, { useRef } from "react";
import { Link } from "react-router-dom";
import MomesLogo from "../assets/images/momeslogo2.png"
import CartItem1 from "../assets/images/biryani2.png"
import CartItem2 from "../assets/images/nonvegmeal2.webp"
import CartItem3 from "../assets/images/vegmeal2.jpg"
import { cart } from "../Data";

const Navbar = () => {
  const navbarRef = useRef();
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarHandler = () => {
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };

  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    navbarRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
  };
  const cartHandler = () => {
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  };

  return (
    <>
       {/* <div><Link to="/kitchen" className="btn">
            Explore kitchens
          </Link></div> */}
       <header className="header">
        <a href="/" className="logo">
          <img className="momeslogo" src={MomesLogo} alt="" />
        </a>
        <nav className="navbar" ref={navbarRef}>
          <a href="/">Home</a>
          <a href="/kitchen">Kitchen</a>
          <a href="/blogs">Blogs</a>
          <a href="/listmenu">List Menu</a>
         
        </nav>
        <div className="icons">
          
          <div
            className="fas fa-search"
            id="search-btn"
            onClick={searchHandler}
          ></div>
          <div
            className="fas fa-shopping-cart"
            id="cart-btn"
            onClick={cartHandler}
          ></div>
          <div
            className="fas fa-bars"
            id="menu-btn"
            onClick={navbarHandler}
          ></div>
        </div>
        <div className="search-form" ref={searchRef}>
          <input type="search" id="search-box" placeholder="Search for kitchen or restaurant" />
          <label htmlFor="search-box" className="fas fa-search"></label>
        </div>
        <div className="cart-items-container" ref={cartRef}>
            <div className="cart-item">
              <span className="fas fa-times"></span>
              <img src={CartItem1} alt="" />
              <div className="content">
                <h3>cart item 01</h3>
                <div className="price">&#8377; 139.00/-</div>
              </div>
            </div>
            <div className="cart-item">
              <span className="fas fa-times"></span>
              <img src={CartItem2} alt="" />
              <div className="content">
                <h3>cart item 02</h3>
                <div className="price">&#8377; 179.00/-</div>
              </div>
            </div>
            <div className="cart-item">
              <span className="fas fa-times"></span>
              <img src={CartItem3} alt="" />
              <div className="content">
                <h3>cart item 03</h3>
                <div className="price">&#8377; 99.00/-</div>
              </div>
            </div>

      
           <a href="#" className="btn">
            checkout now
          </a>
        </div>
      </header> 
    </>
  );
};

export default Navbar;
