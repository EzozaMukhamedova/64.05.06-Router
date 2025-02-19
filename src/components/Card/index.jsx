// import React, { useState, useEffect } from "react";
// import {
//   FaStar,
//   FaShoppingCart,
//   FaBalanceScale,
//   FaHeart,
// } from "react-icons/fa";

// export default function Cards() {
//   const [items, setItems] = useState([]);

//   const [activeIcons, setActiveIcons] = useState({
//     heart: null,
//     balance: null,
//   });

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const response = await fetch("http://localhost:5000/products");
//         const { data } = await response.json();

//         if (!data || !Array.isArray(data)) {
//           console.error("Incorrect data format:", data);
//           return;
//         }
//         setItems(data);
//       } catch (error) {
//         console.error("Failed to fetch products:", error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   const handleIconClick = (iconType, itemId) => {
//     setActiveIcons((prevState) => ({
//       ...prevState,
//       [iconType]: prevState[iconType] === itemId ? null : itemId,
//     }));
//   };

//   return (
//     <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
//       {items.map((item) => (
//         <div
//           key={item.id}
//           className="relative p-4 transition-transform transform bg-white border border-gray-200 rounded-[25px] shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 w-[257px] h-[433px]"
//         >
//           <div className="absolute flex flex-col gap-[10px] space-x-2 text-gray-500 top-3 right-3">
//             <FaHeart
//               className={`cursor-pointer text-[20px] ${
//                 activeIcons.heart === item.id
//                   ? "text-red-500"
//                   : "hover:text-red-500"
//               }`}
//               onClick={() => handleIconClick("heart", item.id)}
//             />
//             <FaBalanceScale
//               className={`cursor-pointer text-[20px] ${
//                 activeIcons.balance === item.id
//                   ? "text-blue-500"
//                   : "hover:text-blue-500"
//               }`}
//               onClick={() => handleIconClick("balance", item.id)}
//             />
//           </div>

//           <img
//             className="object-cover w-full h-48"
//             src={item.image}
//             alt={item.title}
//           />

//           <div className="mt-4">
//             <h3 className="font-semibold text-gray-800 text-md h-[45px]">
//               {item.name}
//             </h3>

//             <div className="flex items-center justify-between">
//               <div className="flex items-center mt-1 text-yellow-400">
//                 {[...Array(5)].map((_, i) => (
//                   <FaStar key={i} />
//                 ))}
//               </div>

//               <span className="ml-auto text-sm text-[#c2c6d1] mt-[3px]">
//                 10 ta sharh
//               </span>
//             </div>

//             <div className="mt-2">
//               <p className="text-[18px] font-bold text-blue-600">
//                 {item.price} so'm
//               </p>
//               <p className="inline-block w-full px-2 py-1 mt-1 text-[14px] text-orange-500 border border-orange-400 rounded-md">
//                 {item.installment} 1500 so'm x 12 oy
//               </p>
//             </div>

//             <div className="flex justify-between mt-4">
//               <button className="px-4 py-2 w-[172px] text-[14px] text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
//                 Hozirroq xarid qilish
//               </button>
//               <button className="py-2 px-4 w-[47px] h-[35px] text-white transition bg-[#00bfaf] rounded-lg cursor-pointer hover:bg-[#00bfafd7] flex justify-center items-center">
//                 <FaShoppingCart />
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

import React, { useContext, useEffect, useState } from "react";
import {
  FaStar,
  FaShoppingCart,
  FaBalanceScale,
  FaHeart,
} from "react-icons/fa";



export default function Card({ product }) {
  return (
    <div
      key={product.id}
      className="relative p-4 transition-transform transform bg-white border border-gray-200 rounded-[25px] shadow-lg cursor-pointer hover:shadow-xl hover:scale-102 w-[257px] h-[433px]"
    >
      <div className="absolute flex flex-col gap-[10px] space-x-2 text-gray-500 top-3 right-3">
        <FaHeart
          className={`cursor-pointer text-[20px] ${
            1 ? "text-red-500" : "hover:text-red-500"
          }`}
        />
        <FaBalanceScale
          className={`cursor-pointer text-[20px] ${
            1 ? "text-blue-500" : "hover:text-blue-500"
          }`}
        />
      </div>
      <img
        className="object-cover w-full h-48"
        src={product.image}
        alt={product.title}
      />
      <div className="mt-4">
        <h3 className="font-semibold text-gray-800 text-md h-[45px]">
          {product.name}
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex items-center mt-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span className="ml-auto text-sm text-[#c2c6d1] mt-[3px]">
            10 ta sharh
          </span>
        </div>
        <div className="mt-2">
          <p className="text-[18px] font-bold text-blue-600">
            {product.price} so'm
          </p>
          <p className="inline-block w-full px-2 py-1 mt-1 text-[14px] text-orange-500 border border-orange-400 rounded-md">
            {product.installment} 1500 so'm x 12 oy
          </p>
        </div>
        <div className="flex justify-between mt-4">
          <button className="px-4 py-2 w-[172px] text-[14px] text-white transition bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600">
            Hozirroq xarid qilish
          </button>
          <button className="py-2 px-4 w-[47px] h-[35px] text-white transition bg-[#00bfaf] rounded-lg cursor-pointer hover:bg-[#00bfafd7] flex justify-center items-center">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
