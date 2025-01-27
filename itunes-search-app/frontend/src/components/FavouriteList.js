import React from 'react'; // Import React to use JSX and component functionality

// Functional component to display a list of favourite items
function FavouriteList({ favourites, removeFavourite }) {
  return (
    <div>
      <h2>Favourites</h2> {/* Heading for the favourites list */}
      <div className="favourites-list">
        {/* Map over the favourites array and render each favourite item */}
        {favourites.map((fav) => (
          <div key={fav.trackId} className="favourite-item">
            {/* Display the artwork image of the favourite item */}
            <img 
              src={fav.artworkUrl100} 
              alt={fav.collectionName} 
            />
            {/* Display the collection name of the favourite item */}
            <p>{fav.collectionName}</p>
            {/* Display the artist name of the favourite item */}
            <p>{fav.artistName}</p>
            {/* Button to remove the favourite item from the list */}
            <button 
              onClick={() => removeFavourite(fav)} // Call removeFavourite function with the favourite item as argument
            >
              Remove from Favourites
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavouriteList; // Export the FavouriteList component for use in other parts of the application
