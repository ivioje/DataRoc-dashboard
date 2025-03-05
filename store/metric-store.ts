import { create } from "zustand";

interface MetricState {
  searchQuery: string;
  loading: boolean;
  showResults: boolean;
  generatedMetrics: { name: string; icon: string }[];
  selectedMetric: string | null;
  gatheringData: boolean;
  data: any
  chartGenerated: boolean;
  setSearchQuery: (query: string) => void;
  setLoading: (loading: boolean) => void;
  setShowResults: (show: boolean) => void;
  generateMetrics: () => void;
  setSelectedMetric: (metric: string) => void;
  startDataGathering: () => void;
  setData: (data: any) => void;
}

export const useMetricStore = create<MetricState>((set, get) => ({
  searchQuery: "",
  loading: false,
  showResults: false,
  generatedMetrics: [],
  selectedMetric: null,
  gatheringData: false,
  data: { nodes: [{name: '', value:0, color: ''}], links: [{source: 0, target: 0, value: 0}] },
  chartGenerated: false,

  setSearchQuery: (query) => set({ searchQuery: query, showResults: false }),
  setLoading: (loading) => set({ loading }),
  setShowResults: (show) => set({ showResults: show }),

  generateMetrics: () => {
    set({ loading: true, showResults: false });

    setTimeout(() => {
      const searchQuery = get().searchQuery.toLowerCase();
      let generatedMetrics: { name: string; icon: string }[] = [];

      if (searchQuery.includes("user")) {
        generatedMetrics = [
          { name: "User Path Analysis", icon: "📈" },
          { name: "User Conversion Analysis", icon: "📊" },
        ];
      } else if (searchQuery.includes("sales")) {
        generatedMetrics = [
          { name: "Sales Funnel Analysis", icon: "💰" },
          { name: "Revenue Growth Metric", icon: "📊" },
        ];
      }

      set({
        generatedMetrics,
        loading: false,
        showResults: true,
      });
    }, 1500);
  },

  setSelectedMetric: (metric) => set({ selectedMetric: metric, data: { nodes: [], links: [] } }),

  startDataGathering: () => {
    set({ gatheringData: true, chartGenerated: false });
  
    setTimeout(() => {
      const newData = {
        nodes: [
          { from: "Landing Page", value: 11203, color: "#FDA4AF" },
          { from: "About Us Page", value: 45000, color: "#FDE68A" },
          { from: "Buy Products Page", value: 56504, color: "#86EFAC" },
          { from: "Events Page", value: 45986, color: "#7DD3FC" },
          { from: "What's New Page", value: 23000, color: "#06B6D4" },
          { from: "Get to Know Us Page", value: 27000, color: "#4B5563" },
        ],
        links: [
          { source: 0, target: 1, value: 11203 },
          { source: 1, target: 2, value: 45000 },
          { source: 2, target: 3, value: 56504 },
          { source: 3, target: 4, value: 45986 },
          { source: 4, target: 5, value: 23000 },
        ],
      };
  
      
      set({ gatheringData: false, data: newData, chartGenerated: true });
    }, 1500);
  },
  

  setData: (data) => set({ data, chartGenerated: !!data }),
}));
