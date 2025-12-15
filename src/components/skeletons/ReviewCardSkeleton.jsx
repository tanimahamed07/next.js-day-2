import React from "react";

export default function ReviewCardSkeleton() {
  return (
    <div>
      <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-5 animate-pulse space-y-4">
        <div class="flex items-center gap-4">
          <div class="w-12 h-12 bg-gray-300 rounded-full"></div>
          <div class="space-y-2">
            <div class="h-4 w-32 bg-gray-300 rounded"></div>
            <div class="h-3 w-20 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div class="h-4 w-24 bg-gray-300 rounded"></div>

        <div class="space-y-2">
          <div class="h-3 bg-gray-200 rounded w-full"></div>
          <div class="h-3 bg-gray-200 rounded w-full"></div>
          <div class="h-3 bg-gray-200 rounded w-3/4"></div>
        </div>

        <div class="flex justify-between items-center pt-2">
          <div class="h-4 w-16 bg-gray-300 rounded"></div>
          <div class="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
