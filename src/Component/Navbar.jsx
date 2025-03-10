import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="w-3/12 mt-5 md:w-full">
                <div className="drop-shadow-md bg-white h-full left-menu py-3">
                    <ul>
                        <li className="my-1">
                            <a href="#" className="hover:bg-purple-900 hover:text-white text-black block px-5 sm:px-3 py-2.5">Home</a>
                        </li>
                        <li className="my-1">
                            <a href="#" className="hover:bg-purple-900 hover:text-white text-black block px-5 sm:px-3 py-2.5">Shows</a>
                        </li>
                        <li className="my-1">
                            <a href="#" className="hover:bg-purple-900 hover:text-white text-black block px-5 sm:px-3 py-2.5">About Us</a>
                        </li>
                        <li className="my-1">
                            <a href="#" className="hover:bg-purple-900 hover:text-white text-black block px-5 sm:px-3 py-2.5">About Us</a>
                        </li>
                        <li className="my-1">
                            <a href="#" className="hover:bg-purple-900 hover:text-white text-black block px-5 sm:px-3 py-2.5">My Account</a>
                        </li>
                        <li className="my-1">
                            <a href="#" className="hover:bg-purple-900 hover:text-white text-black block px-5 sm:px-3 py-2.5">Log In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;