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
            size: 16,
          },
          color: "#666",
        },
        beginAtZero: true,
        max: 125000,
        ticks: {
          stepSize: 25000,
          callback: function (value) {
            if (value === 0) return "0";
            return value / 1000 + "k";
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
            size: 16,
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
    <div className="flex items-center justify-center flex-col gap-6 px-2 py-4 max-w-fit max-h-[280px] bg-white rounded-[15px] mx-2 mt-10">
      <h2 className="text-gray-500 w-full uppercase text-sm font-semibold flex items-start bg-white">
        MONTHLY RECURRING REVENUE
      </h2>
      <div className="h-[300px] w-full">
        <Line data={data} options={options} className="h-[280px] w-full" />
      </div>
    </div>
  );
};

export default MonthlyRecurringRevenueChart;
