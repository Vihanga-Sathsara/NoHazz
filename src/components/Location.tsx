export default function Location() {
  return (
    <section className="relative w-full py-24 px-5 md:px-10 lg:px-20 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

      {/* HEADER */}
      <div className="relative max-w-7xl mx-auto text-center mb-12">

        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
          Our <span className="text-blue-700">Location</span>
        </h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>

        <p className="text-gray-600 mt-5 text-sm md:text-lg">
          Green Panther (Pvt) Ltd – Battaramulla, Sri Lanka
        </p>

      </div>

      {/* MAP */}
      <div className="relative max-w-6xl mx-auto">

        <div className="rounded-3xl overflow-hidden shadow-2xl border border-blue-100">

          <iframe
            src="https://www.google.com/maps?q=Green+Panther+(Pvt)+Ltd,+Battaramulla&output=embed"            className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>

        </div>

      </div>

    </section>
  );
}