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
        videos:[
            "https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778493240/VID-20260511-WA0133_emkymh.mp4",
        ],
    },
  ];

  return (
    <>
      <SecondNavigation />

      <section className="w-full bg-gray-50">

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

        {/* NEWS LIST */}
        <div className="max-w-6xl mx-auto px-5 py-16 space-y-10">

          {news.map((item, i) => (
            <div
              key={i}
              className="
                bg-white
                border border-gray-100
                shadow-xl
                rounded-3xl
                overflow-hidden
                hover:shadow-2xl
                transition
              "
            >

              {/* TITLE + DESC */}
              <div className="p-6 md:p-10 space-y-3">

                <h2 className="text-xl md:text-3xl font-bold text-gray-900">
                  {item.title}
                </h2>

                <p className="text-gray-600 text-sm md:text-base">
                  {item.desc}
                </p>

              </div>

              {/* IMAGES */}
              <div className="px-6 md:px-10 pb-8">

                <div className="
                  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
                  gap-4
                ">

                  {item.images.map((img, index) => (
                    <div
                      key={index}
                      className="
                        h-52 sm:h-60 md:h-64
                        overflow-hidden rounded-2xl
                        group
                      "
                    >
                      <img
                        src={img}
                        className="
                          w-full h-full object-cover
                          transition duration-500
                          group-hover:scale-110
                        "
                      />
                    </div>
                  ))}
                  {item.videos && item.videos.map((video, index) => (
                    <div
                        key={index}
                        className="
                        relative
                        h-52 sm:h-60 md:h-64 lg:h-72
                        overflow-hidden
                        rounded-2xl
                        group
                        bg-black
                        shadow-lg
                        "
                    >
                        <video
                        src={video}
                        className="
                            w-full h-full
                            object-cover
                            transition duration-500
                            group-hover:scale-105
                        "
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                        />

                        {/* Optional overlay */}
                        <div
                        className="
                            absolute inset-0
                            bg-black/10
                            group-hover:bg-black/0
                            transition duration-300
                            pointer-events-none
                        "
                        ></div>
                    </div>
                    ))}
                </div>

              </div>

            </div>
          ))}

        </div>

      </section>
    </>
  );
}