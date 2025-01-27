import React, { useState } from 'react'; // Import React and useState hook for managing component state
import axios from 'axios'; // Import Axios for making HTTP requests
import '../styles/SearchBar.css'; // Import CSS stylesheet for styling the SearchBar component

function SearchBar({ setResults }) {
  // State to store the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');
  // State to store the selected media type
  const [mediaType, setMediaType] = useState('all');

  // Function to handle the search operation
  const search = async () => {
    try {
      // Retrieve the JWT token from local storage
      const token = localStorage.getItem('token');
      console.log('Using token:', token); // Log the token for debugging purposes

      // Make a GET request to the backend API with search parameters and authorization header
      const response = await axios.get(`http://localhost:5000/api/search`, {
        params: { term: searchTerm, media: mediaType },
        headers: { Authorization: `Bearer ${token}` }, // Include the token in the Authorization header
      });

      // Update the parent component with the search results
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching data', error); // Log any errors encountered during the request
    }
  };

  return (
    <div>
      {/* Input field for the user to enter the search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Update searchTerm state on input change
        placeholder="Search for media" // Placeholder text for the input field
      />
      {/* Dropdown to select the type of media */}
      <select value={mediaType} onChange={(e) => setMediaType(e.target.value)}>
        <option value="all">All</option> {/* Option to search all media types */}
        <option value="movie">Movie</option> {/* Option for movies */}
        <option value="podcast">Podcast</option> {/* Option for podcasts */}
        <option value="music">Music</option> {/* Option for music */}
        <option value="audiobook">Audiobook</option> {/* Option for audiobooks */}
        <option value="shortFilm">Short Film</option> {/* Option for short films */}
        <option value="tvShow">TV Show</option> {/* Option for TV shows */}
        <option value="software">Software</option> {/* Option for software */}
        <option value="ebook">eBook</option> {/* Option for eBooks */}
      </select>
      {/* Button to trigger the search operation */}
      <button onClick={search}>Search</button>
    </div>
  );
}

export default SearchBar; // Export the SearchBar component for use in other parts of the application
