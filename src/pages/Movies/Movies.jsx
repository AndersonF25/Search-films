import { useState, useEffect } from "react";
import {  useParams } from "react-router-dom";
import MovieTemplate from "../../components/MovieTemplate/MovieTemplate";
import axios from "axios";
import {
  BsWallet2,
  BsGraphUp,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import "./style.scss";

const Movies = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovies = async (searchURL) => {
    try {
      const response = await axios.get(searchURL);
      setMovie(response.data);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
    }
  };

  useEffect(() => {
    const searchFromURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`;
    getMovies(searchFromURL);
  }, [id, apiKey]);

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
      <div
        className="movie-container"
       
      >
        {movie && (
          <>
            <MovieTemplate movie={movie} showLink={false} />

            <div className="container-info">
              <div className="info">
                <h3>
                  <BsWallet2 className="icon" /> Orçamento:
                </h3>
                <p>{formatCurrency(movie.budget)}</p>
              </div>
              <div className="info">
                <h3>
                  <BsGraphUp className="icon" /> Receita:
                </h3>
                <p>{formatCurrency(movie.revenue)}</p>
              </div>
              <div className="info">
                <h3>
                  <BsHourglassSplit className="icon" /> Duração:
                </h3>
                <p>{movie.runtime} minutos</p>
              </div>
            </div>
            <div className="description">
              <h3>
                <BsFillFileEarmarkTextFill className="icon" /> Descrição
              </h3>
              <p>{movie.overview}</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Movies;
