import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { recurringChartData as data } from '@/lib/data';

const WebsiteRecurringRevenueChart = () => {
  return (
    <div className="bg-white p-3 rounded-[5px] w-full xl:mx-4">
      <h2 className="text-gray-700 text-[12px] font-medium mb-6">MONTHLY RECURRING REVENUE</h2>
      
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#c6c6c6" />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '#bbb' }}
              tickLine={false}
              fontSize={12}
            />
            <YAxis 
              domain={[0, 100]}
              tick={{ fill: '#6b7280' }}
              axisLine={{ stroke: '' }}
              tickLine={false}
              ticks={[0, 20, 40, 60, 80, 100]}
              fontSize={12}
            />
            <Tooltip />
            <Legend 
              verticalAlign="bottom" 
              iconType="plainline" 
              wrapperStyle={{ bottom: 0, fontSize: '12px' }}
            />
            <Line
              type="bumpX"
              dataKey="revenue2023"
              stroke="#6366f1"
              strokeWidth={1}
              dot={{ r: 4, fill: '#a5b4fc', stroke: '#a5b4fc', strokeWidth: 1 }}
              activeDot={{ r: 6, fill: '#6366f1', stroke: '#a5b4fc', strokeWidth: 3 }}
              name="2023"
            />
            {/* Placeholder for 2024 data shown in the legend but not plotted */}
            <Line
              dataKey="revenue2024"
              stroke="#86efac"
              strokeWidth={2}
              dot={{ r: 6, fill: '#86efac', stroke: '#86efac', strokeWidth: 1 }}
              activeDot={{ r: 8, fill: '#22c55e', stroke: '#86efac', strokeWidth: 2 }}
              name="2024"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WebsiteRecurringRevenueChart;