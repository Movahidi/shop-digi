import React from "react";

const TopBar: React.FC = () => {
  return (
    <div className="bg-white shadow px-4 py-2 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="text-xl font-bold text-red-600">فروشگاه</div>
        <input
          type="text"
          placeholder="جستجو..."
          className="rounded px-2 py-1 w-48 sm:w-12 md:w-64 bg-gray-200"
        />
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-gray-600 hover:text-blue-600">
          ورود / ثبت‌ نام
        </a>
        <a href="#" className="text-gray-600 hover:text-blue-600">
          خدمات مشتریان
        </a>
        <a href="#" className="relative text-gray-600 hover:text-blue-600">
          <svg
            className="w-6 h-6 inline"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.2 6a1 1 0 001 1.2h12a1 1 0 001-1.2L17 13M7 13H5.4M9 21a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
            ></path>
          </svg>
          <span className="absolute -top-1 -left-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            2
          </span>
        </a>
      </div>
    </div>
  );
};

export default TopBar;
