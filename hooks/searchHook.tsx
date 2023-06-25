import { Institution } from "@/types/models";
import { CollegeSearchQuery } from "@/types/searchQueryType";
import axios from "axios";
import { create } from "zustand";

export interface SearchStore {
  data: Institution[];
  slug: string;
  setSlug: (slug: string) => void;
  isLoading: boolean;
  getSearchResults: (query: CollegeSearchQuery) => Promise<void>;
  setIsLoading: (isLoading: boolean) => void;
  setSearchedData: (data: Institution[]) => void;
  pageData: Institution[];
}

export const searchHook = create<SearchStore>((set) => ({
  data: [],
  slug: "",
  isLoading: false,
  setSlug: (slug: string) => set({ slug }),
  getSearchResults: async (query: CollegeSearchQuery) => {
    set({ isLoading: true });
    const { page, limit, slug } = query;
    try {
      const res = await axios.get(
        `http://localhost:5000/api/institution/search?page=${page}&limit=${limit}&slug=${slug}`
      );
      set({
        data: res.data.slice(0, 5),
        pageData: res.data,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      console.log(error);
    }
  },
  pageData: [],
  setIsLoading: (isLoading: boolean) => set({ isLoading: isLoading }),
  setSearchedData: (data: Institution[]) => set({ data, isLoading: false }),
}));
