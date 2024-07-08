import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MovieTemplate from "../../components/MovieTemplate/MovieTemplate";
import axios from "axios";
import "./style.scss";

const Search = () => {
  const inititalURL = "https://image.tmdb.org/t/p/w500";

  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();

  const getSearchedMovies = async (searchURL) => {
    try {
      const response = await axios.get(searchURL, {
        params: {
          language: "pt-BR",
        },
      });
      setMovies(response.data.results);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  useEffect(() => {
    const searchFromURL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;
    getSearchedMovies(searchFromURL);
  }, [query, apiKey]);

  return (
    <>
      <div className="container-home">
        <button className="btn-go-back" onClick={() => navigate(-1)}>
          Voltar
        </button>
        <h2 className="title-home">Resultados para: {query}</h2>

        <div className="movies-container">
          {movies.length > 0 &&
            movies.map((movie) => (
              <MovieTemplate
                key={movie.id}
                movie={movie}
                inititalURL={inititalURL}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default Search;
