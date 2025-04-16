import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video px-20 space-y-2 absolute text-white pt-[18%] bg-gradient-to-l to-black pointer-events-none">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-sm w-3/12">{overview}</p>
      <div className="space-x-1 pointer-events-auto">
        <button className="bg-white hover:bg-white/60 rounded p-1.5 px-5 mr-3 text-black ">
          ▷ Play
        </button>
        <button className="bg-gray-600 hover:bg-gray-600/60 rounded p-1.5 px-5 text-white ">
          {" "}
          ⓘ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
