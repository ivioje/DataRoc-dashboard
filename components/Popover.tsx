import { useModalStore } from '@/store/modal-store';
import { SearchIcon, XIcon } from 'lucide-react';
import React from 'react';
import MetricSelector from './metric/MetricSelector';
import { useMetricStore } from '@/store/metric-store';
import LoadingSpinner from './Spinner';

const PopoverComponent = () => {
const { close } = useModalStore();
  const { 
    searchQuery, setSearchQuery, generateMetrics, loading, selectedMetric, startDataGathering, chartGenerated, generatedMetrics
  } = useMetricStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xl min-h-[250px]">
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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[80%] pl-10 pr-24 mr-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:bg-cyan-50 focus:border-cyan-500 outline-none text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-28 top-1/2 transform -translate-y-1/2 text-gray-900 hover:text-gray-600"
              >
                  <XIcon size={20} />
              </button>
            )}
            <button 
              onClick={generateMetrics}
              disabled={searchQuery === ''}
              className={` ${searchQuery === '' ? 'cursor-not-allowed bg-gray-600': 'cursor-pointer hover:bg-gray-800'} bg-gray-900 h-[43px] w-[85px] text-white px-4 py-3 rounded-md text-sm transition-colors`}
            >
              {!loading && 
                <span className='flex justify-center'>Generate
                </span>
              } 
              {loading && 
                <div className='flex justify-center -mt-2'>
                  <LoadingSpinner />
                  </div>
              }
            </button>
          </div>

          {/* Note Section */}
          {searchQuery === '' &&
          <div className="mt-4 bg-gray-50 p-3 rounded-md">
            <p className="text-xs text-gray-500 leading-normal text-justify">
              <span className="font-semibold">Note:</span> AI can analyze user behavior to create more meaningful segments based on real actions, not just demographics. For example, it can group users based on their propensity to convert, engagement patterns, or interaction with specific features—giving you a clearer picture of what drives conversion and loyalty.
            </p>
          </div>
          }
          {searchQuery && 
            <MetricSelector />
          }
        </div>

        {generatedMetrics && selectedMetric && !(searchQuery === '') &&
          <div className="mt-1 flex justify-end gap-3 w-full p-6">
            <button
              onClick={startDataGathering}
              disabled={selectedMetric?.length === 0}
              className="px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-700"
            >
              Add New Metric(s)
            </button>
          </div>
        }

      </div>
    </div>
  );
};

export default PopoverComponent;