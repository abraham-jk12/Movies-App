import React from "react";
import "./MovieCard.css";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <img
        src={movie.image?.medium || "https://via.placeholder.com/210x295"}
        alt={movie.name}
      />
      <h3>{movie.name}</h3>
      <p>Type: {movie.type.toLowerCase()}</p>
      <p>
        Release Year: {movie.premiered ? movie.premiered.split("-")[0] : "N/A"}
      </p>
      <span className="like">&#x2661;</span>
    </div>
  );
}

export default MovieCard;
