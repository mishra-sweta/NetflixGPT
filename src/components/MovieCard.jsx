import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ moviePosterId, className }) => {
  if (!moviePosterId) return null;
  return (
    <div className={`w-30 md:w-48 ${className}`}>
      <img src={IMG_CDN_URL + moviePosterId} alt="movie card" />
    </div>
  );
};

export default MovieCard;
