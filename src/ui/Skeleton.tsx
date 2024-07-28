import React from "react";

import { SkeletonLoaderProps } from "@/types";

const SkeletonLoader: React.FC<SkeletonLoaderProps> = ({
  type,
  width = "w-16",
  height = "h-4",
  borderRadius = "rounded",
}) => {
  const baseClasses = "bg-gray-200 animate-pulse";

  // Determine type-specific classes for text || rectangle || circle
  let typeClasses = "";
  if (type === "text") {
    typeClasses = `w-${width} h-${height}`;
  } else if (type === "rectangle") {
    typeClasses = `w-${width} h-${height || "32"}`;
  } else if (type === "circle") {
    typeClasses = `w-${width} h-${height || width}`;
  }

  const combinedClasses = `${baseClasses} ${typeClasses} ${borderRadius}`;

  return <div className={combinedClasses} />;
};

export default SkeletonLoader;
