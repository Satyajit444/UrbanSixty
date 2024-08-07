"use client";

import { useEffect, useState } from "react";
import ProductCard from "../components/products/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/provider/redux/store";
import { set_all_product } from "@/provider/redux/product/product";
import { Product } from "@/types";
import Loader from "@/ui/Loader";
import { getAllProduct } from "@/api/products/product";

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
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await getAllProduct();
      if (response.success && response.data) {
        setAllProducts(response.data);
        dispatch(set_all_product(response.data));
        setError("");
      } else {
        setError(
          response.message || "An error occurred while fetching products."
        );
        setAllProducts([]);
      }
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
        {allProducts && (
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {allProducts.map((product, key) => (
              <ProductCard key={key} product={product} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
