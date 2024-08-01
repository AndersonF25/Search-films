import React, { useEffect, useState } from "react";

import "./principalTemplate.scss";
import getMovies from "../../hooks/useGetMovies";
import NavBar from "../NavBar/NavBar";
import { FaPlay } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";

const PrincipalTemplate = () => {
  const [principalTemplate, setPrincipalTemplate] = useState([]);
  const [movieCard, setMovieCard] = useState([]);

  useEffect(() => {
    getMovies("upcoming").then((data) =>
      setPrincipalTemplate(data.slice(0, 1))
    );
  }, []);

  useEffect(() => {
    getMovies("popular").then((data) => setMovieCard(data));
  }, []);


  return (
    <>
      {principalTemplate.map((item) => (
        <div
          className="container-principal"
          key={item.id}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
          }}
        >
          <NavBar />
          <div className="overlay"></div>
          <div className="content">
            <h1>{item.title}</h1>
            <div className="details">
              <span>Imdb {item.vote_average.toFixed(1)}/10</span>
              <span>{item.release_date.slice(0, 4)}</span>
            </div>
            <div className="play">
              <button className="btn-play">Play</button>
              <button className="btn-fav">
                <CiCirclePlus />
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PrincipalTemplate;
