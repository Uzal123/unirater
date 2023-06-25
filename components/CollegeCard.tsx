/* eslint-disable @next/next/no-img-element */
import { Institution } from "@/types/models";
import React from "react";
import { useRouter } from "next/navigation";

interface CardProps {
  college: Institution;
}

const CollegeCard: React.FC<CardProps> = ({ college }) => {
  const router = useRouter();
  return (
    <div
      className=" p-4 rounded-lg transition-all flex gap-4 flex-col border-gray-200 border-2 cursor-pointer hover:shadow-md"
      onClick={() => router.push(`/college/${college._id}`)}
    >
      <p className="text-highlight fonr-semibold underline text-2xl">
        {college.name}
      </p>
      <div className="flex gap-4">
        <div className="w-20 h-20">
          <img
            src="https://goldengatecolleges.net/main/images/GGC_logo.png"
            alt="college logo"
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p>{college.address}</p>
          <p>Programs Offered : BE Computer Science | Nursing</p>
          <p>Rating: 4.5</p>
        </div>
      </div>
    </div>
  );
};

export default CollegeCard;
