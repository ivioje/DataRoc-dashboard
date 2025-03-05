import { useModalStore } from '@/store/modal-store';
import { SearchIcon, XIcon } from 'lucide-react';
import React from 'react';

const PopoverComponent = () => {
const { close, inputValue, setInputValue } = useModalStore();

  const handleGenerate = () => {
    console.log('Generating metric:', inputValue);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider">NEW AI METRIC</h2>
          <button 
            onClick={close}
            className="text-gray-900 hover:text-gray-600 transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>

        {/* Search Input */}
        <div className="p-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
             <SearchIcon size={20} />
            </div>
            <input 
              type="search"
              placeholder="What metric would you like to measure?"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full pl-10 pr-24 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:bg-cyan-50 focus:border-cyan-500 outline-none text-sm"
            />
            {inputValue && (
              <button 
                onClick={() => setInputValue('')}
                className="absolute right-28 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-600"
              >
                  <XIcon size={20} />
              </button>
            )}
            <button 
              onClick={handleGenerate}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800 transition-colors"
            >
              Generate
            </button>
          </div>

          {/* Note Section */}
          <div className="mt-4 bg-gray-50 p-3 rounded-md">
            <p className="text-xs text-gray-500 leading-normal text-justify">
              <span className="font-semibold">Note:</span> AI can analyze user behavior to create more meaningful segments based on real actions, not just demographics. For example, it can group users based on their propensity to convert, engagement patterns, or interaction with specific features—giving you a clearer picture of what drives conversion and loyalty.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopoverComponent;