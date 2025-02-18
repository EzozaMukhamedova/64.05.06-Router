import React, { useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import { NameContext } from "../../context/index";

function Login() {
  const { setToken } = useContext(NameContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username: e.target[0].value,
        password: e.target[1].value,
      });
      const token = res.data?.data?.token;
      console.log(token);

      if (token) {
        setToken(token);
        localStorage.setItem("token", token);
        navigate("/admin");
      } else {
        throw new Error("Token not found");
      }
    } catch (err) {
      console.error(err);
      toast.error("Login yoki parol xato");
    }
  }

  return (
    <>
      <Navbar />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="max-w-sm p-6 mx-auto my-10 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-[24px] font-semibold text-center">
          Kirish yoki shaxsiy kabinet <br /> yaratish
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            className="w-full p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="w-full p-3 mb-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            required
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-[12px] text-sm w-full sm:w-auto px-5 py-2.5 text-center text-[14px]"
            >
              Faollashtirish kodini oling
            </button>
          </div>

          <div className="my-4 text-center">yoki</div>
          <div className="flex justify-center space-x-4">
            <button className="flex items-center justify-center p-3 bg-gray-200 rounded-[12px] w-[117px] h-[43px]">
              <img className="w-[22px]" src={Google} alt="Google" />
            </button>
            <button className="flex items-center justify-center p-3 bg-gray-200 rounded-[12px] w-[117px] h-[43px]">
              <img className="w-[22px]" src={Facebook} alt="Facebook" />
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
