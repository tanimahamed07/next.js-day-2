import React from "react";

const Review = () => {
  return (
    <div class="max-w-xl mx-auto bg-white rounded-2xl shadow-md p-5 space-y-4">
      <div class="flex items-center gap-4">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="Sara Islam"
          class="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 class="font-semibold text-gray-800">Sara Islam</h4>
          <p class="text-sm text-gray-500">Jan 13, 2025</p>
        </div>
      </div>

      <div class="flex items-center gap-1">
        <span class="text-yellow-400">★★★★☆</span>
        <span class="text-sm text-gray-500">(4/5)</span>
      </div>

      <p class="text-gray-700 leading-relaxed">
        Great ambiance and friendly staff. Pasta ঠিকই ছিল, কিন্তু সসটা আরও একটু
        ক্রিমি হলে আরও ভালো লাগতো। তবে সার্ভিস খুব দ্রুত ছিল এবং টেবিল
        অ্যারেঞ্জমেন্টটা বেশ সুন্দর। আবার আসবো।
      </p>

      <div class="flex items-center justify-between pt-2">
        <button class="flex items-center gap-2 text-sm text-gray-600 hover:text-red-500 transition">
          ❤️ <span>1 Like</span>
        </button>

        <span class="text-xs text-gray-400">sara@mail.com</span>
      </div>
    </div>
  );
};

export default Review;
