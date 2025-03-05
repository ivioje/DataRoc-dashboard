import React from 'react'
import { useModalStore } from '@/store/modal-store';

const PopoverComponent = () => {
    const { close, open } = useModalStore();

  return (
    <div className='fixed top-0 right-0 z-50 bg-white bg-opacity-70 w-full h-full flex items-center justify-center'>
        <div className="flex flex-col items-center justify-center w-[300px] h-[300px] bg-white rounded-lg">
            <p onClick={() => close()}>close</p>
          <p>AI Metric</p>
        </div>
    </div>
  )
}

export default PopoverComponent