"use client";

import { getProductById } from "@/api/products/product";
import { Product } from "@/types";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"; // Import star icons from react-icons

function ProductComponent() {
  const params = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const MAX_DESCRIPTION_LENGTH = 500;

  useEffect(() => {
    fetchProductById();
  }, []);

  const fetchProductById = async () => {
    try {
      const productResponse = await getProductById(params?.productId as string);
      if (productResponse.success && productResponse.data) {
        setProduct(productResponse.data);
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
      setProduct(null);
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

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const renderDescription = () => {
    if (product && product.description.length <= MAX_DESCRIPTION_LENGTH) {
      return product.description;
    }

    if (product && isExpanded) {
      return (
        <>
          {product.description}{" "}
          <button className="text-blue-500" onClick={handleReadMore}>
            Read less
          </button>
        </>
      );
    }

    return (
      <>
        {product && product.description.slice(0, MAX_DESCRIPTION_LENGTH)}...{" "}
        <button className="text-blue-500" onClick={handleReadMore}>
          Read more
        </button>
      </>
    );
  };

  const renderStars = (rate: number) => {
    const fullStars = Math.floor(rate);
    const halfStar = rate % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
      <>
        {Array(fullStars)
          .fill(null)
          .map((_, index) => (
            <FaStar key={`full-${index}`} className="text-yellow-500" />
          ))}
        {halfStar === 1 && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill(null)
          .map((_, index) => (
            <FaRegStar key={`empty-${index}`} className="text-yellow-500" />
          ))}
      </>
    );
  };

  if (!product) {
    return <div>No product data available</div>; // Handle case where product is null
  }

  return (
    <div className="flex lg:flex-row flex-col bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="lg:w-1/3 w-full object-cover h-auto lg:h-[300px]"
        src={product.image}
        alt={product.title}
      />
      <div className="flex flex-col p-6 lg:w-2/3 w-full">
        <div className="mb-4">
          <div className="font-bold text-2xl mb-2">{product.title}</div>
          <p className="text-gray-700 text-base">{renderDescription()}</p>
        </div>
        <div className="mt-auto">
          <span className="block text-gray-900 font-bold text-xl">
            ${product.price}
          </span>
          <span className="block text-gray-600 text-sm">
            {product.category}
          </span>
          <div className="flex items-center">
            <div className="flex items-center">
              {renderStars(product.rating.rate)}
            </div>
          </div>
          <div className="block text-gray-800">
            Rating: {product.rating.rate} ({product.rating.count} reviews)
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
