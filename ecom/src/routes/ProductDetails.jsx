import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiRoutes from "../utils/ApiRoutes";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(ApiRoutes.products.one(id));
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  return product;
};

export default ProductDetails;
