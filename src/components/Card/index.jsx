import React from "react";

export default function Card({ item }) {
  return (
    <div
      key={item.id}
      className="p-4 transition-all duration-300 bg-white border border-[#4b484821] rounded-lg shadow-lg hover:bg-gray-50 hover:shadow-xl hover:scale-102 hover:cursor-pointer"
    >
      <h3 className="text-lg font-bold h-[30px]">{item.name}</h3>
      <img
        src={item.image}
        alt={item.name || "Product Image"}
        className="object-cover w-full rounded h-90"
      />
      <p className="text-md">Category: {item.category}</p>
      <p className="text-md">Price: ${item.price}</p>
      <p className="text-md">Stock: {item.stock}</p>
      <p className="text-md">Rating: {item.rating} / 5</p>
    </div>
  );
}
