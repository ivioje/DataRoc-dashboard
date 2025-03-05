import { useEffect } from "react";
import SankeyChart from "./SankeyChart"; 
import { useMetricStore } from "@/store/metric-store";

const SankeyContainer = () => {
    const { data, startDataGathering } = useMetricStore();
  
    useEffect(() => {
      startDataGathering();
    }, []);
  
    return (
      <div>
        <h2> Sankey Chart </h2>
        {data && data.nodes && data.links ? <SankeyChart /> : <p>Loading chart...</p>}
      </div>
    );
}

export default SankeyContainer;

