"use client";
import Review from "@/components/cards/Review";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

export const metadata = {
  title: "All Reviews",
  description: "Best Fast Food in Sirajgonj",
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to fetch reviews:", error);
        setLoading(false);
      });
  }, []);
  console.log(reviews);
  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-400">{reviews.length}</span>Found
        Foods
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <Review key={rev.id} review={rev}></Review>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
