import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieTrailer } from "../utils/moviesSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const movieVideos = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      const filteredVideos = json.results.filter(
        (video) => video.type === "Trailer"
      );
      const trailer = filteredVideos.length
        ? filteredVideos[0]
        : json.results[0];

      dispatch(addMovieTrailer(trailer));
    } catch (err) {
      console.error("Failed to fetch trailer", err);
    }
  };

  useEffect(() => {
    if (!movieId) return;
    movieVideos();
  }, [movieId]); // ✅ this line ensures it runs only when movieId changes
};

export default useGetMovieTrailer;
