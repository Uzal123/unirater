import RatingContainer from "@/components/RatingContainer";
import Review from "@/components/Review";
import React from "react";

const ReviewPage = () => {
  return (
    <div className="px-16 flex flex-col items-center">
      <div className="w-1/2 flex flex-col justify-center items-center">
        <RatingContainer />
        <div className="flex w-full gap-4 py-2">
          <button className="rounded-full border-2 px-8 p-2">All</button>
          <button className="rounded-full border-2 px-8 p-2">Positive</button>
          <button className="rounded-full border-2 px-8 p-2">Negative</button>
        </div>
        <Review />
      </div>
    </div>
  );
};

export default ReviewPage;
