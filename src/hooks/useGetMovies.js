import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY;

const getMovies = async (query) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${query}`,
    {
      params: {
        api_key: apiKey,
        language: "pt-BR",
      },
    }
  );

  return response.data.results;
};

export default getMovies;
