import React from "react";
import ProductItem from "./ProductItem";

interface ComboColumnProps {
  title: string;
  features: string[];
  price: string;
  products: {
    title: string;
    discount: string;
    price: string;
    oldPrice: string;
    image: string;
  }[];
}

const ComboColumn: React.FC<ComboColumnProps> = ({
  title,
  features,
  price,
  products,
}) => (
  <main className="flex flex-col gap-0.5">
    <div className="bg-white rounded-xs p-4 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold">{title}</h3>
        <div className="flex gap-2 text-xs text-gray-600">
          {features.map((f, i) => (
            <span key={i} className="bg-gray-200 px-2 py-0.5 rounded">
              {f}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-gray-700">{price}</span>
      </div>
    </div>
    <div className="bg-white rounded-xs p-4 shadow-md space-y-4">
      {products.map((item, idx) => (
        <ProductItem key={idx} {...item} />
      ))}
      <div className="flex justify-between items-center mt-4">
        <h2 className="text-red-500 py-1">15٪ تخفیف گیمو</h2>
        <span className="text-lg font-bold text-gray-700">
          220,000,000 تومان
        </span>
        <button className="text-sm text-blue-700 border border-blue-700 rounded px-3 py-1 hover:bg-blue-50 transition">
          مشاهده
        </button>
      </div>
    </div>
  </main>
);

export default ComboColumn;
