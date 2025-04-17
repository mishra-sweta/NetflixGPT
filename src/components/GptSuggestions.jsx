import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestions = () => {
  const { moviesNames, tmdbResults } = useSelector((store) => store.gpt);
  if (!moviesNames) return null;

  return (
    <div className="p-4, m-4 bg-black/80 text-white ">
      {moviesNames.map((movie, index) => (
        <MovieList key={movie} title={movie} movies={tmdbResults[index]} />
      ))}
    </div>
  );
};

export default GptSuggestions;
