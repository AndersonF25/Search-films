import "./style.scss";
import { useState, useEffect } from "react";
import MovieTemplate from "../../components/MovieTemplate/MovieTemplate";
import { BiArrowFromBottom } from "react-icons/bi";
import getMovies from "../../hooks/useGetMovies";


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
      <h2 className="title-home">Filmes Populares</h2>
      <div>
        <label>
          <input
            type="radio"
            value="popular"
            checked={category === "popular"}
            onChange={() => setCategory("popular")}
          />
          Popular
        </label>
        <label>
          <input
            type="radio"
            value="now_playing"
            checked={category === "now_playing"}
            onChange={() => setCategory("now_playing")}
          />
          Now Playing
        </label>
        <label>
          <input
            type="radio"
            value="top_rated"
            checked={category === "top_rated"}
            onChange={() => setCategory("top_rated")}
          />
          Top Rated
        </label>
        <label>
          <input
            type="radio"
            value="upcoming"
            checked={category === "upcoming"}
            onChange={() => setCategory("upcoming")}
          />
          Upcoming
        </label>
      </div>

      <button
        onClick={handleFromTop}
        title="voltar ao topo"
        className="btn-from-top"
      >
        <BiArrowFromBottom />
      </button>
      <div className="movies-container">
        {movies.length > 0 &&
          movies.map((movie) => (
            <MovieTemplate
              key={movie.id}
              movie={movie}
              initialURL={initialURL}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
