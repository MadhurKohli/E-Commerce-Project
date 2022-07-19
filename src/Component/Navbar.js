import React from 'react';
import {Link} from "react-router-dom";
function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-Commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/electronics">Electronics</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/fashion">Fashion</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/women">Women</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/jewel">Jewellery</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success mx-1" type="submit">Search</button>
        <Link className="btn btn-outline-primary mx-1" type="button" to="/login">Login</Link>
        <Link className="btn btn-outline-primary mx-1" type="button" to="/signup">SignUp</Link>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar