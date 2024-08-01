import { Link } from "react-router-dom";

import { BiCameraMovie } from "react-icons/bi";

import "./style.scss";
import DarkMode from "../DarkMode/DarkMode";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="container-nav">
      <Link to="/home" className="h2">
        <BiCameraMovie />
        Movie Lib
      </Link>
      <SearchBar />
      <DarkMode />
    </div>
  );
};

export default NavBar;
