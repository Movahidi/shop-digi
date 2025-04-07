import React from "react";

const NavigationBar: React.FC = () => {
  return (
    <header className="bg-white shadow px-4 py-2 flex flex-wrap items-center justify-between">
      <nav className="flex flex-wrap gap-4 text-sm">
        {[
          "خانه",
          "قطعات کامپیوتر",
          "موبایل",
          "گیمینگ",
          "کیس",
          "مانیتور",
          "لپ‌تاپ",
          "تصویر",
          "خانه هوشمند",
          "اداری",
          "کارت",
          "ساعت",
        ].map((item) => (
          <a key={item} href="#" className="text-gray-600 hover:text-blue-600">
            {item}
          </a>
        ))}
      </nav>
      <div className="flex gap-4 text-sm">
        <a href="#" className="text-red-600 font-semibold">
          تخفیف‌های 6 ساعته
        </a>
        <a href="#" className="text-blue-600 font-semibold">
          کمبو باکس‌ها
        </a>
      </div>
    </header>
  );
};

export default NavigationBar;
