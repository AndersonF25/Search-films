import { FaStar } from "react-icons/fa";
import "./style.scss";
import PropTypes from "prop-types";

const MovieTemplate = ({ movie }) => {
  return (
    <a href={`movie/${movie.id}`} className="link">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />

      <h2>{movie.title}</h2>
      {movie.vote_average === 0 ? null : (
        <p>
          <FaStar color="yellow" size={20}/>
          {movie.vote_average.toFixed(1)}
        </p>
      )}
    </a>
  );
};

MovieTemplate.propTypes = {
  movie: PropTypes.any,
};

export default MovieTemplate;
