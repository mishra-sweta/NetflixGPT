import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useupcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  const gptSearch = useSelector((store) => store.gpt.toggleGptSearch);
  return (
    <div className="relative w-full h-full overflow-x-hidden text-sm md:text-lg ">
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <div className="fixed inset-0 overflow-y-auto overflow-x-hidden">
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
    </div>
  );
};

export default Browse;
