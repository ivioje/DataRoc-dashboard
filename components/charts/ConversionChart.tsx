import { useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';
import {conversionChartData as chartData} from '@/lib/data';

const ConversionByDeviceChart = () => {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    // Destroy existing chart if it exists
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const data = {
      labels: ['Mobile', 'Desktop', 'Tablet'],
      datasets: [
        {
          data: [88, 10, 2],
          backgroundColor: [
            'rgb(101, 127, 255)', 
            'rgb(111, 207, 151)',
            'rgb(255, 187, 92)',
          ],
          borderWidth: 0,
        },
      ],
    };

    const config: ChartConfiguration<'pie', number[], string> = {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            font: {
              size: 16,
              weight: 'normal',
            },
            color: '#6b7280',
            padding: {
              top: 20,
              bottom: 30,
            },
            align: 'start',
          },
        },
      },
    };

    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        chartInstance.current = new Chart(ctx, config);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full px-4 py-2 bg-white rounded-[5px] max-h-[300px] my-3 xl:block flex">
    <h3 className="text-gray-600 font-medium text-[12px]">CONVERSION BY DEVICE</h3>
    <div className='flex xl:items-start items-center'>
        <div className='h-[260px] -mt-14'>
        <canvas ref={chartRef}></canvas>
        </div>
        <div className="flex flex-col space-y-2 ml-2 w-[60%] xl:mt-12">
            {chartData.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
                <div className="flex items-center w-full ml-5">
                <span
                    className="w-2 h-2 mx-3 rounded-full"
                    style={{
                    backgroundColor: item.bg,
                    }}
                ></span>
                <span className="text-gray-700 text-[13px]">{item.type}</span>
                </div>
            </div>
            ))}
        </div>
    </div>
    </div>
  );
};

export default ConversionByDeviceChart;