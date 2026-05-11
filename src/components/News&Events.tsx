import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function NewsEvents() {

  const news = [
    {
      title: "Nohazz Eco Shield",
      desc: "Green Panther’s Revolutionary Earth Protection Research",
    },
    {
      title:
        "Green Panther Nohazz Enters the Annual Government Information Cricket Tournament",
      desc:
        "Green Panther Nohazz has been invited to participate in the Annual Inter-Department Cricket Tournament organized by the Department of Government Information.",
    },
    {
      title: "NOHAZZ Sales Team Ready to Serve Customers Islandwide",
      desc:
        "The NOHAZZ sales team is continuously ready to provide service to customers across the island.",
    },
    {
      title: "VIP Distributor & Product Launch Ceremony by Green Panther Pvt Ltd",
      desc:
        "Green Panther Pvt Ltd proudly hosts the VIP Distributor & Product Launch Ceremony, marking a key milestone in strengthening partnerships and unveiling innovative product solutions for a sustainable future.",
    },
  ];

  const bgImages = [
    "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778498992/IMG-20260511-WA0050.jpg_iwdhnh.jpg",

    "https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778499179/20260505_091434.jpg_nuyebk.jpg",

    "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d",
  ];

  const videos = [
    "https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778493240/VID-20260511-WA0133_emkymh.mp4",

    "https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778493240/VID-20260511-WA0133_emkymh.mp4",

    "https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778493240/VID-20260511-WA0133_emkymh.mp4",

    "https://res.cloudinary.com/dvnoyis73/video/upload/q_auto/f_auto/v1778493240/VID-20260511-WA0133_emkymh.mp4",
  ];

  const [index, setIndex] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const next = () => {
    setIndex((prev) => (prev + 1) % news.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + news.length) % news.length);
  };

  return (
    <section className="relative w-full overflow-hidden py-20 md:py-28 px-4 md:px-10 lg:px-20">

      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* IMAGE 1 */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 opacity-50"
          style={{
            backgroundImage: `url(${bgImages[0]})`,
          }}
        />

        {/* IMAGE 2 */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-125 opacity-30 mix-blend-multiply"
          style={{
            backgroundImage: `url(${bgImages[1]})`,
          }}
        />

        {/* IMAGE 3 */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110 opacity-20 blur-sm mix-blend-screen"
          style={{
            backgroundImage: `url(${bgImages[2]})`,
          }}
        />

        {/* DARK PREMIUM OVERLAY */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-950/90 via-black/70 to-blue-900/90"></div>

        {/* EXTRA GLOW */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>

      </div>

      {/* MAIN CONTENT */}
      <div className="relative max-w-7xl mx-auto">

        {/* TOP TITLE */}
        <div className="text-center mb-14">

          <p className="text-sm md:text-base uppercase tracking-[0.4em] text-cyan-300 font-semibold mb-4">
            News & Events
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
            Latest <span className="text-cyan-400">Updates</span>
          </h2>

          <div className="w-28 h-1 bg-cyan-400 mx-auto mt-6 rounded-full"></div>

          <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-sm md:text-lg leading-relaxed">
            Stay connected with the latest NOHAZZ events, launches,
            innovations, and company milestones happening across Sri Lanka.
          </p>

        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* LEFT CARD */}
          <div
            className="
              relative
              bg-white/10
              backdrop-blur-2xl
              border border-white/10
              rounded-4xl
              p-6 md:p-10
              overflow-hidden
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            "
          >

            {/* CARD GLOW */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 via-transparent to-blue-500/10"></div>

            <div className="relative z-10">

              <div className="flex items-center gap-3 mb-5">

                <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse"></div>

                <p className="uppercase tracking-[0.3em] text-cyan-300 text-xs md:text-sm font-semibold">
                  Featured Story
                </p>

              </div>

              {/* TITLE */}
              <h3 className="text-2xl md:text-4xl font-bold text-white leading-tight mb-6 transition-all duration-500">
                {news[index].title}
              </h3>

              {/* DESC */}
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed transition-all duration-500">
                {news[index].desc}
              </p>

              {/* CONTROLS */}
              <div className="flex items-center justify-between mt-10">

                <button
                  onClick={prev}
                  className="
                    w-11 h-11 md:w-12 md:h-12
                    rounded-full
                    bg-white/10
                    border border-white/10
                    text-white
                    flex items-center justify-center
                    hover:bg-cyan-400
                    hover:text-black
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  <ChevronLeft size={20} />
                </button>

                {/* DOTS */}
                <div className="flex gap-3">

                  {news.map((_, i) => (
                    <div
                      key={i}
                      className={`
                        transition-all duration-300 rounded-full
                        ${
                          i === index
                            ? "w-8 h-2 bg-cyan-400"
                            : "w-2 h-2 bg-white/40"
                        }
                      `}
                    />
                  ))}

                </div>

                <button
                  onClick={next}
                  className="
                    w-11 h-11 md:w-12 md:h-12
                    rounded-full
                    bg-white/10
                    border border-white/10
                    text-white
                    flex items-center justify-center
                    hover:bg-cyan-400
                    hover:text-black
                    hover:scale-110
                    transition-all duration-300
                  "
                >
                  <ChevronRight size={20} />
                </button>

              </div>

            </div>

          </div>

          {/* RIGHT VIDEO */}
          <div className="relative w-full">

            {/* OUTER GLOW */}
            <div className="absolute -inset-3 bg-cyan-400/20 blur-3xl rounded-4xl"></div>

            <div
              className="
                relative
                rounded-4xl
                overflow-hidden
                border border-white/10
                shadow-[0_20px_80px_rgba(0,0,0,0.45)]
                bg-black
              "
            >

              <video
                key={index}
                className="
                  w-full
                  h-65
                  sm:h-95
                  md:h-125
                  lg:h-137.5
                  object-cover
                "
                controls
                playsInline
              >
                <source src={videos[index]} type="video/mp4" />
              </video>

            </div>

            {/* LABEL */}
            <div className="flex justify-center mt-5">

              <div
                className="
                  px-5 py-2
                  rounded-full
                  bg-white/10
                  border border-white/10
                  backdrop-blur-xl
                  text-cyan-300
                  text-xs md:text-sm
                  tracking-widest
                  uppercase
                "
              >
                NOHAZZ Media Showcase
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}