import { useNavigate } from "react-router-dom";
import "./searchBar.scss";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <div className="container-form">
      <form className="nav-items" type="submit" onSubmit={handleSubmit}>
        <label for="text" className="label">
          <input
            type="search"
            id="text"
            className="input"
            value={search}
            autoComplete="off"
            onChange={(e) => setSearch(e.target.value)}
          />
          <FaSearch className="icon" type="submit" />
        </label>
      </form>
    </div>
  );
};

export default SearchBar;
