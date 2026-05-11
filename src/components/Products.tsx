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
    <section className="relative w-full py-24 px-5 md:px-10 lg:px-20 overflow-hidden bg-linear-to-b from-white via-blue-50 to-white">

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
          Premium eco-friendly cleaning solutions for modern living.
        </p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

        {products.map((item, i) => (

          <div
            key={i}
            className="
              group relative
              bg-white/70 backdrop-blur-xl
              border border-white/40
              rounded-3xl
              overflow-hidden
              shadow-xl
              hover:-translate-y-5
              hover:shadow-blue-300/30
              transition-all duration-500
            "
          >

            {/* IMAGE WRAPPER */}
            <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">

              <img
                src={item.img}
                alt={item.title}
                className="
                  w-full h-full object-contain
                  scale-105 group-hover:scale-110
                  transition duration-700
                "
              />

              {/* DARK OVERLAY */}
              <div className="
                absolute inset-0
                bg-linear-to-t from-black/60 via-black/10 to-transparent
                opacity-80 group-hover:opacity-100
                transition
              "></div>

              {/* TITLE OVER IMAGE */}
              <div className="
                absolute bottom-5 left-5 right-5
                text-white
              ">

                <h3 className="
                  text-lg md:text-xl font-bold
                  drop-shadow-lg
                  group-hover:translate-y-0
                  transition duration-500
                ">
                  {item.title}
                </h3>

                {/* underline animation */}
                <div className="w-0 group-hover:w-20 h-1 bg-blue-400 mt-2 transition-all duration-500"></div>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}