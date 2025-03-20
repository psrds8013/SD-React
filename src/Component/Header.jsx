import React from "react";
import Navbar from "./Navbar";
import logoWhite from "../assets/logo_white.png";

const Header = () => {
    return(
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">
                <img className="logo d-flex align-items-center me-auto" src={logoWhite} alt="Logo"/>
                <Navbar/>
            </div>
        </header>
    )
};
export default Header;