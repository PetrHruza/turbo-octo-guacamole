import React, { useEffect } from "react";

import "./App.css";
import SearchIcon from "./search.svg";

//5df036fb

const API_URL = "http://www.omdbapi.com?apikey=5df036fb";

const movie1 = {
  Title: "Iron Man 3",
  Year: "2013",
  imdbID: "tt1300854",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BMjE5MzcyNjk1M15BMl5BanBnXkFtZTcwMjQ4MjcxOQ@@._V1_SX300.jpg",
};

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Iron man");
  }, []);

  return (
    <div className="app">
      <h1>Movie Database</h1>

      <div className="search">
        <input
          placeholder="Search For Movies..."
          value="Superman"
          onChange={() => {}}
        />
        <img src={SearchIcon} alt="Search" onClick={() => {}} />
      </div>
      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>

          <div>
            <img
              src={
                movie1.Poster !== "N/A"
                  ? movie1.Poster
                  : "https://via.placeholder.com/400"
              }
              alt={movie1.Title}
            />
          </div>

          <div>
            <span>{movie1.Type}</span>
            <h3>{movie1.Title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
