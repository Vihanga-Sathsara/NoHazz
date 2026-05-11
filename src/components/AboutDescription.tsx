import { useEffect, useState } from "react";

export default function AboutDescription() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true);
  }, [])

   const images = [
    "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778397248/2_gfus3d_e_background_removal_f_png_nvvznd.png",
    "https://res.cloudinary.com/dvnoyis73/image/upload/e_background_removal/f_png/v1778394441/17_qyaxkl.jpg",
    "https://res.cloudinary.com/dvnoyis73/image/upload/e_background_removal/f_png/v1778394439/15_oem05p.jpg",
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [])

  return (
    <section className="relative w-full overflow-hidden bg-linear-to-b from-white via-blue-50 to-white py-20 px-5 md:px-10 lg:px-20">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">

        {/* LEFT */}
        <div className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>

          {/* HEADER (CENTER ON MOBILE/TABLET) */}
          <div className="mb-10 text-center lg:text-left">

            <p className="text-sm uppercase tracking-[0.4em] text-blue-700 font-semibold mb-3">
              About Us
            </p>

            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-gray-900">
              About <br />
              <span className="text-blue-700">noHazz</span>
            </h1>

            <div className="w-24 h-1 bg-blue-700 mt-6 rounded-full mx-auto lg:mx-0 animate-pulse"></div>

          </div>

          {/* CONTENT CARD */}
          <div className="backdrop-blur-xl bg-white/70 border border-white/50 shadow-2xl rounded-3xl p-6 md:p-8 space-y-6 hover:shadow-blue-100 transition-all duration-500">

            <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify">
              Green Panther Pvt Ltd is a proudly Sri Lankan company committed to transforming the way we clean—with care for both people and the planet. We specialize in eco-friendly and human-safe detergent gel made from biodegradable ingredients. Our goal is simple: provide powerful cleaning that’s gentle on skin, safe for families, and kind to nature.
            </p>  

            {/* VISION BOX */}
            <div className="group bg-blue-50 border border-blue-100 rounded-2xl p-5
              hover:scale-[1.03] hover:shadow-lg hover:shadow-blue-200/30
              transition-all duration-500 animate-[float_4s_ease-in-out_infinite]">

              <h3 className="text-lg font-semibold text-blue-800 mb-3 group-hover:tracking-wider transition text-center lg:text-left">
                Our Vision
              </h3>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify lg:text-left">
                By 2027, to become the most trusted, customer-friendly, and respected brand through Nohazz Signature Detergent Gel and the most advanced Nohazz Xpress Delivery Service, powered by modern technology, innovation, reliability, and excellence in customer care.
              </p>

            </div>

            {/* MISSION BOX */}
            <div className="group bg-cyan-50 border border-cyan-100 rounded-2xl p-5
              hover:scale-[1.03] hover:shadow-lg hover:shadow-cyan-200/30
              transition-all duration-500 animate-[float_5s_ease-in-out_infinite]">

              <h3 className="text-lg font-semibold text-cyan-800 mb-3 group-hover:tracking-wider transition text-center lg:text-left">
                Our Mission
              </h3>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed text-justify lg:text-left">
                To create and connect 13,000 business opportunities through Green Panther while introducing sustainable, eco-friendly solutions that support environmental protection, economic growth, innovation, and a better future for coming generations.
              </p>

            </div>

          </div>

        </div>
        

        {/* RIGHT IMAGE */}
        <div
  className={`relative flex justify-center transition-all duration-1000 delay-200 ${
    visible ? "opacity-100 scale-100" : "opacity-0 scale-90"
  }`}
>

  {/* BACK GLOW */}
  <div className="absolute w-[85%] h-[85%] bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>

  <div className="relative w-full max-w-xl">

    {/* IMAGE WRAPPER */}
    <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/40">

      <img
        src={images[index]}
        alt="noHazz"
        className="
          w-full h-80 sm:h-95 md:h-125
          object-contain
          transition-all duration-700 ease-in-out
          scale-105 hover:scale-110
        "
      />

      {/* DARK GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>

      {/* CENTER FLOAT EFFECT */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-500">
        <div className="px-5 py-2 bg-white/20 backdrop-blur-xl rounded-full text-white text-sm">
          Premium Eco Innovation
        </div>
      </div>

    </div>

    {/* DOT NAVIGATION */}
    <div className="
      absolute -bottom-6 left-1/2 -translate-x-1/2
      flex items-center gap-3 bg-white/70 backdrop-blur-xl
      px-4 py-2 rounded-full shadow-lg border border-white/40
    ">

      {images.map((_, i) => (
        <button
          key={i}
          onClick={() => setIndex(i)}
          className={`
            transition-all duration-300 rounded-full
            ${index === i
              ? "w-6 h-2 bg-blue-600"
              : "w-2 h-2 bg-gray-400 hover:bg-blue-400"
            }
          `}
        />
      ))}

    </div>

    {/* FLOAT INFO CARD */}
    <div className="
      absolute -bottom-16 left-1/2 -translate-x-1/2
      w-[90%]
      backdrop-blur-xl bg-white/70 border border-white/50
      rounded-2xl shadow-xl p-5
    ">

      <p className="text-center text-gray-800 text-sm md:text-base font-medium">
        Eco-Friendly • Human Safe • Sustainable Innovation
      </p>

    </div>

  </div>
</div>
</div>

      {/* FLOAT ANIMATION KEYFRAME */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
}