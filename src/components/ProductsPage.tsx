import SecondNavigation from "./SecondNavigation";

export default function Products() {

  const products = [
    {
      title: "noHazz Detergent Gel",
      img: "https://res.cloudinary.com/dvnoyis73/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1778394435/10_rdvhhr.jpg",
    },
    {
      title: "noHazz Dish Washer Liquid",
      img: "https://res.cloudinary.com/dvnoyis73/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1778394441/17_qyaxkl.jpg",
    },
    {
      title: "noHazz Hand Wash",
      img: "https://res.cloudinary.com/dvnoyis73/image/upload/e_background_removal/b_rgb:FFFFFF/f_png/v1778394439/15_oem05p.jpg",
    },
  ];

  return (
    <>
    <SecondNavigation></SecondNavigation>
    <section className="relative w-full py-27 px-5 md:px-10 lg:px-20 overflow-hidden bg-linear-to-b from-white via-blue-50 to-white">
        
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-blue-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300/20 rounded-full blur-3xl animate-pulse"></div>

      {/* HEADER */}
      <div className="text-center max-w-3xl mx-auto mb-16">

        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-blue-700 font-semibold">
          Our Products
        </p>

        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4">
          Clean Science <span className="text-blue-700">Innovation</span>
        </h2>

        <div className="w-24 h-1 bg-blue-700 mx-auto mt-6 rounded-full animate-pulse"></div>

        <p className="text-gray-600 mt-5 text-sm md:text-lg">
          Premium eco-friendly cleaning solutions designed for modern living.
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

        {products.map((item, i) => (

          <div
            key={i}
            className="
              group relative
              bg-white/60 backdrop-blur-xl
              border border-white/40
              rounded-3xl
              overflow-hidden
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
              hover:shadow-[0_25px_80px_rgba(59,130,246,0.25)]
              hover:-translate-y-4
              transition-all duration-500
            "
          >

            {/* IMAGE AREA */}
            <div className="relative h-72 flex items-center justify-center bg-linear-to-br from-blue-50 to-white">

              <img
                src={item.img}
                alt={item.title}
                className="
                  w-[70%] h-full object-contain
                  group-hover:scale-110
                  transition duration-700
                  drop-shadow-xl
                "
              />

              {/* glow overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-white/20 via-transparent to-white/40 opacity-0 group-hover:opacity-100 transition"></div>

            </div>

            {/* CONTENT */}
            <div className="p-6 text-center">

              <h3 className="
                text-lg md:text-xl font-bold text-gray-900
                group-hover:text-blue-700
                transition
              ">
                {item.title}
              </h3>

              {/* underline animation */}
              <div className="w-0 group-hover:w-24 h-1 bg-blue-500 mx-auto mt-3 transition-all duration-500 rounded-full"></div>

            </div>

          </div>

        ))}

      </div>

    </section>
    </>
  );
}