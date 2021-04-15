import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import houselogo from '../houselogo.png';

const Navbar = (props) => (

  <div className="navbar">
    <img src={houselogo} alt="house-logo" />
    <h1 alt="site-name">Surreal Estate</h1>
    <ul className="nav">
      <Link className="nav-item" to="/">
        View Properties
      </Link>
      <Link className="nav-item" to="add-property">
        Add Property
      </Link>
    </ul>
  </div>
);

export default Navbar;
