"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const CustomerRetentionChart = () => {
  const data = {
    labels: ["Retained", "Churned"],
    
    datasets: [
      {
        data: [95, 5],
        backgroundColor: ["#12239E", "#009ADE"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "0%",
    plugins: {
      legend: {
        display: true,
        position: "right" as const,
        labels: {
          boxWidth: 5,
          boxHeight: 5,
          padding: 10,
        },
      },
      tooltip: { enabled: true },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex items-center justify-center flex-col gap-6 px-4 lgx:py-2 py-7 w-full rounded-[15px] my-2 ml-2 bg-white">
      <h2 className="text-gray-500 w-full uppercase text-[12px] font-semibold flex items-start lgx:mb-0 mb-5">
        Customer retention rate
      </h2>

      {/* Doughnut Chart */}
      <div className="relative flex items-center justify-center">
        <div className="lg:h-[160px] h-[140px] w-full lgx:w-[300px] -mt-5">
          <Doughnut
            data={data}
            options={options}
            className="h-[300px] w-[300px]"
          />
        </div>
        {/* Center Text */}
        <div className="absolute text-white mdx:text-[12px] text-[10px] text-center">
          <p>Retained</p>
          <p className="font-medium">80</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRetentionChart;
