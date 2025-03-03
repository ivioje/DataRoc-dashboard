import { create } from "zustand";

export const useTabStore = create((set) => ({
    tab: {
        selectedValue: 'business',
        handleChangeTab: (value: string) => set((state: any) => ({ tab: { ...state.tab, selectedValue: value } }))
    }
})); 