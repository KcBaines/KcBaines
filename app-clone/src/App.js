import React from 'react';

// Importing components from their respective files
import Header from './components/Header'; // Importing the Header component
import MainContent from './components/MainContent'; // Importing the MainContent component
import Footer from './components/Footer'; // Importing the Footer component

// Importing CSS styles for the App component
import './App.css';

// Functional component for the main App
function App() {
  return (
    <div className="App"> {/* Main App container */}
      <Header /> {/* Rendering the Header component */}
      <MainContent /> {/* Rendering the MainContent component */}
      <Footer /> {/* Rendering the Footer component */}
      {/* Link to the original Netflix website */}
      <p style={{ textAlign: 'center' }}>
        <a href="https://www.netflix.com" target="_blank" rel="noopener noreferrer">Original Netflix Website</a>
      </p>
    </div>
  );
}

export default App; // Exporting the App component as the default export
