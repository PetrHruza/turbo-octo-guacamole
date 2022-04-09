import React, { useEffect } from "react";

//5df036fb

const API_URL = "http://www.omdbapi.com?apikey=5df036fb";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Iron man");
  }, []);

  return <h1>Movie DB App</h1>;
};

export default App;
