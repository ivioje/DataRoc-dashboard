import { useModalStore } from '@/store/modal-store';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import SankeyChart from '../charts/SankeyChart';
import { useMetricStore } from '@/store/metric-store';

const AddMetric = () => {
  const { open } = useModalStore();
  const { chartGenerated } = useMetricStore();

  return (
    <div className='w-full p-4 flex justify-center items-center'>
      {chartGenerated && <SankeyChart />}

      {!chartGenerated &&
        <div className='w-full' onClick={() => open()}>
        <div className="sm:m-5 h-[280px] w-full border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors">
          <div className="mb-2">
            <PlusIcon size={28} />
          </div>
          <p className="text-gray-600 font-medium tracking-wide uppercase text-[12px]">New AI Metric</p>
        </div>
      </div>
      }
    </div>
  );
};

export default AddMetric;