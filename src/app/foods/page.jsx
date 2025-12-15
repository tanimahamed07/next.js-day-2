import FoodCard from "@/components/cards/FoodCard";
import React from "react";

export function generateStaticParams() {
  return [{ id: "52898" }, { id: "52955" }, { id: "52962" }];
}

import CartItems from "./CartItems";
import InputSearch from "@/components/InputSearch";
const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } }
  );
  const data = await res.json();
  return data.foods || [];
};

export default async function FoodsPage({ searchParams }) {
  const { search = "" } = await searchParams;
  const foods = await getFoods(search);

  return (
    <div>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-400">{foods.length}</span>Found Foods
      </h2>
      <div>
        <InputSearch></InputSearch>
      </div>
      <div className="flex gap-5">
        <div className="flex-1 grid my-5 grid-cols-3 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-[250px] border-2 rounded-xl p-4">
          <h2 className="text-2xl font-bold">Cart Items</h2>
          <CartItems></CartItems>
          <hr />
        </div>
      </div>
    </div>
  );
}
