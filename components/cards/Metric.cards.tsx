import React from 'react';
import { websiteMetricsData as metricsData } from '@/lib/data';
import { ArrowDown, ArrowUp } from 'lucide-react';

const MetricCard = () => {
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
    <div className=" rounded-[5px] flex items-start w-full">
      {metricsData.slice(3, 5).map((metric, index) => (
        <div 
          key={index} 
          className='py-4 bg-white w-full'
        >
          <div className={`sm:px-6 px-4 ${index === 1 ? '' : 'border-r border-gray-200'}`}>
            <div className="flex justify-between items-center">
              <h3 className="text-gray-600 font-medium text-[12px]">{metric.title}</h3>
              <div className='bg-gray-100 p-1 rounded-full mx-[2px]'>{getChangeIcon(metric.changeType)}</div>
            </div>
            
            <div className="mt-2">
              <div className="flex items-end">
                <span className="text-base font-semibold text-gray-800">{metric.value}</span>
                {metric.unit && <span className="ml-1 text-gray-500 text-[12px]">{metric.unit}</span>}
              </div>
              
              <div className="mt-1 flex items-center text-[12px] py-1 sm:flex-row flex-col">
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

export default MetricCard;