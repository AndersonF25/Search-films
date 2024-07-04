import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./style.scss";
import { useEffect, useState } from "react";
import ModalInput from "../ModalSearch/ModalInput";
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
  };

  return (
    <div className="container-nav">
      <Link to="/" className="h2">
        <BiCameraMovie />
        Movie Lib
      </Link>

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
        {openInput ? (
          <button onClick={() => setOpenInput(false)}>
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
      </form>
    </div>
  );
};

export default NavBar;
