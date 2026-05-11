import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsEventsPage() {
  const news = [
    {
      title: "Eco Revolution Product Launch by NOHAZZ",
      desc: "Introducing advanced biodegradable cleaning solutions for a greener future in Sri Lanka.",
    
    },
    {
      title: "Green Panther Expansion Initiative",
      desc: "Expanding production capacity with sustainable manufacturing technology.",
     
    },
    {
      title: "Community Water Awareness Program",
      desc: "Supporting national clean water and environmental protection campaigns.",
     
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((p) => (p + 1) % news.length);
  const prev = () => setIndex((p) => (p - 1 + news.length) % news.length);

  return (
    <section className="relative w-full bg-white overflow-hidden">

      <div className="bg-linear-to-r from-blue-50 to-cyan-50 py-20 px-5 md:px-10 lg:px-20 text-center">

        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-blue-700 font-semibold">
          News & Events
        </p>

        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4">
          Latest Updates
        </h1>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
          Stay informed with the latest updates, events, and achievements from noHazz.
        </p>

      </div>

      {/* MAIN SECTION */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT - FEATURED NEWS (Slider Card) */}
        <div className="lg:col-span-2 bg-white border border-gray-100 shadow-xl rounded-3xl overflow-hidden">

          {/* Image placeholder */}
          <div className="h-64 md:h-80 bg-linear-to-br from-blue-500 to-cyan-400"></div>

          <div className="p-6 md:p-10">

           

            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
              {news[index].title}
            </h2>

            <p className="text-gray-600 mt-4 text-sm md:text-base leading-relaxed">
              {news[index].desc}
            </p>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">

              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <ChevronLeft size={18} />
              </button>

              <div className="flex gap-2">
                {news.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full transition ${
                      i === index ? "bg-blue-600 scale-125" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition"
              >
                <ChevronRight size={18} />
              </button>

            </div>

          </div>
        </div>

        {/* RIGHT - LIST STYLE (VisionCare style list news) */}
        <div className="space-y-6">

          {news.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition"
            >
             

              <h3 className="text-lg font-bold text-gray-900 mt-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {item.desc}
              </p>

              <button className="text-blue-700 text-sm font-semibold mt-3 hover:underline">
                Read More →
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}