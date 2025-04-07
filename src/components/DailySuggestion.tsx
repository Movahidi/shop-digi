import React from "react";

const dailyProducts = [
  {
    id: 1,
    title: "گوشی موبایل تی سی ال مدل SR 40",
    image: "img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
    price: "220,000,000 تومان",
    oldPrice: "249,000,000",
    discount: "25%",
  },
  {
    id: 2,
    title: "گوشی موبایل تی سی ال مدل SR 40",
    image: "img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
    price: "220,000,000 تومان",
    oldPrice: "249,000,000",
    discount: "25%",
  },
  {
    id: 3,
    title: "گوشی موبایل تی سی ال مدل SR 40",
    image: "img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
    price: "220,000,000 تومان",
    oldPrice: "249,000,000",
    discount: "25%",
  },
  {
    id: 4,
    title: "گوشی موبایل تی سی ال مدل SR 40",
    image: "img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
    price: "220,000,000 تومان",
    oldPrice: "249,000,000",
    discount: "25%",
  },
  {
    id: 5,
    title: "گوشی موبایل تی سی ال مدل SR 40",
    image: "img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
    price: "220,000,000 تومان",
    oldPrice: "249,000,000",
    discount: "25%",
  },
];

const DailySuggestion: React.FC = () => {
  return (
    <section className="px-4 mt-10">
      <div className="bg-white rounded-xs p-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-800">پیشنهاد به‌روز</h2>
          <a href="#" className="text-blue-600 text-sm">مشاهده همه</a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {dailyProducts.map((product, index) => (
            <div
              key={product.id}
              className={`relative ${
                index === 0 ? "bg-white" : "bg-gray-50"
              } rounded-lg p-2 text-center border-2 hover:shadow-lg transition-transform transform hover:scale-105`}
            >
              <img src={product.image} alt={product.title} className="mx-auto mb-2" />
              <h3 className="text-sm font-medium">{product.title}</h3>
              <span className="bg-red-500 text-white text-xs px-2 py-1 absolute right-2 bottom-4">
                {product.discount}
              </span>
              <h2 className="text-black font-semibold">{product.price}</h2>
              <p className="text-xs text-gray-500 line-through">{product.oldPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailySuggestion;
