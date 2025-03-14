import { useEffect } from "react";
import SankeyChart from "./SankeyChart"; 
import { useMetricStore } from "@/store/metric-store";

const SankeyContainer = () => {
    const { data, startDataGathering } = useMetricStore();
  
    useEffect(() => {
      startDataGathering();
    }, []);
  
    return (
        <div className="flex items-center justify-center flex-col w-full">
        {data && data.nodes && data.links ? <SankeyChart /> : <p>Loading chart...</p>}
      </div>
    );
}

export default SankeyContainer;

