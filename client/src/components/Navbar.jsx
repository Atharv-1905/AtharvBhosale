// client/src/components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom'; // <-- IMPORT NavLink

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-logo">
        Atharv
      </NavLink>
      <ul className="nav-menu">
        <li className="nav-item">
          {/* Use NavLink here */}
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          {/* Use NavLink here */}
          <NavLink 
            to="/projects" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Projects
          </NavLink>
        </li>
        <li className="nav-item">
          {/* Use NavLink here */}
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
