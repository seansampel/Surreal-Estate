import React from 'react';
import logo from '../components/FAVPNG_logo.PNG';

import '../styles/navbar.css';

const Navbar = props => {
  return (
    <div className="Nav">
      <form>
        <img src={logo} className="logo" />;
        <ul>
          <link className="item" to="item">
            View Properties
          </link>
          <br />
          <link className="item" to="item">
            Add Properties
          </link>
        </ul>
        <button>View</button>
        <br />
        <button>Add</button>
      </form>
    </div>
  );
};

export default Navbar;
