import { create } from "zustand";

interface DeclaretionTypes {
  category: {
    id: string;
    title: string;
    text: string;
    cost: string;
    width: string;
    height: string;
    deep: string;
    img: string;
    type: "divan" | "kreslo" | "stol" | "stul" | "kravat";
  }[];
}

interface FunctionTypes {
  getCategory: (jsonURL: string) => void;
}

export const useCategory = create<DeclaretionTypes & FunctionTypes>((set) => ({
  category: [],
  getCategory: async (jsonURL: string) => {
    try {
      const response = await fetch(jsonURL);
      const result = await response.json();

      set({ category: result });
    } catch (error) {
      console.log("Error fething data:", error);
    }
  },
}));
