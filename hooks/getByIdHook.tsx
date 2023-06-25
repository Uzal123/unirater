import { searchInstitutions } from "@/api";
import { Institution } from "@/types/models";
import { CollegeSearchQuery } from "@/types/searchQueryType";
import axios from "axios";
import { create } from "zustand";

export interface getByIdStore {
  data: Institution;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  getInstitution: (slug: string) => Promise<void>;
}

export const getByIdHook = create<getByIdStore>((set) => ({
  data: {} as Institution,
  isLoading: false,
  getInstitution: async (slug: string) => {
    set({ isLoading: true });
    try {
      const res = await axios.get(
        `http://localhost:5000/api/institution/${slug}`
      );
      set({ data: res.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },
  setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
}));
