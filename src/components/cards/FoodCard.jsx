import Link from "next/link";
import CurtButton from "../buttons/CurtButton";
import Image from "next/image";

const FoodCard = ({ food, onViewDetails, onAddToCart, id }) => {
  console.log(food.image);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Image */}
      <div className="relative h-48 w-full">
        <Link href={"/"}>
          {/* <img
            src={food.foodImg}
            alt={food.title}
            className="h-full w-full object-cover"
          /> */}
          <Image
            src={food.foodImg}
            width={300}
            height={150}
            alt={food.title}
            className="h-full w-full object-cover"
          ></Image>
        </Link>
        <span className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
          {food.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {food.title}
        </h3>

        <p className="text-sm text-gray-500">
          Price:{" "}
          <span className="font-medium text-gray-800">${food.price}</span>
        </p>

        {/* Actions */}
        <div className="flex gap-2 pt-2">
          <Link
            href={`/foods/${food.id}`}
            className="flex-1 text-sm font-medium border border-gray-300 rounded-lg px-3 py-2 hover:bg-gray-100 transition"
          >
            View Details
          </Link>

          <CurtButton food={food}></CurtButton>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
