import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Logo from "../assets/logo3.jpg";
import { a } from 'react-router-dom';
import cartimage from "../assets/cart.png"

const Navbar = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
    <img className="logo" src={Logo} />
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <form class="d-flex" role="search">
               <input class="form-control" type="search" placeholder="Search Your Book " aria-label="Search" />
                 <button class="btn btn-outline-success" type="submit"> Search</button>
          </form>
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/"> Home</a>
          </li>
         
          
          <li className="nav-item">
          <a className="nav-link" href="/Login">Login</a>
          </li> 
         
        <li class="nav-item">
        <a className="nav-link" href="/Signup">Signup</a>
      </li>
      <li class="nav-item">
        <a className="nav-link" href="/Contact">Conatct Us</a>
      </li>
      <button image class="btn btn-outline-success" type="submit"> ADD TO CART   
      </button>
     
        </ul>
      </div>
    </div>
  </nav>
  </>
  )

}
export default Navbar