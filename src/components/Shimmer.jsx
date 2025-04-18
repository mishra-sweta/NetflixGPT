import React from "react";

const Shimmer = () => {
  const shimmerRows = Array(4).fill(0);
  const shimmerCards = Array(6).fill(0); // 10 cards per row

  return (
    <div className="p-4 space-y-8 bg-black/80 m-4">
      {shimmerRows.map((_, rowIndex) => (
        <div key={rowIndex}>
          <div className="h-6 bg-gray-700 w-40 mb-4 rounded"></div>
          <div
            className="flex space-x-4 overflow-x-scroll"
            style={{
              overflowX: "scroll",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {shimmerCards.map((_, cardIndex) => (
              <div
                key={cardIndex}
                className="w-30 md:w-48 h-64 bg-gray-800 animate-pulse rounded"
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
