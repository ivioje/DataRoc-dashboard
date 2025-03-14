import React from "react";
import { useMetricStore } from "@/store/metric-store";

import SkeletonLoader from "@/components/SkeletonLoader";
import { Check, PlusIcon } from "lucide-react";

const MetricSelector = () => {
  const { loading, showResults, generatedMetrics, setSelectedMetric, selectedMetric } = useMetricStore();

  return (
    <div className="p-2">
      {loading ? (
        <SkeletonLoader />
      ) : (
        showResults && (
          <div className="space-y-2">
            {generatedMetrics.length > 0 ? (
              generatedMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border-b cursor-pointer hover:bg-gray-100"
                  onClick={() => setSelectedMetric(metric.name)}
                >
                  <span className="flex items-center gap-2">
                    <span>{metric.icon}</span>
                    {metric.name}
                  </span>
                  <button>
                    {selectedMetric === metric.name ? <Check size={25} className="text-green-700" /> : <PlusIcon size={25} className="text-gray-700" />}
                  </button>
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
