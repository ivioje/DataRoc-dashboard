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

    // Create a map of node ids to node names for the from/to values
    const nodeMap: { [key: string]: string } = {};
    data.nodes.forEach((node: { id: string; name: string }) => {
      nodeMap[node.id] = node.name;
    });

    interface SankeyLink {
      source: string;
      target: string;
      value: number;
      color?: string;
    }

    new Chart(ctx, {
      type: "sankey",
      data: {
        datasets: [
          {
            label: "User Flow",
            data: data.links.map((link: SankeyLink) => ({
              from: nodeMap[link.source],
              to: nodeMap[link.target],
              flow: link.value,
            })),
            colorFrom: (c: any) => data.links[c.dataIndex].color || "#64c9f2",
            colorMode: "from",
            priority: {
              "Home": 1,
              "Exit": 5,
              "Check Out": 5
            }
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            font: {
              size: 16,
              weight: 'bold'
            },
            padding: {
              top: 10,
              bottom: 20
            }
          },
          tooltip: {
            callbacks: {
              title: function(items: any) {
                const item = items[0];
                return `${item.dataset.data[item.dataIndex].from} → ${item.dataset.data[item.dataIndex].to}`;
              },
              label: function(item: any) {
                const value = item.dataset.data[item.dataIndex].flow;
                return `Users: ${value.toLocaleString()}`;
              }
            }
          }
        },
        layout: {
          padding: 5
        }
      },
    });

    return () => {
      Chart.getChart(chartRef.current as HTMLCanvasElement)?.destroy();
    };
  }, [data]);

  return (
      <div className="flex items-center justify-center flex-col lg:p-3 w-full bg-white rounded-md">
        <h2 className="text-gray-500 uppercase w-full text-[12px] font-semibold flex items-start mb-4">
          {selectedMetric}
        </h2>
        <div className="w-full h-[240px] -mt-5">
          <canvas className="w-full h-full" ref={chartRef}></canvas>
        </div>
      </div>
  );
};

export default SankeyChart;