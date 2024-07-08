import "./category.scss";

const CategoryFilms = ({ category, setCategory }) => {
  return (
    <div className="container-radio">
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="popular"
          checked={category === "popular"}
          onChange={() => setCategory("popular")}
        />
        Popular
      </label>
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="now_playing"
          checked={category === "now_playing"}
          onChange={() => setCategory("now_playing")}
        />
        Now Playing
      </label>
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="top_rated"
          checked={category === "top_rated"}
          onChange={() => setCategory("top_rated")}
        />
        Top Rated
      </label>
      <label className="label">
        <input
          className="input-radio"
          type="radio"
          value="upcoming"
          checked={category === "upcoming"}
          onChange={() => setCategory("upcoming")}
        />
        Upcoming
      </label>
    </div>
  );
};

export default CategoryFilms;
