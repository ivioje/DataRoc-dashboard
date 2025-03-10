"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MonthlyRecurringRevenueChart = () => {
  const data = {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        data: [25000, 50000, 35000, null, null, null, null],
        backgroundColor: "#12239E",
        borderColor: "#12239E",
        pointBackgroundColor: "#12239E",
        borderWidth: 2,
        tension: 0.1,
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        title: {
          display: true,
          text: "Amount",
          font: {
            size: 14,
          },
          color: "#666",
        },
        beginAtZero: true,
        max: 125000,
        ticks: {
          stepSize: 25000,
          callback: function (tickValue: string | number) {
            if (typeof tickValue === "number") {
              if (tickValue === 0) return "0";
              return tickValue / 1000 + "k";
            }
            return tickValue;
          },
        },
        grid: {
          color: "#f0f0f3",
          borderDash: [5, 5],
          drawBorder: true,
        },
        border: {
          display: true,
        },
      },
      x: {
        title: {
          display: true,
          text: "Time",
          font: {
            size: 14,
          },
          color: "#666",
        },
        grid: {
          display: false,
          drawBorder: false,
        },
        border: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  return (
    <div className="bg-white border border-white rounded-[8px] mx-2 p-3 w-full">
      <div className="flex items-center justify-center flex-col py-2 max-w-fit max-h-[300px] bg-white rounded-[15px]">
        <h2 className="text-gray-500 w-full text-[12px] font-semibold flex items-start mb-4">
          MONTHLY RECURRING REVENUE
        </h2>
        <div className="h-[200px] w-full mt-5">
          <Line data={data} options={options} className="h-[200px] w-full" />
        </div>
      </div>
    </div>
  );
};

export default MonthlyRecurringRevenueChart;
