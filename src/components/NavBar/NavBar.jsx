import { Link } from "react-router-dom";

import { BiCameraMovie } from "react-icons/bi";

import "./style.scss";
import DarkMode from "../DarkMode/DarkMode";

const NavBar = () => {
  return (
    <div className="container-nav">
      <Link to="/" className="h2">
        <BiCameraMovie />
        Movie Lib
      </Link>
      <DarkMode />
    </div>
  );
};

export default NavBar;
