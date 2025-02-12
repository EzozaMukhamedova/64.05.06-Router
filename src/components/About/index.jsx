import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 bg-image from-cyan-100 to-blue-200">
      <div className="w-full max-w-4xl p-8 rounded-lg shadow-xl bg-[#ffffff3a]">
        <h1 className="mb-4 text-4xl font-bold text-center text-gray-900">
          Biz Haqimizda
        </h1>
        <p className="mb-4 text-lg text-gray-700">
          Uzum Market - bu sizning kundalik ehtiyojlaringizni qondirish uchun
          mahsulotlar va xizmatlar taklif qiluvchi onlayn platforma. Biz
          mijozlarga sifatli va qulay xarid tajribasini ta'min etishni maqsad
          qilganmiz.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              Tarix va Yutuqlar
            </h2>
            <ul className="pl-5 mt-2 text-gray-700 list-disc">
              <li>2010 yil - Uzum Market asos solindi.</li>
              <li>
                2015 yil - Biz 100,000 foydalanuvchilarni qo'lga kiritdik.
              </li>
              <li>
                2020 yil - Bizning ilovamizni milliondan ortiq odamlar yuklab
                oldi.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Jamoa</h2>
            <p className="mt-2 text-gray-700">
              Bizning jamoamiz sohada tajribali mutaxassislar to'plamidan
              iborat. Ularning har biri Uzum Marketning rivojlanishi va yuksak
              sifatini ta'minlash uchun sa'y-harakatlar qilmoqda.
            </p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a
            href="#"
            className="px-4 py-2 font-bold text-white transition duration-300 bg-[#65565653] rounded hover:bg-[#65565686] focus:outline-none focus:ring-4 focus:ring-[#655656d0]"
          >
            Ko'proq O'qing
          </a>
        </div>
        <div className="flex justify-center mt-8 space-x-4">
          <FaFacebook className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800" />
          <FaTwitter className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600" />
          <FaInstagram className="text-2xl text-pink-600 cursor-pointer hover:text-pink-800" />
          <FaLinkedin className="text-2xl text-blue-700 cursor-pointer hover:text-blue-900" />
        </div>
      </div>
    </div>
  );
}
