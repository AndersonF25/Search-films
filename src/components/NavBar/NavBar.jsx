import { Link, useNavigate } from "react-router-dom";

import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";

import "./style.scss";
import { useEffect, useState } from "react";
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
          className="input-search"
          type="text"
          placeholder="Buscar filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" className="btn">
          <BiSearchAlt2 />
        </button>
        <button onClick={() => setOpenModalSearch(!false)}> abrir modal</button>
      </form>
      {openModalSearch ? (
        <ModalInput
          setOpenModalSearch={setOpenModalSearch}
          openModalSearch={openModalSearch}
          setSearch={setSearch}
          searchText={search}
        />
      ) : null}
    </div>
  );
};

export default NavBar;
