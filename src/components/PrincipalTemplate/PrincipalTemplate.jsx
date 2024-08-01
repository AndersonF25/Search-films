import React, { useEffect, useState } from "react";
import "./principalTemplate.scss";
import getMovies from "../../hooks/useGetMovies";
import NavBar from "../NavBar/NavBar";
import { CiCirclePlus } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const PrincipalTemplate = () => {
  const [principalTemplate, setPrincipalTemplate] = useState([]);
  const [movieCard, setMovieCard] = useState([]);

  useEffect(() => {
    getMovies("upcoming").then((data) =>
      setPrincipalTemplate(data.slice(0, 1))
    );
  }, []);

  useEffect(() => {
    getMovies("upcoming").then((data) => setMovieCard(data));
  }, []);

  return (
    <>
      {principalTemplate.map((item) => (
        <section
          className="container-principal"
          key={item.id}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${item.backdrop_path})`,
          }}
        >
          <NavBar />
          <div className="overlay"></div>
          <section className="content">
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

            <div className="slides">
              <h2>Lançamentos</h2>
              <Swiper
                slidesPerView={7}
                navigation={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                breakpoints={{
                  360: { slidesPerView: 2 },
                  400: { slidesPerView: 2 },
                  480: { slidesPerView: 2 },
                  640: { slidesPerView: 3 },
                  768: { slidesPerView: 4 },
                  1024: { slidesPerView: 5 },
                  1536: { slidesPerView: 7 },
                }}
              >
                {movieCard.map((movie) => (
                  <SwiperSlide key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>
                      <img
                        className="img-slide"
                        src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                        alt={movie.title}
                      />
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </section>
      ))}
    </>
  );
};

export default PrincipalTemplate;
