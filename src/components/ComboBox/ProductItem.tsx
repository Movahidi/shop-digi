import React from "react";

interface ProductItemProps {
  title: string;
  discount: string;
  price: string;
  oldPrice: string;
  image: string;
}

const ProductItem: React.FC<ProductItemProps> = ({ title, discount, price, oldPrice, image }) => (
  <div className="flex justify-between items-start gap-4">
    <img src={image} className="w-24 h-24 mt-1" alt="product" />
    <div className="flex flex-col text-sm text-gray-700">
      <p>{title}</p>
      <div className="flex justify-between items-center mt-2 gap-4">
        <h2 className="text-black text-sm">{discount}</h2>
        <h1 className="text-base font-bold">{price}</h1>
      </div>
      <p className="text-xs text-gray-500 line-through mt-1 self-end">{oldPrice}</p>
    </div>
  </div>
);

export default ProductItem;
