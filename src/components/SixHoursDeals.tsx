import React from "react";
import products from "../data/products";
import { Product } from "../types/Product";

type Props = {
  title?: string;
  viewAllLink?: string;
  products?: Product[];
};

const SixHourDeals: React.FC<Props> = ({
  title = "تخفیف‌های ۶ ساعته",
  products: productList = products,
}) => {
  return (
    <section className="px-4 mt-6">
      <div className="bg-[#5192d6] rounded shadow p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">{title}</h2>
          <a href="#" className="text-white text-sm">
            مشاهده همه
          </a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {productList.map((product, idx) => (
            <div key={idx} className="bg-white p-4 rounded shadow text-sm">
              <img
                src={product.image}
                className="mx-auto w-64 mb-2"
              />
              <h3 className="text-sm font-medium">{product.title}</h3>
              <span className="bg-red-500 text-white text-xs px-2 py-1 right-2 bottom-4">{product.discount}</span>
              <p className="text-black font-semibold">{product.price}</p>
              <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixHourDeals;
