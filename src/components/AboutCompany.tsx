import { useEffect, useRef } from "react"
import gsap from "gsap"

function AboutCompany() {
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const elements = sectionRef.current.querySelectorAll(".anim")

    gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1,
        stagger: 0.12,
        ease: "power4.out",
      }
    )
  }, [])

  return (
    <section
      id="about-company"
      ref={sectionRef}
      className="w-full min-h-screen bg-[#061311] text-white px-5 sm:px-8 md:px-16 lg:px-24 py-16 md:py-24 overflow-hidden"
    >
      {/* HEADER */}
      <div className="anim text-center mb-12">
        <p className="text-green-300 tracking-[4px] text-xs md:text-sm uppercase">
          Brand • History • Product • Health & Beauty
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mt-3">
          About Us
        </h1>
      </div>

      {/* WHO WE ARE */}
      <div className="anim space-y-6 text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-xl md:text-2xl font-semibold text-green-300">
          Who We Are
        </h2>

        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          Green Panther Pvt Ltd is a proudly Sri Lankan company committed to transforming the way we clean—with care for both people and the planet. We specialize in eco-friendly and human-safe detergent gel made from biodegradable ingredients. Our goal is simple: provide powerful cleaning that’s gentle on skin, safe for families, and kind to nature.
        </p>
      </div>

      {/* VALUES */}
      <div className="anim">
        <h2 className="text-center text-xl md:text-2xl font-semibold text-green-300 mb-8">
          What We Stand For
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { title: "Sustainability", desc: "Biodegradable ingredients & low waste production" },
            { title: "Honesty", desc: "Transparent labeling and trust-based approach" },
            { title: "Responsibility", desc: "Protecting people & environment" },
            { title: "Health & Safety", desc: "Skin-safe, family-safe chemistry" },
            { title: "Innovation", desc: "Continuous green technology improvement" },
          ].map((item) => (
            <div
              key={item.title}
              className="p-5 bg-black/20 border border-white/10 rounded-xl hover:border-green-400/40 hover:scale-[1.02] transition-all duration-300"
            >
              <h3 className="text-white font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY CHOOSE */}
      <div className="anim mt-16 md:mt-20 text-center">
        <h2 className="text-xl md:text-2xl font-semibold text-green-300 mb-6">
          Why Choose Green Panther?
        </h2>

        <div className="flex flex-col gap-2 text-gray-300 text-sm md:text-base">
          <p>✔ 100% biodegradable & non-toxic</p>
          <p>✔ Free from SLS, parabens, and phosphates</p>
          <p>✔ Proudly made in Sri Lanka</p>
          <p>✔ Eco-friendly packaging commitment</p>
        </div>
      </div>
    </section>
  )
}

export default AboutCompany