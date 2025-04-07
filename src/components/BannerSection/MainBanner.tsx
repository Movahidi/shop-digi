import React from "react";

interface MainBannerProps {
  title: string;
  subtitle: string;
  discount: string;
  image: string;
}

const MainBanner: React.FC<MainBannerProps> = ({ title, subtitle, discount, image }) => {
  return (
    <div className="relative bg-gradient-to-l from-white to-blue-100 rounded overflow-hidden p-6 flex items-center justify-between col-span-2">
      <div>
        <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
        <h2 className="text-4xl text-black font-bold">{title}</h2>
        <span className="bg-red-500 text-white text-xs px-2 py-1 absolute lg:top-56 sm:top-4 right-8 md:top-4">
          {discount}
        </span>
        <button className="mt-4 px-4 py-1 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100 text-sm transition-all duration-300 hover:scale-105">
          مشاهده
        </button>
      </div>
      <img src={image} alt={title} className="w-96 object-contain animate-fade-in" />
    </div>
  );
};

export default MainBanner;
