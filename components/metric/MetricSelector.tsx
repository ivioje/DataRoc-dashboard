import React from "react";
import { useSankeyStore } from "@/store/sankey-store";
import SkeletonLoader from "@/components/SkeletonLoader";

const MetricSelector = () => {
  const { loading, showResults, generatedMetrics, setSelectedMetric } = useSankeyStore();

  return (
    <div className="p-4 space-y-4">

      {loading ? (
        <SkeletonLoader />
      ) : (
        showResults && (
          <div className="space-y-2">
            {generatedMetrics.length > 0 ? (
              generatedMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border rounded-lg cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedMetric(metric.name)}
                >
                  <span className="flex items-center gap-2">
                    <span>{metric.icon}</span>
                    {metric.name}
                  </span>
                  <button className="text-gray-500">+</button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center">No metrics found</p>
            )}
          </div>
        )
      )}
    </div>
  );
};

export default MetricSelector;
