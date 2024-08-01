import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import {
  BsWallet2,
  BsGraphUp,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import "./style.scss";
import useFormatCurrency from "../../hooks/useFormatCurrency";

const Movies = () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieById = async (searchURL) => {
    try {
      const response = await axios.get(searchURL);
      setMovie(response.data);
    } catch (error) {
      console.error("Erro ao buscar filme:", error);
    }
  };

  useEffect(() => {
    const searchFromURL = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`;
    getMovieById(searchFromURL);
  }, [id, apiKey]);

  const { formatCurrency } = useFormatCurrency();

  return (
    <div className="container">
      <div className="movie-container">
        <button className="btn-back" onClick={() => navigate("/home")}>
          Voltar
        </button>
        <div className="container-img">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
            alt={movie?.title}
          />
        </div>
        <div className="container-info">
          <div className="info">
            <h1>{movie?.title}</h1>
          </div>
          <div className="info">
            <h3>
              <BsWallet2 className="icon" /> Orçamento :
            </h3>
            {movie?.budget === 0 ? (
              <p>não informado</p>
            ) : (
              <p>{formatCurrency(movie?.budget)}</p>
            )}
          </div>
          <div className="info">
            <h3>
              <BsGraphUp className="icon" /> Receita :
            </h3>
            {movie?.budget === 0 ? (
              <p>não informado</p>
            ) : (
              <p>{formatCurrency(movie?.revenue)}</p>
            )}
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit className="icon" /> Duração :
            </h3>
            {movie?.runtime === 0 ? (
              <p>não informado</p>
            ) : (
              <p>{movie?.runtime} minutos</p>
            )}
          </div>
        </div>
      </div>

      <div className="description">
        <h3>
          <BsFillFileEarmarkTextFill className="icon" /> Descrição
        </h3>
        {movie?.overview === "" ? (
          <p>não informado</p>
        ) : (
          <p>{movie?.overview}</p>
        )}
      </div>
    </div>
  );
};

export default Movies;
