import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const Product = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchProduct() {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      console.log(res.data.data);
      setProduct(res.data.data);
    }
    fetchProduct();
  }, []);

  return (
    <div>
      Product - {id} {product.name} {product.category} {product.price}{" "}
      {product.rating} {product.stock}
      <img src={product.image}  alt="" />
    </div>
  );
};

export default Product;
