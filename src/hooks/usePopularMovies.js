import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const popularMovie = useSelector((store) => store.movies.popularMovies);
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=3",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popularMovie && popularMovies();
  }, []);
};

export default usePopularMovies;
