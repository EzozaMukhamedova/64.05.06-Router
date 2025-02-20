import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Navbar from "../components/Navbar";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      console.log(res.data.data);
      setProduct(res.data.data);
    }
    fetchProduct();
  }, []);

  return (
    // <div>
    //   Product - {id} {product.name} {product.category} {product.price}{" "}
    //   {product.rating} {product.stock}
    //   <img src={product.image}  alt="" />
    // </div>
    <>
      <Navbar />
      <div className="flex justify-center  py-[100px] bg-gray-100">
        <div className="flex max-w-[1000px] h-[500px] overflow-hidden bg-white border border-blue-300 shadow-lg rounded-lg">
          <div className="w-1/2">
            <img
              className="object-cover w-full h-full rounded-l-lg"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="w-1/2 p-4">
            <div className="flex justify-between">
              <span className="text-[20px] font-semibold text-blue-500">
                SKIDKA -15%
              </span>
              <div className="flex items-center text-gray-500">
                <span className="ml-1 text-[18px] text-blue-500">
                  ⭐️ {product.rating}{" "}
                </span>
              </div>
            </div>
            <h3 className="mt-2 mb-2 text-[25px] font-bold">{product.name}</h3>
            <div className="flex items-center justify-between">
              <span className="text-[25px] font-bold text-red-500">
                {product.price} so'm
              </span>
              <button className="px-3 py-2 text-[16px] text-white  bg-blue-500 rounded hover:bg-blue-600">
                Tarqatish
              </button>
            </div>
            <p className="mt-4 text-[16px]  text-gray-500">
              Brend: ..... {product.category}
            </p>
            <p className="text-[16px]  text-gray-500">
              Model: ..... {product.description}
            </p>
            <p className="text-[16px]  text-gray-500">
              Qoldiq: .....
              {product.stock} ta
            </p>
            <div className="flex mt-4 space-x-2">
              <button className="px-5 py-3 text-[18px] text-white bg-green-500 rounded cursor-pointer hover:bg-green-600">
                Savatchaga qo'shing
              </button>
              <button className="px-5 py-3 text-[18px] text-blue-500 border border-blue-500 rounded hover:bg-blue-600 hover:text-white cursor-pointer">
                Bir marta bosib sotib oling
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
