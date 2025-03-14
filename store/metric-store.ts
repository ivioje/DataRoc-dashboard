import { create } from "zustand";

interface MetricState {
  searchQuery: string;
  loading: boolean;
  showResults: boolean;
  generatedMetrics: { name: string; icon: string }[];
  selectedMetric: string | null;
  gatheringData: boolean;
  data: any;
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
  data: { 
    nodes: [], 
    links: [] 
  },
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
    }, 5000);
  },

  setSelectedMetric: (metric) => set({ selectedMetric: metric, data: { nodes: [], links: [] } }),

  startDataGathering: () => {
    set({ gatheringData: true, chartGenerated: false });
  
    setTimeout(() => {
      // New data structure that matches the diagram in the image
      const newData = {
        nodes: [
          { name: "Home", id: 0, color: "#23c0de" },
          { name: "About Us", id: 1, color: "#ffffff" },
          { name: "Buy Products", id: 2, color: "#ffffff" },
          { name: "Events", id: 3, color: "#ffffff" },
          { name: "What's New", id: 4, color: "#ffffff" },
          { name: "Exit", id: 5, color: "#23c0de" },
          { name: "Check Out", id: 6, color: "#18d3e3" }
        ],
        links: [
          { source: 0, target: 1, value: 11203, color: "#64c9f2" }, // Home -> About Us
          { source: 0, target: 2, value: 45000, color: "#64c9f2" }, // Home -> Buy Products  
          { source: 0, target: 3, value: 30504, color: "#64c9f2" }, // Home -> Events
          { source: 0, target: 4, value: 45988, color: "#64c9f2" }, // Home -> What's New
          { source: 1, target: 5, value: 23000, color: "#f9c27f" }, // About Us -> Exit
          { source: 2, target: 5, value: 23000, color: "#f9968e" }, // Buy Products -> Exit
          { source: 3, target: 5, value: 23000, color: "#8ce5a6" }, // Events -> Exit
          { source: 4, target: 5, value: 23000, color: "#f9b07f" }, // What's New -> Exit
          { source: 1, target: 6, value: 18203, color: "#f9c27f" }, // About Us -> Check Out
          { source: 2, target: 6, value: 18203, color: "#f9968e" }, // Buy Products -> Check Out
          { source: 3, target: 6, value: 18203, color: "#8ce5a6" }, // Events -> Check Out
          { source: 4, target: 6, value: 18203, color: "#f9b07f" }  // What's New -> Check Out
        ]
      };
  
      set({ gatheringData: false, data: newData, chartGenerated: true });
    }, 5000);
  },
  
  setData: (data) => set({ data, chartGenerated: !!data }),
}));