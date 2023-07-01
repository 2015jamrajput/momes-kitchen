import React from 'react'
import food from '../../assets/images/biryani1.jpg'

function NewDeshapranKitchen() {
  return (
    <>
    <section className="kitchen menu" id="kitchen">
      <h1 className="heading">
        <span>New Deshapran</span> Kitchen
      </h1>
        <h2 style={{color:"white"}}>Currently Available:</h2> <br />
      <div className="box-container">
            <div className="box" >
              <div className="image">
                <img src={food} alt="" />
              </div>
              <div className="content">
                <h3>Biryani</h3>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                </div>
                <div className="price">
                &#8377; 139.00
                </div>
              </div>
              <a href="/" className="btn">
                Add to cart
              </a>
            </div>
        </div>
    </section>
  </>
  )
}

export default NewDeshapranKitchen