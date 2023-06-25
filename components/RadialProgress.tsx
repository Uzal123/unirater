import React, { FC } from "react";
interface IProps {
  progress: number;
}

const RadialProgress: FC<IProps> = ({ progress }) => {
  const radius = 65;
  const strokeWidth = 8;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;
  const rating = Math.round((progress / 100) * 5 * 10) / 10;

  return (
    <div className="relative">
      <svg className="w-36 h-36 transform -rotate-90">
        <circle
          className="text-gray-200 fill-transparent stroke-current"
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={strokeWidth}
        />
        <circle
          className="text-accent fill-transparent stroke-current"
          cx="50%"
          cy="50%"
          r={radius}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
      </svg>
      <div className="text-accent font-medium text-lg absolute flex top-0 w-full h-36 justify-center items-center">
        <p>{rating}/5</p>
      </div>
    </div>
  );
};

export default RadialProgress;
