import React from "react";
import "./Navbar.css";

function Navbar({ setQuery }) {
  const categories = ["Funny", "Action", "Romance", "WebSeries"];
  return (
    <div className="navbar">
      {categories.map((category) => (
        <button key={category} onClick={() => setQuery(category)}>
          {category} Movie
        </button>
      ))}
    </div>
  );
}

export default Navbar;
