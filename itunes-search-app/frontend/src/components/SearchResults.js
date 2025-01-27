import React from "react"; // Import React to use JSX and component functionality
import "../styles/SearchResults.css"; // Import CSS stylesheet for styling the SearchResults component

function SearchResults({ results, addFavourite }) {
  return (
    <div>
      <h2>Results</h2> {/* Heading for the search results section */}
      <div className="results-list">
        {/* Map over the results array and render each result item */}
        {results.map((result) => (
          <div key={result.trackId} className="result-item">
            {/* Display the artwork image of the result */}
            <img 
              src={result.artworkUrl100} 
              alt={result.collectionName} 
            />
            {/* Display the collection name of the result */}
            <p>{result.collectionName}</p>
            {/* Display the artist name of the result */}
            <p>{result.artistName}</p>
            {/* Button to add the result to favourites */}
            <button
              className="add-favourite-button" // Apply CSS class for styling
              onClick={() => addFavourite(result)} // Call addFavourite function with the result as argument
            >
              Add to Favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults; // Export the SearchResults component for use in other parts of the application
