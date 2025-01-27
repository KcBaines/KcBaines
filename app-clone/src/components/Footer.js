import React from 'react';

// Importing CSS styles specific to the Footer component
import '../styles/Footer.css';

// Functional component for the Footer
const Footer = () => {
  return (
    <footer className="footer"> {/* Footer section */}
      <p>&copy; 2024 Netflix Clone</p> 
      <div className="footer-links"> 
        <a href="/">Privacy</a> 
        <a href="/">Terms</a> 
      </div>
    </footer>
  );
}

export default Footer; // Exporting Footer component as the default export
