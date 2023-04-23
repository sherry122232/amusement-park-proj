import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Navbar.css';
import '../css/Footer.css';

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          Home
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link to="/parks-tickets" className="navbar-link">
              Parks&Tickets
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/shops" className="navbar-link">
              Shops
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/services" className="navbar-link">
              Services
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/things-to-do" className="navbar-link">
              Things to do
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/places-to-stay" className="navbar-link">
              Places to stay
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/cart" className="navbar-link">
             Shopping cart
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contacts
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
