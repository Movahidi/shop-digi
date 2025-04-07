
const ComboBoxSection = () => {
  const items = [1, 2, 3];

  const ProductItem = () => (
    <div className="flex justify-between items-start gap-4">
      <img
        src="img/1_2bd2a89b-d7cd-4bcf-a760-2f2828c31475_540x.png"
        className="w-24 h-24 mt-1"
        alt="product"
      />
      <div className="flex flex-col text-sm text-gray-700">
        <p>گوشی موبایل تی سی ال مدل SR 40 دو سیم</p>
        <div className="flex justify-between items-center mt-2 gap-4">
          <h2 className="text-black text-sm">15٪ تخفیف گیمو</h2>
          <h1 className="text-base font-bold">220,000,000</h1>
        </div>
        <p className="text-xs text-gray-500 line-through mt-1 self-end">
          249,000,000
        </p>
      </div>
    </div>
  );

  const ComboColumn = () => (
    <main className="flex flex-col gap-0.5">
      <div className="bg-white rounded-xs p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold">پیشنهاد گیمینگ</h3>
          <div className="flex gap-2 text-xs text-gray-600">
            <span className="bg-gray-200 px-2 py-0.5 rounded">50GB</span>
            <span className="bg-gray-200 px-2 py-0.5 rounded">4GB RAM</span>
            <span className="bg-gray-200 px-2 py-0.5 rounded">M1 CPU</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-700">24,000 تومان</span>
        </div>
      </div>
      <div className="bg-white rounded-xs p-4 shadow-md space-y-4">
        {items.map((_, idx) => (
          <ProductItem key={idx} />
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

  return (
    <section>
      <div dir="rtl" className="bg-[#c7c8ca] p-6 mt-5 font-iranyekan">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
          <main className="flex flex-col gap-0.5 pt-36">
            <div className="flex justify-between items-center mb-4 mt-8">
              <h1>
                پیشنهاد
                <br />
                <span className="font-bold">کمبو باکس</span>
              </h1>
            </div>
          </main>
          <ComboColumn />
          <ComboColumn />
        </div>
      </div>
    </section>
  );
};

export default ComboBoxSection;
