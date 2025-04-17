import React from "react";
import MovieCard from "./MovieCard";
import { useEffect, useRef } from "react";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 py-2">
      <h1 className="text-xl md:text-2xl py-3">{title}</h1>
      <div
        className="flex overflow-x-scroll justify-start space-x-4 "
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {movies?.map((movie) => (
          <MovieCard
            moviePosterId={movie?.poster_path}
            key={movie.id}
            className="w-30 md:w-48 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
