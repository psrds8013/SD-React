import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav id="navmenu" className="navmenu">
            <ul>
                <li><a href="#hero" className="active">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#services">Contact Us</a></li>
                <li><a href="#portfolio">Login</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
    );
  };
export default Navbar;