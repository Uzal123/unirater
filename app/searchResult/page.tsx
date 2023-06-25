"use client";

import CollegeCard from "@/components/CollegeCard";
import Topbar from "@/components/Topbar";
import { searchHook } from "@/hooks/searchHook";
import React, { useEffect } from "react";

const SearchResults = () => {
  const { pageData, isLoading, getSearchResults, setSlug, slug } = searchHook();

  useEffect(() => {
    if (slug.length > 2) {
      getSearchResults({ slug: slug, limit: 15, page: 1 });
    }
  }, []);

  return (
    <div>
      <Topbar />
      <div className=" p-6">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="flex flex-col">
            <div className="text-2xl font-bold">
              Search Results for <span>{slug}</span>
            </div>
            <div className="text-sm text-gray-500">
              Showing 1-10 of 100 results
            </div>
          </div>
        </div>
        <div className="flex w-full">
          <div className="w-1/3 h-max bg-gray-300"></div>
          <div className="flex flex-col mt-6 gap-3 w-2/3">
            {pageData?.map((college) => (
              <CollegeCard key={college._id} college={college} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
