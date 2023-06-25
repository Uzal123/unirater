import React from "react";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-2 border-2 rounded-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <img
            src="https://motoghar.s3.ap-south-1.amazonaws.com/1685281257239.webp"
            className="rounded-full w-12 h-12 object-cover"
          />
          <div>
            <p className="font-semibold text-xl">John</p>
            <p>10th May 2021</p>
          </div>
        </div>

        <div className="float-right">
          <div className="flex gap-2">
            <AiFillStar className="text-yellow-600" />
            <AiFillStar className="text-yellow-600" />
            <AiFillStar className="text-yellow-600" />
            <AiFillStar className="text-yellow-600" />
            <AiFillStar className="text-gray-300" />
          </div>
        </div>
      </div>
      <div className=" text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem eos
        beatae magni molestiae id, commodi laudantium eligendi dicta asperiores
        eius dolor aut quia vitae ex voluptatum officia, hic omnis.
        Tempora.Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Corrupti provident, a unde neque sunt sint totam nobis error ipsa
        exercitationem nisi voluptatem? Est, aut atque omnis sequi corrupti
        animi distinctio?
      </div>
      <div className="flex gap-4 w-full">
        <button className="flex gap-2 items-center">
          <p>Infrastructure</p>
          <p className="text-highlight">3/5</p>
        </button>
        <button className="flex gap-2 items-center">
          <p>Campus Life</p>
          <p className="text-highlight">4/5</p>
        </button>
        <button className="flex gap-2 items-center">
          <p>Placements</p>
          <p className="text-highlight">4/5</p>
        </button>
        <button className="flex gap-2 items-center">
          <p>Academics</p>
          <p className="text-highlight">4/5</p>
        </button>
      </div>
    </div>
  );
};

export default Review;
