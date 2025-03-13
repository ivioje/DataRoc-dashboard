"use client";
import React, { useRef } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { useChartStore } from "@/store/chart-store";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const PortfolioComparisonChart = () => {
  const chartRef = useRef(null);
  const { visibleDatasets, toggleDataset } = useChartStore();

  const originalData = {
    labels: ["ROI", "Volatility", "Tax Efficiency", "Cost"],
    datasets: [
      {
        label: "July Portfolio",
        data: [50, 30, 90, 40],
        backgroundColor: "transparent",
        borderColor: "rgba(99, 125, 255, .7)",
        pointBackgroundColor: "rgba(99, 125, 255, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(99, 125, 255, 1)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "August Portfolio",
        data: [30, 80, 60, 70],
        backgroundColor: "transparent",
        borderColor: "rgba(75, 192, 150, .7)",
        pointBackgroundColor: "rgba(75, 192, 150, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(75, 192, 150, 1)",
        borderWidth: 2,
        fill: true,
      },
      {
        label: "September Portfolio",
        data: [80, 40, 50, 30],
        backgroundColor: "transparent",
        borderColor: "rgba(255, 159, 64, .7)",
        pointBackgroundColor: "rgba(255, 159, 64, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Filter visible datasets
  const data = {
    ...originalData,
    datasets: originalData.datasets.filter((_, index) => visibleDatasets[index]),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: {
          display: true,
          color: "rgba(0, 0, 0, 0.1)",
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.2)",
        },
        pointLabels: {
          font: {
            size: 12,
            weight: 600,
          },
          color: "#555",
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
  };

  const CustomLegend = () => {
    return (
      <div className="flex justify-center w-full mb-1 lgx:mt-2,lgx:mx-0 mx-2 flex-wrap gap-3">
        {originalData.datasets.map((dataset, index) => (
          <div
            key={index}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => toggleDataset(index)}
          >
            <div className="flex items-center">
              <div
                className="w-3 h-3 rounded-full flex items-center justify-center"
                style={{
                  backgroundColor: visibleDatasets[index]
                    ? dataset.borderColor
                    : "transparent",
                  border: `2px solid ${dataset.borderColor}`,
                  opacity: visibleDatasets[index] ? 1 : 0.5,
                }}
              ></div>
              <div
                className="w-5 h-1 rounded -ml-2"
                style={{
                  backgroundColor: dataset.borderColor,
                  opacity: visibleDatasets[index] ? 1 : 0.5,
                }}
              ></div>
            </div>
            <span
              className="text-[12px]"
              style={{
                color: visibleDatasets[index] ? "#555" : "#999",
              }}
            >
              {dataset.label}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center justify-center flex-col gap-2 px-3 py-3 bg-white rounded-[7px] mx-2 lgx:mt-4 lgx:w-fit w-full border">
      <h2 className="text-gray-500 mb-2 w-full uppercase text-[12px] font-semibold flex items-start">
        DEBT TO EQUITY RATIO
      </h2>

      <CustomLegend />

      <div className="lgx:h-[280px] h-[250px] w-full mt-5">
        <Radar ref={chartRef} data={data} options={options} className="h-full w-full" />
      </div>
    </div>
  );
};

export default PortfolioComparisonChart;
