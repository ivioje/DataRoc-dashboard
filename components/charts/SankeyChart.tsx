"use client";

import { SankeyController, Flow } from "chartjs-chart-sankey";
import { Chart, registerables } from "chart.js";
import { useEffect, useRef } from "react";
import { useMetricStore } from "@/store/metric-store";

Chart.register(...registerables, SankeyController, Flow);

const SankeyChart = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const { data } = useMetricStore();

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

  return <canvas ref={chartRef}></canvas>;
};

export default SankeyChart;
