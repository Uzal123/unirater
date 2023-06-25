import React, { FC } from "react";

interface IProps {
  progress: number;
}

const ProgressBar: FC<IProps> = ({ progress }) => {
  return (
    <div className="w-64 h-2 bg-gray-200 rounded-full">
      <div
        className="h-full bg-accent rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
};

export default ProgressBar;
