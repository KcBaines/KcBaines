import React from 'react'; // Import React to use JSX and component functionality
import '../styles/MediaTypeSelector.css'; // Import CSS stylesheet for styling the MediaTypeSelector component

// Functional component to render a media type selector dropdown
const MediaTypeSelector = ({ mediaType, setMediaType }) => {
  return (
    // Dropdown menu for selecting media type
    <select 
      value={mediaType} // Set the value of the dropdown to the current media type
      onChange={(e) => setMediaType(e.target.value)} // Update mediaType state when an option is selected
    >
      {/* Dropdown options for different media types */}
      <option value="all">All</option> {/* Option to select all media types */}
      <option value="movie">Movie</option> {/* Option for movies */}
      <option value="podcast">Podcast</option> {/* Option for podcasts */}
      <option value="music">Music</option> {/* Option for music */}
      <option value="audiobook">Audiobook</option> {/* Option for audiobooks */}
      <option value="shortFilm">Short Film</option> {/* Option for short films */}
      <option value="tvShow">TV Show</option> {/* Option for TV shows */}
      <option value="software">Software</option> {/* Option for software */}
      <option value="ebook">eBook</option> {/* Option for eBooks */}
    </select>
  );
};

export default MediaTypeSelector; // Export the MediaTypeSelector component for use in other parts of the application
