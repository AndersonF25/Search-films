import './style.scss'
import PropTypes from 'prop-types'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MovieTemplate = ({ movie, showLink = true }) => {

    return (
        <div className='container-movie-template'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
            <h2>{movie.title}</h2>
            <p>
                <FaStar /> {movie.vote_average.toFixed(1)}
            </p>
            {showLink && (
                <Link
                    className='button-template'
                    to={`/movie/${movie.id}`}>Detalhes</Link>
            )}

        </div>
    )
}

MovieTemplate.propTypes = {
    movie: PropTypes.any,
    showLink: PropTypes.bool,
    initialURL: PropTypes.string
}



export default MovieTemplate