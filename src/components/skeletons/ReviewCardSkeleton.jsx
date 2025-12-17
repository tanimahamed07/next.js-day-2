import React from "react";

export default function ReviewCardSkeleton() {
  return (
    <div>
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-5 animate-pulse space-y-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-300 rounded"></div>
            <div className="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="h-4 w-24 bg-gray-300 rounded"></div>

        <div className="space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>

        <div className="flex justify-between items-center pt-2">
          <div className="h-4 w-16 bg-gray-300 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
