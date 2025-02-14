// import React, { useState } from "react";
// import { useTranslation } from "react-i18next";

// function LanguageDropdown() {
//   const [isOpen, setIsOpen] = useState(false);
//   const { t, i18n } = useTranslation();

//   const languages = [
//     { code: "uz", name: t("O'zbekcha") },
//     { code: "en", name: t("English") },
//     { code: "jp", name: t("日本語") },
//   ];

//   const toggleDropdown = () => setIsOpen(!isOpen);

//   const changeLanguage = (code) => {
//     i18n.changeLanguage(code);
//     setIsOpen(false);
//   };

//   return (
//     <div className="relative">
//       <button onClick={toggleDropdown} className="p-2 border">
//         {t("Languages")}
//       </button>
//       {isOpen && (
//         <div className="absolute right-0 w-40 mt-2 bg-white shadow-md">
//           {languages.map((lang) => (
//             <button
//               key={lang.code}
//               onClick={() => changeLanguage(lang.code)}
//               className="block w-full px-4 py-2 text-left hover:bg-gray-100"
//             >
//               {lang.name}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default LanguageDropdown;
