import { create } from "zustand";

interface DeclaretionTypes {
  categories: {
    id: string;
    title: string;
    img: string;
    type: "divan" | "kreslo" | "stol" | "stul" | "kravat";
  }[];
}

interface FunctionTypes {
  getCategories: (jsonURL: string) => void;
}

export const useCategories = create<DeclaretionTypes & FunctionTypes>(
  (set) => ({
    categories: [],
    getCategories: async (jsonURL: string) => {
      try {
        const response = await fetch(jsonURL);
        const result = await response.json();

        set({ categories: result });
      } catch (error) {
        console.log("Error fething data:", error);
      }
    },
  }),
);
