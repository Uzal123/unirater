import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import Skeleton from "./Skeleton";
import { Institution } from "@/types/models";
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";

interface CollegeHeroProps {
  institution: Institution;
  isLoading?: boolean;
}

const CollegeHero: React.FC<CollegeHeroProps> = ({
  institution,
  isLoading,
}) => {
  return (
    <div className="w-full flex justify-between px-16 p-8">
      <div className="flex gap-4">
        <div className="h-48 w-48">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpQC9bULmKe0s9iAVr5loo8yULsKJOwrB2C3lg2MT&s"
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <h2 className="text-2xl">
            {isLoading ? <Skeleton className="w-full" /> : institution.name}
          </h2>
          <div className="flex gap-2">
            <div className="flex gap-1 items-center">
              <ImLocation />
              <p className="text-lg">Lalbandi-2, Sarlahi</p>
            </div>
            <div className="flex gap-1 items-center">
              <MdEmail />
              <p className="text-lg">{institution.email || "info@email.com"}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <button className="text-center bg-secondHighlight p-2 flex text-white font-semibold px-6 gap-3 items-center rounded-2xl shadow-md">
          <span>Follow </span>
          <BsPlusCircle />
        </button>
      </div>
    </div>
  );
};

export default CollegeHero;
