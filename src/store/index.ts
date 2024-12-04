import { create } from "zustand";

export type IncreasePopulationProps = {
  bears: number;
  increasePopulation: () => number;
  removeAllBears: () => number;
  updateBears: (newBears: number) => number;
};

export const useStore = create((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state: IncreasePopulationProps) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  updateBears: (newBears: number) => set({ bears: newBears }),
}));
