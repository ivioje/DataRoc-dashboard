"use client";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ExpensesChartData } from "@/lib/data";
import { formatNumber } from "@/utils/formatNumber";

ChartJS.register(ArcElement, Tooltip, Legend);

const OperatingExpenses = () => {
  const data = {
    labels: ExpensesChartData.map((item) => item.country),
    datasets: [
      {
        data: ExpensesChartData.map((item) => parseFloat(item.figure)),
        backgroundColor: ExpensesChartData.map((item) => item.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "80%",
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="bg-white flex items-center border justify-center flex-col max-h-[330px] w-[60%] pb-3 pt-1 px-3 m-2 rounded-[15px]">
      <h2 className="text-gray-500 w-full uppercase text-sm font-semibold mb-4 flex items-start">
        Operating Expenses
      </h2>
      <div className="flex w-full">
        <div className="h-[220px] relative w-[40%]">
          <Doughnut data={data} options={options} />
          <div className="absolute top-[45%] left-[60px] text-2xl font-bold text-gray-700">
            120,000
          </div>
        </div>

        {/* Custom Vertical Legend */}
        <div className="flex flex-col space-y-2 ml-2 w-[60%]">
          {ExpensesChartData.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center w-full ml-5">
                <span
                  className="w-3 h-3 mx-3 rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-gray-700 text-sm">{item.country}</span>
              </div>
              <span className="ml-auto min-w-[100px] text-gray-900 font-semibold">
                ${formatNumber(item.figure)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OperatingExpenses;
