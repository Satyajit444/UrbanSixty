import React, { useState } from "react";
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { Product } from "@/types";
import SignIn from "../auth/SignIn";
import Register from "../auth/Register";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [show, setShow] = useState(false);
  const [SignUp, setSignUp] = useState(false);
  const openSignUp = () => setSignUp(true);
  const closeSignUp = () => setSignUp(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="p-4 m-2 border rounded shadow-lg cursor-pointer hover:bg-gray-100">
        <Link href={`product/${product?.id}`}>
          <img
            src={product?.image}
            alt={product?.title}
            className="w-full h-52 object-contain"
          />
          <div className="flex justify-between w-full">
            <h2 className="text-2xl text-gray-500 font-semibold mt-2">
              Rs. {product?.price}
            </h2>
            <Link href={`categories/${product?.category}`} className="text-2xl text-gray-500 font-semibold mt-2">
              {product?.category}
            </Link>
          </div>
          <h2 className="text-xl font-semibold mt-2 truncate">
            {product?.title}
          </h2>
        </Link>
        {/* <p className="text-lg mt-1 line-clamp-5">{product?.description}</p> */}
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

      <SignIn isOpen={show} closeModal={handleClose} openSignUp={openSignUp} />
      <Register isOpen={SignUp} closeModal={closeSignUp} />
    </>
  );
};

export default ProductCard;
