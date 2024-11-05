import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">
              {/* Insert your logo image here */}
              <img src="path_to_your_logo_image" alt="logo" />
              <h1>Daniel Lopez</h1>
            </div>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/about" className="nav-link">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Blog" className="nav-link">Blog</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;