"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/provider/redux/store";
import { set_all_product } from "@/provider/redux/product/product";
import { Product } from "@/types";
import Loader from "@/ui/Loader";

export default function Home() {
  const reduxProductData = useSelector(
    (state: RootState) => state.all_products
  );
  const dispatch: AppDispatch = useDispatch();
  const [allProducts, setAllProducts] = useState<Product[]>(
    Array.isArray(reduxProductData) ? reduxProductData : []
  );
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllProduct();
  }, []);

  const getAllProduct = async () => {
    try {
      const response = await fetch(`${process?.env?.PRODUCTS_API}?limit=1`);
      if (!response.ok) {
        throw new Error(`HTTP error: Status ${response.status}`);
      }
      const products: Product[] = await response.json();
      setAllProducts(products);
      dispatch(set_all_product(products));
      setError("");
    } catch (err) {
      setError(
        (err as Error)?.message || "An error occurred while fetching products."
      );
      setAllProducts([]);
    } finally {
      setLoading(false);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 lg:p-24">
    

      <div>
        {loading && (
          <Loader
            color="text-orange-500"
            size="w-3 h-3"
            loadingTitle="Loading Products..."
          />
        )}
        {error && <div className="text-red-700">{error}</div>}
        {allProducts && <ProductCard products={allProducts} />}
      </div>
    </main>
  );
}
