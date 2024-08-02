import "./style.scss";
import PropTypes from "prop-types";

const MovieTemplate = ({ movie }) => {
  return (
    <a href={`movie/${movie.id}`} className="link">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
    </a>
  );
};

MovieTemplate.propTypes = {
  movie: PropTypes.any,
};

export default MovieTemplate;
