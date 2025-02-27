import React from 'react';

const NewAIMetricCard = () => {
  return (
    <div className="relative w-full h-64 border-2 border-dotted border-gray-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
      <div className="mb-2">
        <svg 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M12 5V19M5 12H19" 
            stroke="#000000" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <p className="text-indigo-500 font-medium tracking-wide uppercase text-sm">New AI Metric</p>
    </div>
  );
};

export default NewAIMetricCard;