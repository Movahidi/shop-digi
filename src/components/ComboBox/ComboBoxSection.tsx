import ComboBoxHeader from "./ComboBoxHeader";
import ComboColumn from "./ComboColumn";

const ComboBoxSection = () => {
  const comboItems = [
    {
      title: "پیشنهاد گیمینگ",
      features: ["50GB", "4GB RAM", "M1 CPU"],
      price: "24,000 تومان",
      products: [
        {
          title: "گوشی موبایل تی سی ال مدل SR 40 دو سیم",
          discount: "15٪ تخفیف گیمو",
          price: "220,000,000",
          oldPrice: "249,000,000",
          image: "/img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
        },
        {
          title: "گوشی موبایل تی سی ال مدل SR 40 دو سیم",
          discount: "15٪ تخفیف گیمو",
          price: "220,000,000",
          oldPrice: "249,000,000",
          image: "/img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
        },
        {
          title: "گوشی موبایل تی سی ال مدل SR 40 دو سیم",
          discount: "15٪ تخفیف گیمو",
          price: "220,000,000",
          oldPrice: "249,000,000",
          image: "/img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png",
        },
      ],
    },
  ];

  return (
    <section>
      <div dir="rtl" className="bg-[#c7c8ca] p-6 mt-5 font-iranyekan">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
          <ComboBoxHeader />
          {comboItems.map((combo, i) => (
            <ComboColumn key={i} {...combo} />
          ))}
          {comboItems.map((combo, i) => (
            <ComboColumn key={`c${i}`} {...combo} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComboBoxSection;
