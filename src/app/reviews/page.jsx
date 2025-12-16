import React from 'react';
import ReviewsPage from './ReviewPage';

export const metadata = {
  // title: "All Reviews",
  title: {
    absolute: 'Satiesfied Users'
  },
  description: "Best Fast Food in Sirajgonj",
};

const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;