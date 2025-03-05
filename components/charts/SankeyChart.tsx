import React, { useEffect } from "react";
import { Sankey, Tooltip } from "recharts";
import { useSankeyStore } from "@/store/sankey-store"; 
import { getSankeyData } from "@/lib/utils";

const SankeyChart = () => {
  const { selectedMetric, data, setData } = useSankeyStore();

  useEffect(() => {
    if (selectedMetric) {
      setData(getSankeyData(selectedMetric));
    }
  }, [selectedMetric, setData]);

  if (!data) return <p className="text-center">Select a metric to generate the chart.</p>;

  return (
    <div className="flex justify-center p-4 bg-white shadow-md rounded-lg">
      <Sankey width={500} height={300} data={data} nodePadding={20}>
        <Tooltip />
      </Sankey>
    </div>
  );
};

export default SankeyChart;
