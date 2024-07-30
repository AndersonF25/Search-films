import React, { useEffect, useState } from "react";

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=pt-BR&page=2&region=brazil",
        {
          headers: {
            accept: "application/json",
          },
        }
      );
      const data = response.json();

      setMovies(data.results);
    };
    fecthData();
  }, [setMovies]);

  return (
    <div>
      {movies?.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};

export default Movies;
