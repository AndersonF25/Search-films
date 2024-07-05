import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./style.scss";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [openInput, setOpenInput] = useState(false);
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
          {openInput ? (
            <input
              className="input-search"
              type="text"
              placeholder="Buscar filme"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
            />
          ) : null}
        </form>

        {openInput ? (
          <button
            className="btn-close-input"
            onClick={() => setOpenInput(false)}
          >
            <IoClose />
          </button>
        ) : null}

        <button
          type="submit"
          className="btn"
          onClick={() => setOpenInput(true)}
        >
          <BiSearchAlt2 />
        </button>
      </div>
    </div>
  );
};

export default NavBar;
