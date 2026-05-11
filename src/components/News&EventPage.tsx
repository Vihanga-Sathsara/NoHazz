import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SecondNavigation from "./SecondNavigation";

export default function NewsEventsPage() {
  const news = [
    {
      title: "VIP Distributor & Product Launch Ceremony by Green Panther Pvt Ltd",
      desc: "Introducing advanced biodegradable cleaning solutions for a greener future in Sri Lanka.",
      images: [
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504625/WhatsApp_Image_2026-05-11_at_09.32.15_bbxgyw.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504626/WhatsApp_Image_2026-05-11_at_09.32.16_atugfp.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504625/WhatsApp_Image_2026-05-11_at_09.32.14_orpveu.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504624/WhatsApp_Image_2026-05-11_at_09.32.14_1_okedq0.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504630/WhatsApp_Image_2026-05-11_at_09.32.17_przni8.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504626/WhatsApp_Image_2026-05-11_at_09.32.16_atugfp.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504630/WhatsApp_Image_2026-05-11_at_09.32.17_przni8.jpg",
      ],
    },
    {
      title: "noHazz Sales Team Ready to Serve Customers Islandwide",
      desc: "The noHazz sales team is continuously ready to provide service across the island.",
      images: [
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504909/20260226_161730.jpg_sc9vxq.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504921/20260207_003845.jpg_mwttqw.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504790/IMG-20260423-WA0017.jpg_adt72h.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504770/IMG-20260423-WA0022.jpg_yxid21.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778504768/IMG-20260423-WA0020.jpg_vbelib.jpg"
      ],
    },
    {
      title: "noHazz Eco Shield",
      desc: "Green Panther’s Revolutionary Earth Protection Research.",
      images: [
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505537/20260505_091228.jpg_hgqhdy.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505541/20260505_091434.jpg_uxogxf.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505551/20260505_102717.jpg_cqnt9a.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505540/20260505_111123.jpg_uftaye.jpg",
        "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505405/20260505_102254.jpg_mt6gyx.jpg",
      ],
    },
    {
        title: "Green Panther Nohazz Enters the Annual Government Information Cricket Tournament",
        desc: "Green Panther Nohazz has been invited to participate in the Annual Inter-Department Cricket Tournament organized by the Department of Government Information.",
        images: [
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505158/IMG-20260511-WA0107.jpg_fxnfzv.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505127/IMG-20260511-WA0105.jpg_ulovbp.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505159/IMG-20260511-WA0050.jpg_lu8fto.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505156/IMG-20260511-WA0111.jpg_loupxm.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505137/IMG-20260511-WA0122.jpg_v6l7td.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505154/IMG-20260511-WA0090.jpg_rmtpfn.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505131/IMG-20260511-WA0019.jpg_mxsfhi.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505115/IMG-20260511-WA0089.jpg_dstqvw.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505112/IMG-20260511-WA0117.jpg_kt1zq1.jpg",
          "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778505119/IMG-20260511-WA0042.jpg_fxqnke.jpg",
        ],
    },
  ];

  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const next = () => {
    setIndex((p) => (p + 1) % news.length);
    setExpanded(false);
  };

  const prev = () => {
    setIndex((p) => (p - 1 + news.length) % news.length);
    setExpanded(false);
  };

  return (
    <>
      <SecondNavigation />

      <section className="w-full bg-white">

        {/* HEADER */}
        <div className="bg-linear-to-r from-blue-50 to-cyan-50 py-20 text-center px-5 md:px-10 lg:px-20">
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-blue-700 font-semibold">
            News & Events
          </p>

          <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4">
            Latest Updates
          </h1>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full"></div>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-sm md:text-lg">
            Stay informed with the latest updates, events, and achievements from NOHAZZ.
          </p>
        </div>

        {/* MAIN CARD */}
        <div className="max-w-5xl mx-auto px-5 py-16">

          <div className="bg-white border border-gray-100 shadow-2xl rounded-3xl overflow-hidden">

            {/* TITLE */}
            <div className="p-6 md:p-10 border-b">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {news[index].title}
              </h2>
            </div>

            {/* IMAGE GRID */}
            <div className="p-6 md:p-10">

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                {news[index].images
                  .slice(0, expanded ? news[index].images.length : 3)
                  .map((img, i) => (
                    <div
                      key={i}
                      className="h-52 sm:h-60 overflow-hidden rounded-xl"
                    >
                      <img
                        src={img}
                        className="w-full h-full object-cover hover:scale-110 transition duration-300"
                      />
                    </div>
                  ))}

              </div>

              {/* SEE MORE / LESS */}
              {news[index].images.length > 3 && (
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                  >
                    {expanded ? "Show Less" : "See More"}
                  </button>
                </div>
              )}

              {/* DESCRIPTION */}
              <p className="text-gray-600 mt-6 text-sm md:text-base">
                {news[index].desc}
              </p>

            </div>

            {/* CONTROLS */}
            <div className="flex items-center justify-between px-6 md:px-10 pb-8">

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
                    className={`w-2 h-2 rounded-full ${
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
      </section>
    </>
  );
}