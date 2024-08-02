import "./style.scss";
import { useState, useEffect } from "react";
import MovieTemplate from "../../components/MovieTemplate/MovieTemplate";
import { BiArrowFromBottom } from "react-icons/bi";
import getMovies from "../../hooks/useGetMovies";
import CategoryFilms from "../../components/CategoryFilms/CategoryFilms";
import PrincipalTemplate from "../../components/PrincipalTemplate/PrincipalTemplate";
import { Swiper, SwiperSlide } from "swiper/react";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [category, setCategory] = useState("popular");

  const initialURL = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    getMovies(category).then((data) => setMovies(data));
  }, [category]);

  const handleFromTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-home">
      <PrincipalTemplate />
      <div className="container-category">
        <CategoryFilms category={category} setCategory={setCategory} />
      </div>
      <h2 className="title-home">All films</h2>

      <button
        onClick={handleFromTop}
        title="voltar ao topo"
        className="btn-from-top"
      >
        <BiArrowFromBottom />
      </button>
      <div className="movies-container">
        <Swiper
          slidesPerView={6}
          navigation={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          breakpoints={{
            350: { slidesPerView: 1 },
            440: { slidesPerView: 1 },
            540: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            890: { slidesPerView: 2 },
            1040: { slidesPerView: 3 },
            1350: { slidesPerView: 5 },
            1750: { slidesPerView: 6 },
          }}
        >
          {movies.length > 0 &&
            movies.map((movie) => (
              <SwiperSlide key={movie.id}>
                <MovieTemplate
                  key={movie.id}
                  movie={movie}
                  initialURL={initialURL}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Home;
