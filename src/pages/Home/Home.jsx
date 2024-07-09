import "./style.scss";
import { useState, useEffect } from "react";
import MovieTemplate from "../../components/MovieTemplate/MovieTemplate";
import { BiArrowFromBottom } from "react-icons/bi";
import getMovies from "../../hooks/useGetMovies";
import CategoryFilms from "../../components/CategoryFilms/CategoryFilms";
import SearchBar from "../../components/SearchBar/SearchBar";

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
      <div className="container-category">
        <SearchBar/>
        <CategoryFilms category={category} setCategory={setCategory} />
      </div>
      <h2 className="title-home">All films</h2>

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
