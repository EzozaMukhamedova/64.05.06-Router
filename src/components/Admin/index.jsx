import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../Navbar";


export default function Admin() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await axios.post("https://dummyjson.com/posts", formData);
      toast.success("Product successfully added!");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "An error occurred");
    }
  }

  return (
    <>    <Navbar />
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-image from-cyan-100 to-blue-200">
  
      <ToastContainer />
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-lg bg-[#ffffff3a]">
        <h1 className="mb-6 text-3xl font-bold text-center text-gray-900">
          ADMIN PANEL
        </h1>
        <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
          <input
            className="p-3 border-2 rounded border-[#35333325] focus:outline-none focus:border-blue-200"
            type="text"
            placeholder="ID"
            name="id"
          />
          <input
            className="p-3 border-2 border-[#35333325] rounded focus:outline-none focus:border-blue-200"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="p-3 border-2 border-[#35333325] rounded focus:outline-none focus:border-blue-200"
            type="text"
            placeholder="Category"
            name="category"
          />
          <input
            className="p-3 border-2 border-[#35333325] rounded focus:outline-none focus:border-blue-200"
            type="number"
            placeholder="Price"
            name="price"
          />
          <textarea
            className="col-span-2 p-3 border-2 border-[#35333325] rounded focus:outline-none focus:border-blue-200"
            placeholder="Description"
            name="description"
            rows="4"
          ></textarea>
          <input
            className="p-3 border-2 border-[#35333325] rounded focus:outline-none focus:border-blue-200"
            type="file"
            placeholder="Image"
            name="image"
          />
          <input
            className="p-3 border-2 border-[#35333325] rounded focus:outline-none focus:border-blue-200"
            type="number"
            placeholder="Rating"
            name="rating"
            min={1}
            max={5}
          />
          <input
            className="p-3 border-2 border-[#35333325] rounded focus:outline-none focus:border-blue-200"
            type="number"
            placeholder="Stock"
            name="stock"
          />
          <button className="col-span-2 px-4 py-2 font-bold text-white bg-[#65565653] rounded hover:bg-[#65565686] hover:cursor-pointer focus:outline-none focus:ring-4 focus:bg-[#655656d0]">
            Add Product
          </button>
        </form>
      </div>
    </div>
    </>
  );
}
