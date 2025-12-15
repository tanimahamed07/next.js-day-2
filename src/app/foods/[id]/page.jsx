import React from "react";
import Image from "next/image";

// fetch single food
const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    { cache: "no-store" }
  );
  const data = await res.json();
  return data.details;
};

// Skeleton Component
const FoodDetailsSkeleton = () => {
  return (
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-80 bg-gray-200 rounded-xl" />

      {/* Content skeleton */}
      <div className="space-y-4">
        <div className="h-8 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-1/2" />
        <div className="h-4 bg-gray-200 rounded w-1/3" />
        <div className="h-6 bg-gray-200 rounded w-1/4 mt-6" />
        <div className="h-10 bg-gray-200 rounded w-40 mt-4" />
      </div>
    </div>
  );
};

const Page = async ({ params }) => {
  const { id } = await params;
console.log(id)
  const food = await getSingleFood(id);
  console.log(food)

  if (!food) {
    return <h2 className="text-center text-xl">Food not found</h2>;
  }

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Food Image */}
        <div className="relative w-full h-80 rounded-xl overflow-hidden shadow">
          <img src={food.foodImg} alt="" />
        </div>

        {/* Food Info */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{food.title}</h1>

          <div className="flex gap-3 text-sm">
            <span className="px-3 py-1 rounded-full bg-green-100 text-green-700">
              {food.category}
            </span>
            <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700">
              {food.area}
            </span>
          </div>

          <p className="text-2xl font-semibold text-orange-600">
            ৳ {food.price}
          </p>

          <a
            href={food.video}
            target="_blank"
            className="inline-block mt-4 px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Watch Recipe 🎥
          </a>
        </div>
      </div>
    </div>
  );
};

export default Page;
