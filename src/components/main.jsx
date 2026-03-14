import React from "react";


const Main = () => {
  return (
    <section className="bg-[#f5f3ef] min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto grid w-full md:grid-cols-2 gap-10 items-center justify-between">
        {/* Left Side */}
        <div className="space-y-6">
          <span className="border border-yellow-500 text-yellow-600 px-5 py-2 rounded-full text-sm tracking-widest">
            Authentic Uzbek Culinary Experience
          </span>

          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Plov Cooking Masterclass in Bukhara
          </h1>
          <p className="text-yellow-600 italic text-lg">
            Discover the secrets of Uzbekistan’s most famous dish — plov. Join
            our interactive cooking masterclass and learn how to cook
            traditional Uzbek plov in a real kazan together with a local host.
            This cultural experience is perfect for tourists, culinary
            travelers, and tour groups visiting Bukhara.
          </p>
          <button className="bg-red-700 text-white px-8 py-3 rounded-full hover:bg-red-800 transition flex items-center gap-2">
            KO'PROQ BILISH
            <span>⌄</span>
          </button>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
            src="https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYEMN2nWB3NPcYotpV8r0eIDyTSHahbAzQLuUx"
            alt="suzani art"
            className="rounded-2xl shadow-lg object-cover w-full h-[550px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
