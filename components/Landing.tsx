"use client";
import React from "react";
import { BiSearch } from "react-icons/bi";
import Lottie from "lottie-react";
import animationData from "../public/astronaut-illustration.json";

const Landing = () => {
  return (
    <div className="bg-secondary flex justify-center items-center content relative">
      <div className="flex flex-col gap-8 items-center w-2/3">
        <h1 className="text-highlight text-3xl font-semibold">
          Education changes lives
        </h1>
        <div className="flex  items-center rounded-3xl pl-4 pr-1 py-1 border-2 bg-white w-2/3">
          <input
            type="text"
            placeholder="Search"
            className="outline-none bg-white w-full"
          />

          <button className=" bg-gray-100 p-2 rounded-full">
            <BiSearch className="" />
          </button>
        </div>
        <h1 className="text-lg font-semibold">
          250+ universities, 500+ college, 1000+ reviews
        </h1>
      </div>
      <div className="absolute bottom-12 left-10">
        <div className="-rotate-12 w-96 h-96">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Landing;
