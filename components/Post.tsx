import React from "react";
import { BiUpvote } from "react-icons/bi";
import { BiDownvote } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import { TbShare3 } from "react-icons/tb";

const DiscussionThread = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-2">
      <div className="flex items-center w-full  gap-4">
        <img
          src="https://motoghar.s3.ap-south-1.amazonaws.com/1685281257239.webp"
          className="rounded-full w-12 h-12 object-cover"
        />
        <p className="font-semibold text-xl">John</p>
      </div>
      <div className="font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, ea
        consequatur illum recusandae eos nam.
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
          <BiUpvote />
          <p>34</p>
        </button>
        <button className="flex gap-2 items-center">
          <BiDownvote />
        </button>
        <button className="flex gap-2 items-center">
          <BiComment />
          <p>34</p>
        </button>
        <button className="flex gap-2 items-center ml-8">
          <TbShare3 className="font-light" />
        </button>
      </div>
    </div>
  );
};

export default DiscussionThread;
