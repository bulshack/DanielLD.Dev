// src/components/NavBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './NavBar.css';

const BinaryNavLink = ({ to, children, onClick }) => {
  const [displayText, setDisplayText] = useState(children);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();
  const timersRef = useRef([]);

  // Function to generate a random binary digit (0 or 1)
  const randomBinary = () => (Math.random() > 0.5 ? '0' : '1');

  // Function to generate a random character
  const randomCharacter = () => {  
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    return characters.charAt(Math.floor(Math.random() * characters.length));
  };

  const handleAnimation = () => {
    if (isAnimating) return; // Prevent multiple animations
    setIsAnimating(true);
    setProgress(0); // Reset progress

    const originalText = children;
    const textArray = originalText.split('');
    let animatedText = [...textArray];
    setDisplayText(animatedText.join(''));

    // Define animation parameters
    const totalFlips = 6; // Number of times each character flips
    const flipIntervalTime = 100; // Time between flips (ms)
    const totalDuration = flipIntervalTime * totalFlips; // Total flip duration

    // Start flipping all characters simultaneously
    let flipCount = 0;
    const flipInterval = setInterval(() => {
      flipCount += 1;

      // Update all characters with random binary or characters
      animatedText = animatedText.map((char, index) => {
        // Conditional transformation based on text length
          return randomBinary();   
      });

      setDisplayText(animatedText.join(''));

      if (flipCount >= totalFlips) {
        clearInterval(flipInterval);
        // Revert to original characters
        animatedText = textArray.map((char) => char);
        setDisplayText(animatedText.join(''));

        // Complete progress bar
        setProgress(100);

        // Navigate after a slight delay to ensure progress bar completion
        setTimeout(() => {
          setIsAnimating(false);
          navigate(to);
          if (onClick) onClick(); // Close the menu if applicable
        }, 300);
      }
    }, flipIntervalTime);

    timersRef.current.push(flipInterval);

    // Progress Bar Animation
    const progressIntervalTime = totalDuration / 100; // Time per 1% increment (ms)
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, progressIntervalTime);

    timersRef.current.push(progressInterval);
  };

  // Cleanup timers on unmount to prevent memory leaks
  useEffect(() => {
    return () => {
      timersRef.current.forEach((timer) => clearInterval(timer));
      timersRef.current.forEach((timer) => clearTimeout(timer));
    };
  }, []);

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `nav-link ${isActive ? 'active' : ''} ${isAnimating ? 'binary' : ''}`
      }
      onClick={(e) => {
        handleAnimation();
        // Prevent default navigation to control timing
        e.preventDefault();
      }}
    >
      {displayText}
      {isAnimating && <div className="progress-bar" style={{ width: `${progress}%` }}></div>}
    </NavLink>
  );
};

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/resume', label: 'Resume' },
    { path: '/contact', label: 'Contact' },
    { path: '/blog', label: 'Blog' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main Navigation">
      <div className="navbar-container">
        <div className="navbar-brand">
          <span className="logo-text">Daniel Lopez</span>
          <span className="logo-accent">.dev</span>
        </div>

        <button
          className={`menu-toggle ${menuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <ul className={`navbar-nav ${menuOpen ? 'show' : ''}`}>
          {navItems.map((item, index) => (
            <li key={index} className="nav-item">
              <BinaryNavLink to={item.path} onClick={closeMenu}>
                {item.label}
              </BinaryNavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
