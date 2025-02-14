import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import Card from "../Card";
import { useTranslation } from "react-i18next"; 
import { useNameContext } from "../../context/index";
import Navbar from "../Navbar/index";

function Home() {
  const [products, setProducts] = useState([]);
  const { isDark, setIsDark } = useNameContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { t, i18n } = useTranslation(); 

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axios.get("https://dummyjson.com/posts");
        setProducts(res.data.posts);
      } catch (err) {
        setError("Error: " + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className={`min-h-screen ${isDark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Navbar />
   
      <button
        className="p-2 border bg-amber-50"
        onClick={() => setIsDark(!isDark)}
      >
        Toggle Theme
      </button>
      <button
        className="p-2 border cursor-pointer bg-amber-50"
        onClick={() => i18n.changeLanguage("uz")}
      >
        uz
      </button>
      <button
        className="p-2 border cursor-pointer bg-amber-50"
        onClick={() => i18n.changeLanguage("eng")}
      >
        eng
      </button>
      <button
        className="p-2 border cursor-pointer bg-amber-50"
        onClick={() => i18n.changeLanguage("jp")}
      >
        jp
      </button>
      <h1>Iqtisodiyot yangiliklari</h1>
      <div className="py-10 mx-auto w-[1300px]">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          {t("title")}
        </h1>
        {error && <p className="text-center text-red-500">{error}</p>}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-4 gap-8 p-4">
            {products.map((item) => (
              <Card key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
