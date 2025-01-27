// Import React library to use React components
import React from 'react';

// Import Netflix logo image
import Logo from '../components/img/logo.png';

// Import CSS styles for the header
import '../styles/Header.css';

// Functional component for the Header
const Header = () => {
  return (
    <header className="header"> {/* Header section */}
      <div className="logo"> {/* Logo section */}
        <img src={Logo} alt="Netflix Logo" /> {/* Netflix logo */}
      </div>
      <nav className="nav-links"> {/* Navigation links section */}
        <a href="/">Home</a>
        <a href="/">Series</a>
        <a href="/">Movies</a>
        <a href="/">Originals</a>
        <a href="/">Recently Added</a>
        <a href="/">My List</a>
      </nav>
      <nav className='nav-links2'> {/* Additional navigation links section */}
        {/* Buttons with icons */}
        <button className="icon-button"><i className="bi bi-search"></i></button> {/* Search button */}
        <button className="icon-button"><i className="bi bi-bell"></i></button> {/* Bell button */}
        <button className="icon-button"><i className="bi bi-person-square"></i></button> {/* Person button */}
      </nav>
    </header>
  );
}

export default Header; // Export Header component for use in other parts of the application
