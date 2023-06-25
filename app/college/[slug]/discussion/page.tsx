/* eslint-disable @next/next/no-img-element */
import CollegeHero from "@/components/CollegeHero";
import DiscussionThread from "@/components/Post";
import Tabs from "@/components/Tabs";
import React from "react";

const Discussion = () => {
  return (
    <div className="px-16 flex flex-col items-center">
      <div className="border-2 rounded-2xl w-1/2 flex gap-4 items-center p-4">
        <div className="flex justify-center w-16 h-12">
          <img
            src="https://motoghar.s3.ap-south-1.amazonaws.com/1685281257239.webp"
            alt="discussion"
            className="rounded-full h-12 w-12 object-cover"
          />
        </div>

        <textarea
          className="w-full h-24 border-2 rounded-2xl p-2"
          placeholder="Write your discussion here..."
        ></textarea>
        <button className="bg-highlight text-white rounded-2xl px-4 py-2">
          Post
        </button>
      </div>
      <div className="w-1/2">
        <DiscussionThread />
        <DiscussionThread />
        <DiscussionThread />
      </div>
    </div>
  );
};

export default Discussion;
