import { useModalStore } from '@/store/modal-store';
import { PlusIcon } from 'lucide-react';
import React from 'react';

const AddMetric = () => {
  const { isOpen, open } = useModalStore();
  return (
    <div className='relative' onClick={() => open()}>
      <div className="relative m-5 h-[280px] w-full border-2 border-dashed border-gray-400 rounded-lg flex flex-col items-center justify-center cursor-pointer transition-colors">
        <div className="mb-2">
          <PlusIcon size={28} />
        </div>
        <p className="text-gray-600 font-medium tracking-wide uppercase text-[12px]">New AI Metric</p>
      </div>
    </div>
  );
};

export default AddMetric;