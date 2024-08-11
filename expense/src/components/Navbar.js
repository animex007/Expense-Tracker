import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MoneyTracker</h1>
      <ul className="nav-links">
       
        <li><a href="/sections">LogIn</a></li>
        <li><a href="/about">SignUp</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
