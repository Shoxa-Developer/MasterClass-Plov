import React from "react";

const products = [
  {
    id: 1,
    title: "Masterclass Details",
    description: [
      "Duration: 1.5 – 2 hours",
      "Location: Traditional Uzbek courtyard in Bukhara",
      "Languages: English / Russian",
      "Group size: 5 – 15 guests",
    ],
    image:
      "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliY3lQdIaWIV6k0JtSX7eqifwbUYD4GT2MrnxyC",
  },
  {
    id: 2,
    title: "What Is Included",
    description: [
      " Plov cooking masterclass",
      " Participation in cooking",
      " Plov tasting",
      "Tea and traditional atmosphere",
      " Photos during the experience",
    ],
    image:
      "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYvt44im3KauH3r1bWQZm9zntPfXUd425TMRYE",
  },
  {
    id: 3,
    title: "Perfect For",
    description: [
      " Cultural tours",
      " Culinary tours",
      " Private groups",
      "  Travel agencies",
    ],
    image:
      "https://ydk1tcgolp.ufs.sh/f/WL8eQfpTCliYIg3TYgkzB1EOSbpPcFWgMD2NoY8XZ3kJLxt0",
  },
];

const Mahsulotlar = () => {
  return (
    <section className="bg-[#f6f1ea] py-20" id="products">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-20">
          <p className="text-sm tracking-[4px] text-amber-600 uppercase">
            AN'ANAVIY TEXNIKA VA IJODIY JARAYON
          </p>

          <h2 className="text-4xl md:text-5xl font-serif font-semibold mt-3">
          Mahsulotlar
          </h2>

          <div className="w-20 h-[2px] bg-amber-500 mx-auto mt-4"></div>
        </div>

        {/* Products */}
        <div className="space-y-24">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div
                className={`rounded-xl overflow-hidden shadow-xl group 
    ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text */}
              <div
                className={`relative space-y-6 
    ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}
              >
                <span className="absolute -top-10 left-0 text-[120px] font-bold text-amber-200 opacity-40">
                  {`0${item.id}`}
                </span>

                <h3 className="text-3xl font-serif font-semibold relative z-10 text-amber-600">
                  {item.title}
                </h3>

                <ul className="space-y-3 text-lg relative z-10">
                  {item.description.map((text, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-amber-600">•</span> {text}
                    </li>
                  ))}
                </ul>

                <button className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition">
                  Ko'proq Bilish 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mahsulotlar;
