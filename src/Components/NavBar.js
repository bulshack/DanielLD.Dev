import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/about', label: 'About' },
        { path: '/portfolio', label: 'Portfolio' },
        { path: '/resume', label: 'Resume' },
        { path: '/contact', label: 'Contact' },
        { path: '/blog', label: 'Blog' },
    ];

    return (
        <nav className="navbar" aria-label="Main Navigation">
            <div className="logo">
                <img src="path_to_your_logo_image" alt="Daniel Lopez Logo" />
                <h1>Daniel Lopez</h1>
            </div>
            <ul className="navbar-nav">
                {navItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <NavLink 
                            to={item.path} 
                            className="nav-link" 
                            activeClassName="active"
                            exact
                        >
                            {item.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavBar;