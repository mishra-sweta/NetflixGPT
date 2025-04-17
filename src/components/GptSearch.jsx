import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";
import { SIGNUP_BACKGROUND } from "../utils/constants";

const GptSearch = () => {
  return (
    <div>
      <img
        className="w-full h-screen object-cover absolute top-0 left-0 -z-10 opacity-90 fixed"
        alt="background"
        src={SIGNUP_BACKGROUND}
      />
      <GptSearchBar />
      <GptSuggestions />
    </div>
  );
};

export default GptSearch;
