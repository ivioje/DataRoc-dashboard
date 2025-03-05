import { create } from "zustand";

interface SankeyState {
  searchQuery: string;
  loading: boolean;
  showResults: boolean;
  generatedMetrics: { name: string; icon: string }[];
  selectedMetric: string | null;
  data: any;
  setSearchQuery: (query: string) => void;
  setLoading: (loading: boolean) => void;
  setShowResults: (show: boolean) => void;
  generateMetrics: () => void;
  setSelectedMetric: (metric: string) => void;
  setData: (data: any) => void;
}

export const useSankeyStore = create<SankeyState>((set, get) => ({
  searchQuery: "",
  loading: false,
  showResults: false,
  generatedMetrics: [],
  selectedMetric: null, // This stores the selected metric
  data: null, // This stores the data for the Sankey chart

  setSearchQuery: (query) => set({ searchQuery: query, showResults: false }),
  setLoading: (loading) => set({ loading }),
  setShowResults: (show) => set({ showResults: show }),
  
  generateMetrics: () => {
    set({ loading: true, showResults: false });

    setTimeout(() => {
      const searchQuery = get().searchQuery.toLowerCase();
      let generatedMetrics: { name: string; icon: string; }[] = [];

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

  setSelectedMetric: (metric) => set({ selectedMetric: metric, data: null }),
  setData: (data) => set({ data }),
}));
