"use client";

import { useEffect, useState } from "react";
import ProductCard from "./components/products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { set_all_product } from "@/provider/redux/product/product";

export default function Home() {
  const reduxProductData = useSelector((state) => state.allProductReducer);
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState(
    Array.isArray(reduxProductData) ? reduxProductData : []
  );
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products?limit=6`);
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      let products = await response.json();
      setAllProducts(products);
      dispatch(set_all_product(products));

      setError("");
    } catch (err) {
      setError(err?.message);
      setAllProducts([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
      <div className="">
        {loading && <div className="text-xl font-medium">Loading...</div>}
        {error && <div className="text-red-700">{error}</div>}
        {allProducts && <ProductCard products={allProducts} />}
      </div>
    </main>
  );
}
