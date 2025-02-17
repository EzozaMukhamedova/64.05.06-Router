import React, { useState } from "react";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Phone Number Submitted:", phoneNumber);
  };

  return (
    <>
      <Navbar />
      <div className="max-w-sm p-6 mx-auto my-10 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-[24px] font-semibold text-center">
          Kirish yoki shaxsiy kabinet <br /> yaratish
        </h2>
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-400"
          >
            Telefon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder="+998(__) __-__-__"
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
