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
    <div className='flex items-start'>
        <div className='flex flex-col w-[80%]'>
            <div className='flex items-start w-full'>
                <div className='w-[35%]'>
                    <WebsiteMetricCards />
                </div>
                <div className='w-[65%]'>
                    <MetricCard />
                    <ConversionByDeviceChart />
                </div>
            </div>
            <WebsiteTopPagesTable />
        </div>
        <div className='w-[40%] mx-4 mb-5'>
            <WebsiteRecurringRevenueChart />
            <AddMetric />
        </div>
    </div>
    </div>
  )
}

export default WebsitePerformanceMetrics