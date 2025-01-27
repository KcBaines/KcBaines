import React from "react";
import Image1 from "../components/img/Image1.jpg";
import Image2 from "../components/img/Image2.jpg";
import Image3 from "../components/img/Image3.jpg";
import Image4 from "../components/img/Image4.jpg";
import Image5 from "../components/img/Image5.jpg";
import Image6 from "../components/img/Image6.jpg";
import Image7 from "../components/img/Image7.jpg";
import Image8 from "../components/img/Image8.jpg";
import Image9 from "../components/img/Image9.jpg";
import Image10 from "../components/img/Image10.jpg";
import Series1 from "../components/img/Series1.jpg";
import Series2 from "../components/img/Series2.jpg";
import Series3 from "../components/img/Series3.jpg";
import Series4 from "../components/img/Series4.jpg";
import Series5 from "../components/img/Series5.jpg";
import Series6 from "../components/img/Series6.jpg";
import Series7 from "../components/img/Series7.jpg";
import Series8 from "../components/img/Series8.jpg";
import Series9 from "../components/img/Series9.jpg";
import Series10 from "../components/img/Series10.jpg";
import "../styles/MainContent.css";

const MainContent = () => {
  // Array of movie objects with id, name, and image
  const movies = [
    { id: 1, name: "A Tourist Guide to Love", image: Image1 },
    { id: 2, name: "All Quiet on the Western Front", image: Image2 },
    { id: 3, name: "Seven Kings Must Die", image: Image3 },
    { id: 4, name: "Ice Road", image: Image4 },
    { id: 5, name: "Echoes", image: Image5 },
    { id: 6, name: "Avengers", image: Image6 },
    { id: 7, name: "Midnight Mass", image: Image7 },
    { id: 8, name: "Sweet Girl", image: Image8 },
    { id: 9, name: "Mowgli", image: Image9 },
    { id: 10, name: "The Spiderwick Chronicles", image: Image10 },
  ];

  // Array of series objects with id, name, and image
  const series = [
    { id: 1, name: "Wednesday", image: Series1 },
    { id: 2, name: "The Witcher", image: Series2 },
    { id: 3, name: "Stranger Things", image: Series3 },
    { id: 4, name: "Ratched", image: Series4 },
    { id: 5, name: "Money Heist", image: Series5 },
    { id: 6, name: "The Haunting of Hill House", image: Series6 },
    { id: 7, name: "Sex Education", image: Series7 },
    { id: 8, name: "Dark", image: Series8 },
    { id: 9, name: "You", image: Series9 },
    { id: 10, name: "The Crown", image: Series10 },
  ];

  // Render the main content of movies and series
  return (
    <main>
      <h2 className="movies-heading">Movies</h2>
      <div className="movie-list">
        {/* Map through the movies array to render each Movie component */}
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>

      <h2 className="series-heading">Series</h2>
      <div className="series-list">
        {/* Map through the series array to render each Series component */}
        {series.map((series) => (
          <Series key={series.id} series={series} />
        ))}
      </div>
    </main>
  );
};

// Movie component to display each movie with hover effect
const Movie = ({ movie }) => {
  // State to track hover state
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="movie"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={movie.image} alt={movie.name} />
      {/* Show movie info on hover */}
      {hovered && (
        <div className="movie-info">
          <h3>{movie.name}</h3>
        </div>
      )}
    </div>
  );
};

// Series component to display each series with hover effect
const Series = ({ series }) => {
  // State to track hover state
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="series"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={series.image} alt={series.name} />
      {/* Show series info on hover */}
      {hovered && (
        <div className="series-info">
          <h3>{series.name}</h3>
        </div>
      )}
    </div>
  );
};

export default MainContent;
