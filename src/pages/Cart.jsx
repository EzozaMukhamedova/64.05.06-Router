import React, { useContext } from "react";
import { NameContext } from "../context";

export default function Cart() {
  const { cart } = useContext(NameContext);

  function plus(id) {
    console.log(id);
  }

  function minus(id) {
    console.log(id);
  }

  return (
    <div>
      <h1 className="text-[25px] font-bold my-[20px]">
        Cartga qo'shilgan mahsulotlar:
      </h1>
      {cart.map((item) => (
        // <div className="">
        //   {item.product.name} - {item.count}
        //   <img src={item.product.image} alt="" />
        //   {item.product.category}
        //   {item.product.price}
        // </div>
        <>
          <div className="flex items-center p-4 space-x-4 overflow-hidden bg-white rounded-lg shadow-md">
            <img
              src={item.product.image}
              alt={item.product.name}
              className="object-cover w-20 h-20 rounded-lg"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-lg font-semibold">{item.product.name}</h3>
              <span className="text-sm text-gray-500">
                {item.product.category}
              </span>
              <span className="text-sm text-gray-500">
                Miqdori: {item.count}
              </span>
              <span className="text-lg font-bold text-blue-500">
                {item.product.price} so'm
              </span>
              {/* <div className="flex">
                <button
                  className="py-[5px] px-[10px] bg-blue-100"
                  onClick={() => plus(item.product.id)}
                >
                  +
                </button>
                <button
                  className="py-[5px] px-[10px]  bg-amber-400"
                  onClick={() => minus(item.product.id)}
                >
                  -
                </button>
              </div> */}
            </div>
          </div>
        </>
      ))}
    </div>
  );
}
