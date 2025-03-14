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
    <div className="flex items-center sm:justify-center justify-between flex-col w-full h-full pb-4 pt-3 px-3 my-2 rounded-[15px] bg-white">
      <h2 className="text-gray-500 w-full uppercase text-[12px] font-semibold mb-4 flex items-start">
        Operating Expenses
      </h2>
      <div className="flex w-full lgx:justify-normal justify-between">
        <div className="lg:h-[160px] h-[140px] w-auto relative lgx:w-[40%]">
          <Doughnut data={data} options={options} />
          <div className="absolute lg:top-[35%] lgx:top-[43%] lgx:left-[20%] top-[40%] lg:left-[37px] left-[36px] text-lg font-bold text-gray-700">
            120,000
          </div>
        </div>

        {/* Custom Vertical Legend */}
        <div className="flex flex-col space-y-2 sm:ml-2 w-full lgx:w-[60%]">
          {ExpensesChartData.map((item, index) => (
            <div key={item.id} className="flex items-center justify-between w-full">
              <div className="flex items-center w-full sm:ml-5">
                <span
                  className="w-2 h-2 mx-3 rounded-full"
                  style={{
                    backgroundColor: data.datasets[0].backgroundColor[index],
                  }}
                ></span>
                <span className="text-gray-700 lgx:text-[13px] text-[10px] w-fit sm:text-wrap text-nowrap sm:mr-0 mr-2">{item.country}</span>
              </div>
              <span className="ml-auto w-fit min-w-[100px] text-gray-900 font-semibold lgx:text-[13px] text-[10px]">
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
