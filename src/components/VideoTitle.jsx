import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-10 md:px-20 space-y-2 absolute text-white pt-[18%] bg-gradient-to-l to-black pointer-events-none">
      <h1 className="text-xl md:text-4xl font-bold">{title}</h1>
      <p className="hidden md:inline-block text-sm w-3/12">{overview}</p>
      <div className="space-x-1 pointer-events-auto">
        <button className="bg-white hover:bg-white/60 rounded p-1.5 px-5 mr-3 text-black text-xs md:text-lg">
          ▷ Play
        </button>
        <button className="hidden md:inline-block bg-gray-600 hover:bg-gray-600/60 rounded p-1.5 px-5 text-white text-xs md:text-lg">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
