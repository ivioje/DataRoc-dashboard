import React from "react";

const SkeletonLoader = () => {
  return (
    <div className="space-y-4">
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="w-full h-7 bg-gray-200 rounded-md animate-pulse"
        />
      ))}
    </div>
  );
};

export default SkeletonLoader;
