import React, { useState } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Product } from "@/types/types";
import SignIn from "../auth/SignIn";

interface ProductCardProps {
  products: Product[];
}

const ProductCard: React.FC<ProductCardProps> = ({ products }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
      {products?.map(({ id, image, title, description, price }) => (
        <div
          key={id}
          className="p-4 m-2 border rounded shadow-lg cursor-pointer hover:bg-gray-100"
        >
          <img src={image} alt={title} className="w-full h-52 object-cover" />
          <h2 className="text-2xl font-semibold mt-2">Rs. {price}</h2>
          <h2 className="text-2xl font-semibold mt-2">{title}</h2>
          <p className="text-lg mt-1 line-clamp-5">{description}</p>
          <div className="flex justify-between mt-4">
            <button
              className="flex items-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={handleShow}
            >
              <FaCartPlus className="mr-2" /> Add to Cart
            </button>
            <button
              className="flex items-center px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
              onClick={handleShow}

            >
              <FaHeart className="mr-2" /> Wishlist
            </button>
          </div>
        </div>
      ))}

      <SignIn isOpen={show} closeModal={handleClose} />
    </div>
  );
};

export default ProductCard;
