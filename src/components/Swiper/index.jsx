import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Star from "../../assets/star (1).png";
import { useTranslation } from "react-i18next";
import axios from "axios";

const ProductSwiper = () => {
  const [products, setProducts] = useState([]);

  const { t, i18n } = useTranslation();
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:5000/products");
        console.log(response.data.data);
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div className="mt-[-30px] w-[1340px]">
      <h1 className="text-[20px] font-bold text-left my-[8px] gray-800 text- ">
        {t("title")}
      </h1>
      <div className="py-[20px] px-[20px] mx-auto bg-[#006BFF] rounded-[10px]">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          spaceBetween={-200}
          slidesPerView={6}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          className="pb-8"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative p-[10px] bg-white rounded-lg shadow-lg h-[310px] w-[200px]">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-cover w-full h-40 mb-2 rounded-md"
                />
                <h3 className="text-sm font-bold text-gray-800 truncate mb-[5px]">
                  {product.name}
                </h3>
                <div className="flex justify-between">
                  <span className="text-[14px] text-gray-500 line-through">
                    {Math.floor(product.price * 1.2)} so'm
                  </span>
                  <span className="text-[#dc3545] text-[14px]">12%</span>
                </div>
                <div className="flex items-center justify-between space-x-2">
                  <span className="font-bold text-blue-600">
                    {product.price} so'm
                  </span>

                  <span className="flex items-center ">
                    <img src={Star} alt="Star Icon" className="w-4 h-4 " />
                    <span className="ml-[3px] text-blue-600 ">5</span>
                  </span>
                </div>

                <button className="w-full h-[29px] py-1 mt-[20px] text-sm text-white bg-blue-500 rounded">
                  28.02.2025
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductSwiper;
