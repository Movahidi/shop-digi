import React from "react";

type BannerCardProps = {
    title: string;
    subtitle: string;
    image: string;
    bgColor: string;
  };
  
  const BannerCard: React.FC<BannerCardProps> = ({ title, subtitle, image, bgColor }) => {
    return (
      <div className={`${bgColor} rounded p-4 flex items-center justify-between`}>
        <div>
          <h3 className="font-semibold text-gray-700">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
          <button className="mt-2 px-2 py-1 text-blue-600 border border-blue-600 rounded hover:bg-blue-100 text-sm transition-all duration-300 hover:scale-105">
            مشاهده
          </button>
        </div>
        <img src={image} alt={title} className="w-96 pl-0" />
      </div>
    );
  };
  
  export default BannerCard;
  