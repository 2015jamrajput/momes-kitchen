import React from "react";

const Footer = () => {
  return (
    <>
      <section class="footer">
        <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
          <a href="#" class="fab fa-pinterest"></a>
        </div>
        <div class="links">
          <a href="/">home</a>
          <a href="/kitchen">Kitchen</a>
          <a href="/blogs">Blog</a>
          {/* <a href="/listmenu">List Menu</a> */}
          {/* <a href="#menu">menu</a> */}
          {/* <a href="#">products</a> */}
          {/* <a href="#review">review</a>
          <a href="#contact">contact</a>
          <a href="#blogs">blogs</a> */}
        </div>
        <div class="credit">
          created by <span>Abhishek Singh</span> | all rights reserved
        </div>
      </section>
    </>
  );
};

export default Footer;
