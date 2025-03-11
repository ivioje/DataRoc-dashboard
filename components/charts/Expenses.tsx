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
    <div className="flex items-center justify-center flex-col w-full h-full pb-4 pt-3 px-3 my-2 mx-2 lgx:mx-0 rounded-[5px] bg-white">
      <h2 className="text-gray-500 w-full uppercase text-[12px] font-semibold mb-4 flex items-start">
        Operating Expenses
      </h2>
      <div className="flex w-full lgx:justify-normal justify-between">
        <div className="lgx:h-[160px] h-[140px] w-auto relative lgx:w-[40%]">
          <Doughnut data={data} options={options} />
          <div className="absolute top-[43%] lgx:left-[47px] left-[37px] text-lg font-bold text-gray-700">
            120,000
          </div>
        </div>

        {/* Custom Vertical Legend */}
        <div className="flex flex-col space-y-2 ml-2 w-full lgx:w-[60%]">
          {ExpensesChartData.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center w-full ml-5">
                <span
                  className="w-2 h-2 mx-3 rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-gray-700 text-[13px]">{item.country}</span>
              </div>
              <span className="ml-auto min-w-[100px] text-gray-900 font-semibold text-[13px]">
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
