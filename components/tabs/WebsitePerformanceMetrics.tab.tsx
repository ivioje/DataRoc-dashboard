import React from 'react'
import WebsiteMetricCards from '../cards/WebsiteMetricsCard'
import MetricCard from '../cards/Metric.cards'
import ConversionByDeviceChart from '../charts/ConversionChart'
import WebsiteRecurringRevenueChart from '../charts/WebsiteRecurringRevenueChart'

const WebsitePerformanceMetrics = () => {
  return (
    <div className='flex items-start'>
        <div className='flex items-start w-[60%]'>
            <div className='w-[35%]'>
                <WebsiteMetricCards />
            </div>
            <div className='w-[65%]'>
                <MetricCard />
                <ConversionByDeviceChart />
            </div>
        </div>
        <div className='w-[40%] mx-4'>
            <WebsiteRecurringRevenueChart />
        </div>
    </div>
  )
}

export default WebsitePerformanceMetrics