import { useModalStore } from '@/store/modal-store';
import { PlusIcon } from 'lucide-react';
import React from 'react';
import SankeyChart from './charts/SankeyChart';
import { useMetricStore } from '@/store/metric-store';

const AddMetric = () => {
  const { open } = useModalStore();
  const { chartGenerated } = useMetricStore();

  return (
    <div>
      {chartGenerated && <SankeyChart />}

    {!chartGenerated &&
      <div className='relative' onClick={() => open()}>
      <div className="relative m-5 h-[280px] w-full border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors">
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