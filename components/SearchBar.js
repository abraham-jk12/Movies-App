import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ setQuery }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim() !== "") setQuery(input);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>
        <i className="fa fa-search" />
      </button>
    </div>
  );
}

export default SearchBar;
