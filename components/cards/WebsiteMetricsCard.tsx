import { websiteMetricsData as metricsData } from '@/lib/data';
import { ArrowDown, ArrowUp } from 'lucide-react';
import React from 'react';

const WebsiteMetricCards = () => {
  const getChangeColor = (changeType: string) => {
    return changeType === 'increase' ? 'text-green-500' : 'text-red-500';
  };

  const getChangeIcon = (changeType: string) => {
    if (changeType === 'increase') {
      return (
        <ArrowUp size={18} className="text-lime-500" />
      );
    } else {
      return (
        <ArrowDown size={18} className="text-red-500" />
      );
    }
  };

  return (
    <div className="bg-white rounded-[5px] flex lg:flex-col sm:flex-row flex-col lg:w-[90%] w-full">
      {metricsData.slice(0, 3).map((metric, index) => (
        <div 
          key={index} 
          className='lg:px-6 sm:px-2 w-full lg:py-0 py-3'
        >
          <div className={`lg:py-[18px] py-5 lg:px-0 md:px-5 px-2 ${index === 2 ? 'lg:border-l-0' : 'lg:border-b lg:border-l-0 lg:border-gray-200'}  ${index === 0 ? 'sm:border-b-0' : 'sm:border-l sm:border-b-0 sm:border-gray-200'}  ${index === 2 ? '' : 'border-b border-gray-200'}`}>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600 font-medium text-[12px]">{metric.title}</h3>
              <div className='bg-gray-100 p-1 rounded-full'>{getChangeIcon(metric.changeType)}</div>
            </div>
            
            <div className="mt-2">
              <div className="flex items-end">
                <span className="text-base font-semibold text-gray-800">{metric.value}</span>
                {metric.unit && <span className="ml-1 text-gray-500 text-[12px]">{metric.unit}</span>}
              </div>
              
              <div className="mt-1 flex items-center w-full text-[12px] py-1">
                <span className={`font-medium ${getChangeColor(metric.changeType)}`}>
                  {metric.change}%
                </span>
                <span className="ml-1 text-gray-400">{metric.comparedTo}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WebsiteMetricCards;