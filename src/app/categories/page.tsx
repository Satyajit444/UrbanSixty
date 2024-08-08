"use client";

import { getAllCategory, getCategoryProducts } from "@/api/categories/category";
import ProductCard from "@/components/products/ProductCard";
import { Product } from "@/types";
import React, { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState<{
    [key: string]: Product[];
  }>({});
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  const fetchData = async () => {
    try {
      const categoryResponse = await getAllCategory();
      if (categoryResponse.success && categoryResponse.data) {
        setCategories(categoryResponse.data);
        setError("");

        const productsByCategory: { [key: string]: Product[] } = {};
        for (const category of categoryResponse.data) {
          const productResponse = await getCategoryProducts(category);
          if (productResponse.success && productResponse.data) {
            productsByCategory[category] = productResponse.data;
          } else {
            setError(
              productResponse.message ||
                `An error occurred while fetching products for ${category}.`
            );
          }
        }
        setCategoryProducts(productsByCategory);
      } else {
        setError(
          categoryResponse.message ||
            "An error occurred while fetching categories."
        );
        setCategories([]);
      }
    } catch (err) {
      setError(
        (err as Error)?.message ||
          "An error occurred while fetching categories and products."
      );
      setCategories([]);
      setCategoryProducts({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Loader component or message
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Error message with some styling
  }

  return (
    <div>
      {categories.map((category, key) => (
        <div key={key} className="mb-8">
          <div className="font-bold text-lg mb-4">{category}</div>
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {(categoryProducts[category] || []).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Categories;
