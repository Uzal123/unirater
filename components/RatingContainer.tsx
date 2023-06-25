import React from "react";
import RadialProgress from "./RadialProgress";
import ProgressBar from "./ProgressBar";

const RatingContainer = () => {
  return (
    <div className="flex flex-col w-full gap-4">
      <h2 className="w-full font-semibold text-2xl">Rating Summary</h2>
      <div className="flex w-full p-4 border-2 rounded-2xl gap-4 justify-center items-center">
        <RadialProgress progress={81} />
        <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center justify-between gap-4 w-96">
            <label>Infrastructure</label>
            <ProgressBar progress={70} />
          </div>
          <div className="flex items-center justify-between gap-4 w-96">
            <label>Academics</label>
            <ProgressBar progress={87} />
          </div>
          <div className="flex items-center justify-between gap-4 w-96">
            <label>Placements</label>
            <ProgressBar progress={80} />
          </div>
          <div className="flex items-center justify-between gap-4 w-96">
            <label>Campus Life</label>
            <ProgressBar progress={65} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingContainer;
