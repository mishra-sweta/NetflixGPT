import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import client from "../utils/groq";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langConfig = useSelector((store) => store.config.lang);
  const searchInput = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );
    const json = await data.json();
    // const exactMatches = json.results.filter(
    //   (item) => item.title.toLowerCase() === movie.toLowerCase()
    // );
    return json.results;
  };

  const handleSearchButton = async (e) => {
    const userQuery = searchInput.current?.value;
    if (!userQuery) return;

    try {
      const response = await client.chat.completions.create({
        messages: [
          {
            role: "system",
            content:
              "You are a helpful movie recommendation assistant. Given a user's mood, genre preference, or search description, return exactly 5 movie titles but full original english titles separated by commas — no explanations, just the movie names.",
          },
          {
            role: "user",
            content: `Suggest 5 movies based on: "${userQuery}"`,
          },
        ],
        model: "llama3-8b-8192",
      });

      const moviesNames = response.choices[0]?.message?.content.split(",");
      console.log(moviesNames);

      const data = moviesNames.map((movie) => searchMovieTMDB(movie.trim()));
      const tmdbResults = await Promise.all(data);

      dispatch(
        addGptMovieResults({
          moviesNames: moviesNames,
          tmdbResults: tmdbResults,
        })
      );

      console.log(tmdbResults);
    } catch (err) {
      console.error("Groq API Error:", err);
      alert("Error fetching movie suggestions. Check your API key or quota.");
    }
  };

  return (
    <div
      className="p-[10%] flex justify-center"
      onSubmit={(e) => e.preventDefault()}
    >
      <form className="text-white bg-black p-2 w-1/2 grid grid-cols-12 rounded">
        <input
          ref={searchInput}
          className="border p-2 bg-white mx-2 col-span-9 text-black"
          type="text"
          placeholder={lang[langConfig]?.gptSearchPlaceholder}
        />
        <button
          className="col-span-3 p- mx-2 bg-red-800 rounded cursor-pointer"
          onClick={handleSearchButton}
        >
          {lang[langConfig]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
