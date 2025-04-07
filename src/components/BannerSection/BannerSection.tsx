import React from "react";
import BannerCard from "./BannerCard";
import MainBanner from "./MainBanner";

const BannerSection: React.FC = () => {
  return (
    <section className="p-4 grid md:grid-cols-3 gap-4">
      <div className="grid grid-rows-2 gap-4">
        <BannerCard
          title="بالاترین تخفیف"
          subtitle="در دسته‌بندی لپ‌تاپ گیمینگ"
          image="/img/gx550-c04-v6-light.png"
          bgColor="bg-blue-200"
        />
        <BannerCard
          title="پرفروش‌ ترین پیشنهاد"
          subtitle="در دسته‌بندی مادربرد"
          image="/img/ROG X670E-E_03.png"
          bgColor="bg-pink-200"
        />
      </div>

      <MainBanner
        title="VISION PRO"
        subtitle="Designed by Apple"
        discount="25%"
        image="/img/Girl-wearing-Apple-Vision-Pro.png"
      />
    </section>
  );
};

export default BannerSection;
