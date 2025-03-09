import React from 'react'
import WebsiteMetricCards from '../cards/WebsiteMetricsCard'
import MetricCard from '../cards/Metric.cards'
import ConversionByDeviceChart from '../charts/ConversionChart'
import WebsiteRecurringRevenueChart from '../charts/WebsiteRecurringRevenueChart'
import WebsiteTopPagesTable from '../WebsitePageTable'
import AddMetric from '../AddMetric'
import PopoverComponent from '../Popover'
import { useModalStore } from '@/store/modal-store'
import { useMetricStore } from '@/store/metric-store'

const WebsitePerformanceMetrics = () => {
    const { isOpen } = useModalStore();
    const { chartGenerated } = useMetricStore();
  return (
    <div>
    {isOpen && !chartGenerated && <PopoverComponent />}
    <div className='flex items-start justify-center xl:flex-row flex-col'>
        <div className='flex flex-col xl:w-[80%] w-full justify-center'>
            <div className='flex items-start w-full lg:flex-row flex-col justify-center'>
                <div className='lg:w-[35%] w-full'>
                    <WebsiteMetricCards />
                </div>
                <div className='lg:w-[65%] w-full lg:mt-0 mt-3'>
                    <MetricCard />
                    <ConversionByDeviceChart />
                </div>
            </div>
            <div className='xl:block hidden'><WebsiteTopPagesTable /></div>
        </div>
        <div className='xl:w-[40%] w-full justify-center items-start flex xl:flex-col sm:flex-row flex-col xl:mx-4 mb-5 xl:mt-0 mt-5'>
            <WebsiteRecurringRevenueChart />
            <AddMetric />
    </div>
        <div className='xl:hidden block w-full'><WebsiteTopPagesTable /></div>
    </div>
    </div>
  )
}

export default WebsitePerformanceMetrics