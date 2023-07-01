import React from 'react'
import food from '../assets/images/biryani1.jpg'

function ListMenu() {
  return (
    <>
    <section  className="kitchen menu" id="kitchen">
      <h1 className="heading">
        <span>Jamai Da</span> Kitchen
      </h1>
        <h2 style={{color:"white"}}>Add Item:</h2> <br />
      <div className="box-container">
            <div className="box" >
              <input style={{fontSize:"2.3rem"}} placeholder='Enter dish to add'>  
              </input> <br /> <br />
              <input style={{fontSize:"2.3rem"}} type="number"  placeholder='Enter price'>  
              </input>
              <div className="content">
                
                {/* <div className="price">
                &#8377; 99.00
                </div> */}
              </div>
              <a href="/" className="btn">
                ADD
              </a>
            </div>
        </div>
    </section>
  </>
  )
}

export default ListMenu