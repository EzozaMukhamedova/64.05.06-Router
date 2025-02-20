import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Navbar from "../Navbar";
import { NameContext } from "../../context";

export default function Admin() {
  const { token } = useContext(NameContext);
  // const navigate = useNavigate();
  // console.log(token);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("Token Admin:", token); // Tokenni konsolga chiqmayaptiiiiiiiii

    const formData = new FormData(e.target);
    const imageFile = e.target.image.files[0];
    if (imageFile) {
      formData.append("image", imageFile);
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      let res;
      if (imageFile) {
        res = await axios.post(
          "http://localhost:5000/products",
          formData,
          config
        );
      } else {
        const productData = {
          name: formData.get("name"),
          price: Number(formData.get("price")),
        };
        config.headers["Content-Type"] = "application/json";
        res = await axios.post(
          "http://localhost:5000/products",
          JSON.stringify(productData),
          config
        );
      }

      if (res.status === 200 || res.status === 201) {
        toast.success("Muvaffaqiyatli qo'shildi!!");
      } else {
        throw new Error(`res status: ${res.status}`);
      }
    } catch (err) {
      console.error("Error", err);
      toast.error(err.response?.data?.message || "Xatolik yuz berdi!!");
    }
  }

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="flex items-center justify-center min-h-screen bg-gray-100 from-cyan-100 to-blue-200">
        <div className="w-full max-w-4xl p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-bold text-center text-blue-500">
            ADMIN PANEL
          </h1>
          <form className="grid grid-cols-2 gap-6" onSubmit={handleSubmit}>
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
              type="text-area"
              placeholder="Description"
              name="description"
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="number"
              placeholder="Rating"
              name="rating"
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="number"
              placeholder="Price"
              name="price"
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="number"
              placeholder="Stock"
              name="price"
              required
            />
            <input
              className="p-3 border-2 border-gray-300 rounded focus:outline-none focus:border-blue-200"
              type="file"
              name="image"
              accept="image/*"
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
