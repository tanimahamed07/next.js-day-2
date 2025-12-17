// components/FeedbackCard.jsx
import { formatDistanceToNow } from "date-fns";

const FeedbackCard = ({ feedback, onUpdate, onDelete }) => {
  const { _id, message, date } = feedback;

  return (
    <div className="rounded-xl border p-4 shadow-sm bg-white">
      <p className="text-gray-800 mb-3">{message}</p>

      <div className="flex items-center justify-between">
        {/* <span className="text-sm text-gray-500">
          {formatDistanceToNow(new Date(date), { addSuffix: true })}
        </span> */}

        <div className="flex gap-2">
          <button
            // onClick={() => onUpdate(_id)}
            className="px-3 py-1 text-sm rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Update
          </button>

          <button
            // onClick={() => onDelete(_id)}
            className="px-3 py-1 text-sm rounded-md bg-red-500 text-white hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
