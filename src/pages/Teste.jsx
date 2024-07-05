import React, { useEffect, useState } from "react";
import getPopularMovies from "../hooks/useGetMovies";

const Teste = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies("top_rated").then((data) => setMovies(data));
  }, []);

  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
};

export default Teste;
