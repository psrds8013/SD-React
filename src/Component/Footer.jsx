import React from "react";
import logoWhite from "../assets/logo_white.png";

const Footer = () => {
    return(
        <footer id="footer" className="footer dark-background">
        <div className="container">
          <img className="sitename" src={logoWhite} alt="Logo"/>
          <div className="social-links d-flex justify-content-center">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""><i className="bi bi-skype"></i></a>
            <a href=""><i className="bi bi-linkedin"></i></a>
          </div>
          <div className="copyright">
            <span>© 2007 - 2025 by </span> <strong className="px-1 sitename">Second Degree </strong> <span>All Rights Reserved</span>
          </div>
          <div className="credits">
          </div>
        </div>
      </footer>
    
    )
};
export default Footer;