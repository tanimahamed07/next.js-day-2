  
  'use server'

import { connect } from "@/lib/dbConnect";

 export const postFeedback = async (message) => {
    "use server";
    const result = await connect("feedbacks").insertOne({
      message,
      date: new Date(),
    });
    return { ...result, insertedId: result.insertedId.toString() };
  };

  export const getFeedback = async() => {
const feedback = await connect('feedbacks').find().toArray();
  }