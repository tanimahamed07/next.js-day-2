'use client'
import { useRouter } from 'next/navigation';
import React from 'react';

const FeedbackForm = () => {
    const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const message = e.target.message.value.trim();
    if (!message) return alert("Message is required");
      const res = await fetch('http://localhost:3000/api/feedback/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await res.json();

      if (data.insertedId) {
        alert('Feedback added successfully');
        router.push("feedbacks")

        e.target.reset(); // clear textarea
      } else {
        alert('Something went wrong');
      }

  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        className="w-full min-h-[120px] border border-dashed p-2 rounded"
        name="message"
        placeholder="Write your feedback..."
      ></textarea>

      <button className="btn btn-primary">
        Add Feedback
      </button>
    </form>
  );
};

export default FeedbackForm;
