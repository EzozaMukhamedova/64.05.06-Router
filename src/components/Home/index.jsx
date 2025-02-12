import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../Loading";
import Card from "../Card";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const res = await axios.get("http://localhost:5000/products");
        setProducts(res.data.data);
      } catch (err) {
        setError("Error: " + err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 bg-image">
      <div className="py-10 mx-auto  w-[1200px] ">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Products
        </h1>
        {error && <p className="text-center text-red-500">{error}</p>}
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-4 gap-4 p-4">
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
