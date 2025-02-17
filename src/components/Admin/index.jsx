import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../Navbar";

export default function Admin() {
  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);

    // Fayl bo'lsa, formData'ga qo'shamiz
    const imageFile = e.target.image.files[0];
    if (imageFile) {
      formData.append("image", imageFile);
    }

    // JSON formatga o'tkazamiz (rasm bundan mustasno)
    const productData = {
      id: formData.get("id"),
      name: formData.get("name"),
      category: formData.get("category"),
      price: Number(formData.get("price")), // Son qiymatlar
      description: formData.get("description"),
      rating: Number(formData.get("rating")),
      stock: Number(formData.get("stock")),
    };

    try {
      let res;
      if (imageFile) {
        // Agar rasm yuklanayotgan bo‘lsa, FormData bilan jo‘natamiz
        res = await axios.post("http://localhost:5000/products", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
      } else {
        // Agar rasm yo‘q bo‘lsa, JSON formatda jo‘natamiz
        res = await axios.post("http://localhost:5000/products", productData, {
          headers: { "Content-Type": "application/json" },
        });
      }

      toast.success("Product successfully added!");
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message || "An error occurred");
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 from-cyan-100 to-blue-200">
        <ToastContainer />
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-center text-blue-500">
            ADMIN PANEL
          </h1>
          <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="text"
              placeholder="ID"
              name="id"
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="text"
              placeholder="Category"
              name="category"
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="number"
              placeholder="Price"
              name="price"
              required
            />
            <textarea
              className="col-span-2 p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              placeholder="Description"
              name="description"
              rows="4"
              required
            ></textarea>
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="file"
              name="image"
              accept="image/*"
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="number"
              placeholder="Rating"
              name="rating"
              min={1}
              max={5}
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="number"
              placeholder="Stock"
              name="stock"
              required
            />
            <button className="col-span-2 px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 hover:cursor-pointer focus:outline-none focus:ring-4">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
