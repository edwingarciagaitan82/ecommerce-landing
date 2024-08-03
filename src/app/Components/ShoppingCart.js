"use client";

import { useState } from "react";
function ShoppingCart(){
  const [ show , setShow] = useState(false)
    const hdMostrar = () =>{
      // if(show)
      //   setShow(false)
      // else
      //   setShow(true)
        console.log("!!!")
    }
    return(<>
    <button onClick={ hdMostrar } className="btn btn-primary" type="button">
      Carrito
    </button>
    <div className={ (show) ? 'offcanvas offcanvas-start show':'offcanvas offcanvas-start' } tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div className="offcanvas-header">
    <h5 className="offcanvas-title" id="offcanvasExampleLabel">Offcanvas</h5>
    <button onClick={ hdMostrar } type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body">
    <div>
      Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc.
    </div>
    <div className="dropdown mt-3">
      <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
        Dropdown button
      </button>
      <ul className="dropdown-menu">
        <li><a className="dropdown-item" href="#">Action</a></li>
        <li><a className="dropdown-item" href="#">Another action</a></li>
        <li><a className="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</div></>)
}
export default ShoppingCart