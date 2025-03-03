import { create } from "zustand";

interface ChartState {
  visibleDatasets: boolean[];
  toggleDataset: (index: number) => void;
}

export const useChartStore = create<ChartState>((set) => ({
  visibleDatasets: [true, true, true],

  toggleDataset: (index: number) =>
    set((state) => {
      const newVisibleDatasets = [...state.visibleDatasets];
      newVisibleDatasets[index] = !newVisibleDatasets[index];
      return { visibleDatasets: newVisibleDatasets };
    }),
}));
