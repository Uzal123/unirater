import React from "react";

interface SkeletonProps {
  className?: string;
}

const Skeleton: React.FC<SkeletonProps> = ({ className }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-gray-300 h-4 w-full mb-2"></div>
    </div>
  );
};

export default Skeleton;
