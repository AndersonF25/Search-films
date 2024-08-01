import { BiCameraMovie } from "react-icons/bi";
import "./initialPage.scss";
import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
import notebook from "../../assets/notebook.png";

const InitialPage = () => {
  const navigate = useNavigate();

  return (
    <section className="container-init">
      <div className="header">
        <h1>
          <BiCameraMovie /> Movie Lib
        </h1>
      </div>
      <div className="content">
        <div className="overflow"></div>
        <div className="continue">
          <h2>Welcome to your movie search engine</h2>
          <button className="btn-continue" onClick={() => navigate("/home")}>
            continue <LiaArrowRightSolid className="arrow" />
          </button>
        </div>

        <div className="notebook">
          <img src={notebook} alt="" />
        </div>
      </div>
    </section>
  );
};

export default InitialPage;
