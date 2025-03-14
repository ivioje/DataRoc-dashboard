import React from 'react';
import { useModalStore } from '@/store/modal-store';
import { useMetricStore } from '@/store/metric-store';

import { SearchIcon, XIcon } from 'lucide-react';
import MetricSelector from './metric/MetricSelector';
import LoadingSpinner from './Spinner';
import Image from 'next/image';
import generatingMetricImage from "../assets/ai-metric.gif";

const PopoverComponent = () => {
const { close } = useModalStore();
  const { 
    searchQuery, 
    setSearchQuery, 
    generateMetrics, 
    loading, 
    selectedMetric, 
    startDataGathering, 
    generatedMetrics,
    gatheringData
  } = useMetricStore();

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className={`bg-white rounded-lg shadow-xl w-[95%] md:max-w-xl min-h-[250px] ${gatheringData? 'flex flex-col justify-center':''}`}>
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            NEW AI METRIC
          </h2>
          <button 
            onClick={close}
            className="text-gray-900 hover:text-gray-600 transition-colors"
          >
            <XIcon size={20} />
          </button>
        </div>

      {/**generating metric placeholder */}
      <div className='flex justify-center items-center'>
        {gatheringData && (
          <div className='flex flex-col justify-center p-3'>
            <div className='flex flex-col justify-center'>
              <Image src={generatingMetricImage} alt='metric' className='w-fit h-64' />
              <span className='text-gray-600 my-2'>AI is Gathering Data</span>
            </div>
          </div>
        )}
      </div>
        {/* Search Input */}
        {!gatheringData && (
        <div className="p-6">
          <div className="relative flex items-start sm:flex-row flex-col">
            <div className="absolute inset-y-0 sm:-top-0 -top-12  left-0 pl-3 flex items-center pointer-events-none">
             <SearchIcon size={20} />
            </div>
            <input 
              type="search"
              placeholder="What metric would you like to measure?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {e.key === 'Enter' && searchQuery !== ''? generateMetrics() : null}}
              className="sm:w-[80%] w-full pl-10 pr-24 mr-2 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-cyan-500 focus:bg-cyan-50 focus:border-cyan-500 outline-none text-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute sm:right-28 right-1 sm:top-1/2 top-6 transform -translate-y-1/2 text-gray-900 hover:text-gray-600"
              >
                  <XIcon size={20} />
              </button>
            )}
            <button 
              onClick={generateMetrics}
              disabled={searchQuery === ''}
              className={` ${searchQuery === '' ? 'cursor-not-allowed bg-gray-600': 'cursor-pointer hover:bg-gray-800'} bg-gray-900 h-[43px] w-[85px] text-white px-4 py-3 rounded-md text-sm transition-colors sm:mt-0 mt-2`}
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
        )}

        {!gatheringData && generatedMetrics && selectedMetric && !(searchQuery === '') &&
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