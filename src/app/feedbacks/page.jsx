import FeedbackCard from "@/components/cards/FeedbackCard";
import { connect } from "@/lib/dbConnect";
import Link from "next/link";
import React from "react";
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Feedbacks",
};

const getFeedback = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback/`, {
    // cache: 'force-cache',
    next: {revalidate: 60}
  });
  return res.json();
};

const FeedbackPage = async () => {
  // const feedback = await getFeedback();
  // const feedback = await connect('feedbacks').find().toArray();
  const feedback = await getFeedback();

  console.log(feedback)
  console.log(feedback);
  return (
    <div>
      <h2 className="text-2xl">{feedback.length} Feedbacks Found</h2>
      <div className="">
        <div className="my-5">
          <Link href={"/feedbacks/add"} className="btn">
            Add Feedback
          </Link>
        </div>
        <div className="my-3 space-y-5 ">
          {feedback.map((fd) => (
            <FeedbackCard key={fd._id} feedback={fd}></FeedbackCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
