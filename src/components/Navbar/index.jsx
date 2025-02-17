import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useNameContext } from "../../context";
import logo from "../../assets/asaxiy-logo.svg";
import hamburgerIcon from "../../assets/hamburger.png";
import compareIcon from "../../assets/taqqoslash.svg";
import paymentIcon from "../../assets/payment.svg";
import trackerIcon from "../../assets/tracker.svg";
import cartIcon from "../../assets/cart.svg";
import heartIcon from "../../assets/heart.svg";
import avatarIcon from "../../assets/avatar.svg";

import uzFlag from "../../assets/language-uz.svg";

function Navbar() {
  const { t, i18n } = useTranslation();
  const { isDark, setIsDark } = useNameContext();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  const navbarClassName = isDark
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";
  const linkClassName = ({ isActive }) =>
    isActive ? "text-blue-500" : "text-inherit";

  return (
    <div className="mx-auto ">
      <div className=" p-4 text-white bg-white pl-[40px] pr-[40px] rounded-[5px] shadow-md ">
        <div className="container flex items-center justify-between mx-auto border w-[1350px]">
          {/* HANBUN 1 */}
          <div className="flex items-center">
            <div className="flex mr-10 text-[16px] font-bold">
              <img className="" src={logo} alt="Asaxiy Logo" />
              <button className="flex text-[16px] px-[20px] py-[10px] bg-blue-600 mx-[20px]  rounded-[10px] h-[40px] w-[145px] items-center">
                <img
                  className="mr-[5px] h-[16px]"
                  src={hamburgerIcon}
                  alt="Menu"
                />
                <span className="pl-[5px] pr-[15px]">Bo'limlar</span>
              </button>
              <form action="" className="flex items-center ">
                <input
                  type="text"
                  placeholder="Qidirish..."
                  className="w-[379px] h-10 pl-4 pr-3 border border-r-0 border-blue-500 focus:ring-blue-500 focus:border-blue-500 rounded-l-md placeholder-gray-500"
                />

                <button
                  type="submit"
                  className="h-10 px-4 font-bold text-white bg-blue-500 rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 "
                >
                  Qidirish
                </button>
              </form>
            </div>
          </div>

          <div className="flex items-center ">
            {/* HANBUN */}
            <div className="flex items-center font-bold text-black ">
              {/* Taqqoslash */}
              <button className="flex flex-col items-center justify-center w-20 h-20 text-xs text-center cursor-pointer hover:text-blue-500">
                <img
                  src={compareIcon}
                  alt="Taqqoslash"
                  className="w-6 h-6 mb-1"
                />

                <span className="">{t("taq")}</span>
              </button>

              {/* To'lov */}
              <button
                className="flex flex-col items-center justify-center w-20 h-20 p-2 text-xs text-center cursor-pointer hover:text-blue-500"
                aria-label="To'lov"
              >
                <img src={paymentIcon} alt="To'lov" className="w-6 h-6 mb-1" />
                <span> {t("tolov")} </span>
              </button>

              {/* Trek */}
              <button
                className="flex flex-col items-center justify-center w-20 h-20 p-2 text-xs text-center cursor-pointer hover:text-blue-500"
                aria-label="Trek"
              >
                <img src={trackerIcon} alt="Trek" className="w-6 h-6 mb-1" />
                <span> {t("trek")}</span>
              </button>

              {/* Savatcha */}
              <button className="flex flex-col items-center justify-center w-20 h-20 p-2 text-xs text-center cursor-pointer hover:text-blue-500">
                <img src={cartIcon} alt="Savatcha" className="w-6 h-6 mb-1 " />
                <span> {t("savat")}</span>
              </button>

              {/* Sevimlilar */}
              <button className="flex flex-col items-center justify-center w-20 h-20 p-2 text-xs text-center transition-all cursor-pointer hover:text-blue-500 ">
                <img
                  src={heartIcon}
                  alt="Sevimlilar"
                  className="w-6 h-6 mb-1 hover:text-blue-500"
                />
                <span className="hover:text-blue-500">{t("sevim")}</span>
              </button>
              <div className="flex flex-col gap-[5px] justify-center items-center font-bold">
                <img src={uzFlag} alt="O'zbekcha" className="w-[20px] " />
                <select
                  id="language-select"
                  className="text-xs text-black border-white rounded cursor-pointer hover:text-blue-500"
                  onChange={(e) => changeLanguage(e.target.value)}
                  defaultValue="uz"
                >
                  <option value="uz">O'zbekcha</option>
                  <option value="en">English</option>
                  <option value="jp">Japan</option>
                </select>
              </div>
              {/* Kirish */}
              <button className="flex flex-col items-center justify-center w-20 h-20 p-2 text-xs text-center transition-all cursor-pointer hover:text-blue-500 ">
                <img
                  src={avatarIcon}
                  alt="Kirish"
                  className="w-6 h-6 mb-1 hover:text-blue-500"
                />
                <span className="hover:text-blue-500">{t("kirish")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* PASKT NAV  */}
        <nav className="w-[1325px] mx-auto border-t border-gray-300">
          <ul className="flex space-x-4 text-gray-600 mt-[20px] justify-between font-bold">
            <li>
              <NavLink to="/" className={linkClassName}>
                Asosiy
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClassName}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={linkClassName}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin" className={linkClassName}>
                Admin
              </NavLink>
            </li>
            {/* OQ QORA  */}
            <div className="flex gap-[20px]">
              <div className="">
                <div className="flex items-center justify-center">
                  <button
                    className="px-6 py-2 text-sm font-semibold text-gray-800 bg-white border border-r-0 border-gray-300 cursor-pointer rounded-l-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsDark(false)}
                  >
                    OQ
                  </button>
                  <button
                    className="px-6 py-2 text-sm font-semibold text-white bg-blue-600 cursor-pointer rounded-r-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onClick={() => setIsDark(true)}
                  >
                    QORA
                  </button>
                </div>
              </div>
            </div>
          </ul>
        </nav>

        {/* SHOTTAN */}
      </div>
    </div>
  );
}

export default Navbar;
