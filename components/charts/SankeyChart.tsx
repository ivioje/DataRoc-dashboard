"use client";

import { SankeyController, Flow } from "chartjs-chart-sankey";
import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";
import { useMetricStore } from "@/store/metric-store";

Chart.register(...registerables, SankeyController, Flow);

const SankeyChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const { data, selectedMetric } = useMetricStore();

  useEffect(() => {
    if (!data || !data.nodes || !data.links || data.nodes.length === 0) {
      console.warn("SankeyChart: No valid data found");
      return;
    }

    const ctx = chartRef.current?.getContext("2d");
    if (!ctx) return;

    Chart.getChart(chartRef.current as HTMLCanvasElement)?.destroy();

    new Chart(ctx, {
      type: "sankey",
      data: {
        labels: data.nodes.map((node: any) => node.name),
        datasets: [
          {
            label: "User Flow",
            data: data.links.map((link: any) => ({
              from: link.source,
              to: link.target,
              flow: link.value,
            })),
            color: data.nodes.map((node: any) => node.color || "#ccc"),
            colorMode: "from"
          },
        ],
      },
      options: {
        responsive: true,
      },
    });

    return () => {
      Chart.getChart(chartRef.current as HTMLCanvasElement)?.destroy();
    };
  }, [data]);

  return (
    <div className="bg-white border border-white rounded-[8px] min-h-[330px] mx-2 my-4 p-3">
      <div className="flex items-center justify-center flex-col py-2 max-w-fit max-h-[300px] bg-white rounded-[15px]">
        <h2 className="text-gray-500 uppercase w-full text-[12px] font-semibold flex items-start mb-4">
          { selectedMetric }
        </h2>
        <canvas className="h-[300px]" ref={chartRef}></canvas>
      </div>
    </div>
  )
};

export default SankeyChart;
