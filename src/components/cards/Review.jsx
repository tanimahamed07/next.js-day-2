import Image from "next/image";
import React from "react";

const Review = ({ rev }) => {
  const { user, email, photo, rating, review } = rev;

  return (
    <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-5 space-y-4">
      <div className="flex items-center gap-4">
        <Image
          src={photo}
          alt={user}
          width={48}
          height={48}
          className="rounded-full object-cover"
        />

        <div>
          <h4 className="font-semibold text-gray-800">{user}</h4>
          <p className="text-sm text-gray-500">Jan 13, 2025</p>
        </div>
      </div>

      <div className="flex items-center gap-1">
        <span className="text-yellow-400">
          {"★".repeat(rating)}
          {"☆".repeat(5 - rating)}
        </span>
        <span className="text-sm text-gray-500">({rating}/5)</span>
      </div>

      <p className="text-gray-700 leading-relaxed">
        {review}
      </p>

      <div className="flex items-center justify-between pt-2">
        <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition">
          ❤️ <span>1 Like</span>
        </button>

        <span className="text-xs text-gray-400">{email}</span>
      </div>
    </div>
  );
};

export default Review;
