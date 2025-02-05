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
        position: "right",
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
    <div className="flex items-center justify-center flex-col border gap-6 p-4 max-h-[350px] w-[40%] bg-white rounded-[15px] m-2">
      <h2 className="text-gray-500 w-full uppercase text-sm font-semibold flex items-start mt-14">
        Customer retention rate
      </h2>

      {/* Doughnut Chart */}
      <div className="relative flex items-center justify-center">
        <div className="h-[320px] w-[320px] -mt-5">
          <Doughnut
            data={data}
            options={options}
            className="h-[320px] w-[320px]"
          />
        </div>
        {/* Center Text */}
        <div className="absolute text-white text-[12px] text-center">
          <p>Retained</p>
          <p className="text-[10px] font-medium">80</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerRetentionChart;
