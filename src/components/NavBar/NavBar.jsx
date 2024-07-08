import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie } from "react-icons/bi";

import "./style.scss";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;
    navigate(`/search?q=${search}`);
    setSearch("");

    setTimeout(() => {
      setOpenInput(false);
    }, 1200);
  };

  return (
    <div className="container-nav">
      <Link to="/" className="h2">
        <BiCameraMovie />
        Movie Lib
      </Link>
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
    </div>
  );
};

export default NavBar;
