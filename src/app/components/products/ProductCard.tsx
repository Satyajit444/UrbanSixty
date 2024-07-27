import React from "react";

const ProductCard = ({ products }) => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 ">
      {products.map(({ id, image, title, description,price}) => (
        <div key={id} className="p-4 m-2 border rounded shadow-lg">
          <img src={image} alt={title} className="w-full h-52" />
          <h2 className="text-2xl font-semibold mt-2 line-clamp-3">Rs. {price}</h2>

          <h2 className="text-2xl font-semibold mt-2 line-clamp-3">{title}</h2>
          <p className="text-lg mt-1 line-clamp-5">{description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
