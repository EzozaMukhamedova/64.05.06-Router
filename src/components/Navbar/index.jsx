import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { useNameContext } from "../../context";
import ThemeToggle from "../Toggle";

function Navbar() {
  const { i18n } = useTranslation();
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
    <div className="w-[1200px] mx-auto">
      <div className="bg-image"></div>
      <div className=" p-4 text-white bg-gray-900 pl-[40px] pr-[40px] rounded-[5px] shadow-2xl">
        {/* <img src="../../assets/uylar.png" alt="" /> */}
        <div className="container flex items-center justify-between mx-auto">
          <div className="flex items-center">
            <div className="mr-10 text-xl font-bold">KUN.UZ</div>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <NavLink to="/" className={linkClassName}>
                    Asosiy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/ozbekiston" className={linkClassName}>
                    O'zbekiston
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jahon" className={linkClassName}>
                    Jahon
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/jamiyat" className={linkClassName}>
                    Jamiyat
                  </NavLink>
                </li>
                {/* <li>
                  <NavLink to="/sport" className={linkClassName}>
                    Sport
                  </NavLink>
                </li> */}
              </ul>
            </nav>
          </div>
          <div className="flex gap-[20px]">
            <div className="">
              <div className="flex items-center justify-center">
                <button
                  className="py-1 px-4 cursor-pointer text-black bg-white border border-gray-300 rounded-bl-[4px] rounded-tl-[4px] transition-colors duration-300 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setIsDark(false)}
                >
                  OQ
                </button>
                <button
                  className="cursor-pointer py-1 px-4 bg-black text-white border border-gray-300 rounded-br-[4px] rounded-tr-[4px] transition-colors duration-300 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setIsDark(true)}
                >
                  QORA
                </button>
              </div>

              {/* <ThemeToggle /> */}
            </div>
            <div className="flex gap-[20px] justify-center items-center font-bold">
              <select
                id="language-select"
                className="px-2 py-1 text-white bg-gray-800 border border-white rounded cursor-pointer"
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue="uz"
              >
                <option value="uz">O'zbekcha</option>
                <option value="en">English</option>
                <option value="jp">Japanese</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
