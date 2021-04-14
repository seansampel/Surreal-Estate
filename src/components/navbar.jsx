import React from 'react';
import '../styles/navbar.css';
import houselogo from '../houselogo.png';


const Navbar = (props) => {

  return (
    <div className="navbar">
        <img src={houselogo} alt="house-logo" />
        <h1>Surreal Estate</h1>
        <ul className="navbar-links">
        <li>View Properties</li>
        <li>Add Properties</li>
        </ul>
    </div>
  );
};

export default Navbar;
