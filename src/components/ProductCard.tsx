import React from "react";
import { Product } from "../types/Product";

const ProductCard: React.FC<Product> = ({
  title,
  image,
  price,
  oldPrice,
  discount,
}) => {
  return (
    <div className="relative bg-white border rounded-lg p-2 text-center hover:shadow-lg transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="mx-auto w-64 mb-2" />
      <h3 className="text-sm font-medium">{title}</h3>
      {discount && (
        <span className="bg-red-500 text-white text-xs px-2 py-1 absolute right-2 bottom-4">
          {discount}
        </span>
      )}
      <p className="text-black font-semibold">{price}</p>
      {oldPrice && (
        <p className="text-xs text-gray-500 line-through">{oldPrice}</p>
      )}
    </div>
  );
};

export default ProductCard;
