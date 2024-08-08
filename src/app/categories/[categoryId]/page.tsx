"use client";

import { getCategoryProducts } from "@/api/categories/category";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function Category() {
  const params = useParams();
  const [categoryProducts, setCategoryProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    fetchProductByCategory();
  }, []);
  const fetchProductByCategory = async () => {
    try {
      const productResponse = await getCategoryProducts(
        params?.categoryId as string
      );
      if (productResponse.success && productResponse.data) {
        setCategoryProducts(productResponse.data);
      } else {
        setError(
          productResponse.message ||
            `An error occurred while fetching products for ${params.categoryId}.`
        );
      }
    } catch (err) {
      setError(
        (err as Error)?.message ||
          "An error occurred while fetching categories and products."
      );
      setCategoryProducts([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>; // Loader component or message
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Error message with some styling
  }

  return (
    <div>
      <div className="w-full flex lg:flex-row rounded-lg  h-[20rem] m-2 flex-col-reverse justify-start items-center text-white pb-10 bg-gradient-to-r from-black via-gray-700 to-gray-500  max-w-full text-3xl">
        <h1 className=" text-white px-10 text-left">{params?.categoryId}</h1>
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {categoryProducts.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Category;
