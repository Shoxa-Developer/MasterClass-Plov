import React from "react";


const Main2 = () => {
  return (
    <section className="bg-[#f5f3ef] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid w-full md:grid-cols-2 gap-10 items-center justify-between">
        {/* Right Side Image */}
        <div className="relative">
          <img
            src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliY9LtKiQPgE2wP1fJzuBc7l9GoCRV6vO4NhqHA"
            alt="suzani art"
            className="rounded-2xl shadow-lg object-cover w-full h-[550px]"
          />
        </div>

        {/* Left Side */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-amber-700">
            What Guests Will Experience
          </h1>
          <ul>
            <li>• Introduction to Uzbek culinary traditions </li>
            <li>• Learn about traditional ingredients and spices </li>
            <li>• Participate in cooking plov step by step </li>
            <li>• Discover the cultural story behind Uzbek cuisine </li>
            <li>• Enjoy the plov you cooked together </li>
          </ul>

          <button className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition flex items-center gap-2">
            KO'PROQ BILISH
            <span>⌄</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Main2;
