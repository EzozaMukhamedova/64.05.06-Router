import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import Card from "../Card";
import { useTranslation } from "react-i18next";
import { useNameContext } from "../../context/index";
import Navbar from "../Navbar/index";
import Footer from "../Footer/index";
import ProductSwiper from "../Swiper/index";
import ImageSwiper from "../Swiper_bottom/index";

function Home() {
  const [products, setProducts] = useState([]);
  const { isDark, setIsDark } = useNameContext();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function fetchPr() {
      const res = await axios.get("http://localhost:5000/products");
      setProducts(res.data.data);
    }
    fetchPr();
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Navbar />

      <div className="py-10 mx-auto w-[1340px]">
        <ProductSwiper />

        <div className="mt-[20px]">
          <ImageSwiper />
        </div>

        <div className="flex gap-8 p-4">
          <div className="">
            <h1 className="mb-4 text-2xl font-bold">Mahsulotlar</h1>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-[10px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {products.map((item) => (
            <Card product={item} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
