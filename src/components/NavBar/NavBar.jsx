import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./style.scss";
import { useState } from "react";
import ModalInput from "../ModalSearch/ModalInput";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const [openModalSearch, setOpenModalSearch] = useState(false);
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
        <input
          type="text"
          placeholder="Buscar filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" onClick={() => setOpenModalSearch(true)}>
          <BiSearchAlt2 />
        </button>

        {openModalSearch ? <ModalInput /> : null}
      </form>
    </div>
  );
};

export default NavBar;
