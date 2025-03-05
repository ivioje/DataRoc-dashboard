import { useEffect } from "react";
import SankeyChart from "./SankeyChart"; 
import { useMetricStore } from "@/store/metric-store";

const SankeyContainer = () => {
    const { data, startDataGathering } = useMetricStore();
  
    useEffect(() => {
      startDataGathering();
    }, []);
  
    return (
        <div className="bg-white border border-white rounded-[8px] mx-2 p-3">
        <div className="flex items-center justify-center flex-col py-2 max-w-fit max-h-[300px] bg-white rounded-[15px]">
          <h2 className="text-gray-500 uppercase w-full text-[12px] font-semibold flex items-start mb-4">
            user path analysis
          </h2>
        <h2> Sankey Chart </h2>
        {data && data.nodes && data.links ? <SankeyChart /> : <p>Loading chart...</p>}
      </div>
      </div>
    );
}

export default SankeyContainer;

