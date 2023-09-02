import React, { useEffect, useState } from "react";
import { getProducts } from "../store/actions";
import { getStoreState } from "../utilities";
import { storeKeys } from "../constants";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState(getStoreState(storeKeys.productReducer));
  console.log("products", products);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await getProducts([]);
  //     setProducts(products);
  //   };
  //   fetchProducts();
  // }, []);
  return (
    <div>
      {products?.map((product, index) => (
        <ProductCard product={product} key={`product-${index}`}/>
      ))}
    </div>
  );
};

export default Products;
