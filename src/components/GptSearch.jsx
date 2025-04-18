import React, { useState } from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { SIGNUP_BACKGROUND } from "../utils/constants";
import { useSelector } from "react-redux";
import Shimmer from "./Shimmer";

const GptSearch = () => {
  const { moviesNames } = useSelector((store) => store.gpt);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className=" fixed inset-0">
        <img
          className="w-full h-screen object-cover opacity-90 -z-10"
          alt="background"
          src={SIGNUP_BACKGROUND}
        />
      </div>
      <div className="relative z-10">
        <GptSearchBar setIsLoading={setIsLoading} />
        {isLoading ? <Shimmer /> : <GptSuggestions />}
      </div>
    </div>
  );
};

export default GptSearch;
