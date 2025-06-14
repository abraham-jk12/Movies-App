import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

const API_URL = "https://api.tvmaze.com/search/shows?q=";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("Home");

  useEffect(() => {
    fetch(`${API_URL}${query}`)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.map((item) => item.show));
      });
  }, [query]);

  return (
    <div className="App">
      <h1 className="title">MOVIE LIST</h1>
      <Navbar setQuery={setQuery} />
      <SearchBar setQuery={setQuery} />
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
