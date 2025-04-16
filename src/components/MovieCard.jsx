import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviePosterId, className }) => {
  return (
    <div className={`w-42 ${className}`}>
      <img src={IMG_CDN_URL + moviePosterId} alt="movie card" />
    </div>
  );
};

export default MovieCard;
