import React, { useEffect, useState } from 'react'; // Import React, useEffect, and useState hooks
import SearchBar from './components/SearchBar'; // Import the SearchBar component
import SearchResults from './components/SearchResults'; // Import the SearchResults component
import FavouriteList from './components/FavouriteList'; // Import the FavouriteList component
import axios from 'axios'; // Import axios for making HTTP requests
import './App.css'; // Import CSS stylesheet for styling the App component

function App() {
  // State to store search results
  const [results, setResults] = useState([]);
  // State to store list of favourite items
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    // Function to fetch a JWT token from the server
    const fetchToken = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/token'); // Send GET request to fetch token
        const token = response.data.token; // Extract token from response
        localStorage.setItem('token', token); // Store token in local storage
        console.log('Token fetched and stored:', token); // Debugging line to confirm token retrieval
      } catch (error) {
        console.error('Error fetching token', error); // Log any errors encountered
      }
    };
    fetchToken(); // Call the function to fetch the token
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Function to add an item to the favourites list
  const addFavourite = (item) => {
    if (!favourites.includes(item)) { // Check if item is not already in favourites
      setFavourites([...favourites, item]); // Add item to the favourites list
    }
  };

  // Function to remove an item from the favourites list
  const removeFavourite = (item) => {
    setFavourites(favourites.filter(fav => fav.trackId !== item.trackId)); // Remove item by filtering out its trackId
  };

  return (
    <div className="App">
      <h1>iTunes Search App</h1> {/* Main heading for the application */}
      <SearchBar setResults={setResults} /> {/* Render SearchBar component and pass setResults function as prop */}
      <SearchResults results={results} addFavourite={addFavourite} /> {/* Render SearchResults component with results and addFavourite function */}
      <FavouriteList favourites={favourites} removeFavourite={removeFavourite} /> {/* Render FavouriteList component with favourites and removeFavourite function */}
    </div>
  );
}

export default App; // Export the App component for use in other parts of the application
