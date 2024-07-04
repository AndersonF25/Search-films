import "./style.scss";
import { useState, useEffect } from "react";
import axios from "axios";
import MovieTemplate from "../../components/MovieTemplate/MovieTemplate";
import { BiArrowFromBottom } from "react-icons/bi";

const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const inititalURL = "https://image.tmdb.org/t/p/w500";

  const getPopularMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular",
      {
        params: {
          api_key: apiKey,
          language: "pt-BR",
        },
      }
    );

    setTopMovies(response.data.results);
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  const handleFromTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container-home">
      <h2 className="title-home">Filmes Populares</h2>
      <button
        onClick={handleFromTop}
        title="voltar ao topo"
        className="btn-from-top"
      >
        <BiArrowFromBottom />
      </button>
      <div className="movies-container">
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <MovieTemplate
              key={movie.id}
              movie={movie}
              inititalURL={inititalURL}
            />
          ))}
      </div>
    </div>
  );
};

export default Home;
