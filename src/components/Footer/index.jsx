import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Cart from "../../assets/card.svg";
import Yur from "../../assets/market.svg";
import Yet from "../../assets/yetkazib.svg";
import Return from "../../assets/return.svg";

export default function Footer() {
  return (
    <>
      <footer className="py-10 text-white bg-blue-600">
        <div className="container mx-auto w-[1350px]">
          {/* Yuqori qism */}
          <div className="flex flex-wrap h-[150px]   mx-auto items-center  justify-between py-[20px] px-[50px] text-black bg-white rounded-[20px]">
            <div className="flex items-center gap-2">
              <img src={Yur} alt="" />
              <span className="flex flex-col text-[18px] font-semibold gap-[5px] ml-[20px]">
                Endi bozorga borishga hojat yo'q
                <p className="text-[16px] text-gray-400">
                  Bizda qulay narxlar <br /> va uyga yetkazib <br /> berish
                  mavjud
                </p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={Yet} alt="" />
              <span className="flex flex-col text-[18px] font-semibold ml-[20px] gap-[5px]">
                Tez yetkazib berish
                <p className="text-[16px] text-gray-400">
                  Bizning xizmatimiz <br /> sizni ajablantiradi
                </p>
              </span>
            </div>
            <div className="flex gap-2 -center flex-">
              <img src={Return} alt="" />
              <span className="flex flex-col text-[18px] font-semibold  ml-[20px] gap-[5px]">
                Siz uchun qulayliklar
                <p className="text-[16px] text-gray-400">
                  Nosozlik yuzaga kelganda <br /> tez rasmiylashtirish va <br />
                  qaytarish kafolati
                </p>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img src={Cart} alt="" />
              <span className="text-[18px] font-semibold ml-[20px] gap-[5px]">
                Bo'lib to'lash
                <p className="text-[16px] text-gray-400">
                  3, 6 yoki 12 oy davomida <br /> oldindan to'lov yo'q
                </p>
              </span>
            </div>
          </div>
        </div>
      </footer>

      <footer>
        {/* Pastki qism */}
        <div className="grid grid-cols-2 gap-6 mt-10 md:grid-cols-4  w-[1350px] mx-auto">
          <div>
            <h3 className="mb-4 font-bold text-[20px]">Ma'lumotlar</h3>
            <ul className="space-y-2 text-[16px] text-[#212529]">
              <li>Ko'p so'raladigan savollar</li>
              <li>Yangiliklar</li>
              <li>Blog</li>
              <li>Bizning brendlarimiz</li>
              <li>Ommaviy oferta</li>
              <li>Sayt xaritasi</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-[20px]">Biz bilan aloqa</h3>
            <ul className="space-y-2 text-sm text-[#212529] text-[16px]">
              <li>📞 +998 71 200 01 05</li>
              <li>📧 info@asaxiy.uz</li>
              <li>💬 Telegram bot</li>
              <li>📍 Chilonzor 45/2, Toshkent</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-[20px] ml-[30px]">
              Yetkazib berish va do'konlar
            </h3>
            <ul className="space-y-2 text-sm font-bold text-[#212529] text-[16px] w-[270px] mx-auto text-center">
              <li className="py-[10px] h-[55px] w-full rounded-2xl bg-gray-200">
                Bizning do'konlar
              </li>
              <li className="py-[10px] h-[55px] w-full rounded-2xl bg-gray-200">
                Olib ketish punktlari
              </li>
              <li className="py-[10px] h-[55px] w-full rounded-2xl bg-gray-200">
                Yetkazib berish
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-[20px]">To'lov turlari</h3>
            <div className="flex gap-4 text-[#212529] text-[16px]">
              <span className="px-4 py-2 bg-gray-100 rounded-md">Uzum</span>
              <span className="px-4 py-2 bg-gray-100 rounded-md">Payme</span>

              <span className="px-4 py-2 bg-gray-100 rounded-md">VISA</span>
              <span className="px-4 py-2 bg-gray-100 rounded-md">
                Mastercard
              </span>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <FaFacebook className="text-2xl text-blue-600 cursor-pointer hover:text-blue-800" />
              <FaTwitter className="text-2xl text-blue-400 cursor-pointer hover:text-blue-600" />
              <FaInstagram className="text-2xl text-pink-600 cursor-pointer hover:text-pink-800" />
              <FaLinkedin className="text-2xl text-blue-700 cursor-pointer hover:text-blue-900" />
            </div>
          </div>
        </div>

        <div className="mt-6 text-sm text-center  border-t w-[1350px] mx-auto border-gray-300 py-[20px] text-[#212529]">
          2015 - 2025 Internet-do’kon asaxiy.uz: Mahsulotni yetkazib berish
          barcha viloyatlarda amalga oshiriladi. Barcha huquqlar himoyalangan.
        </div>
      </footer>
    </>
  );
}
