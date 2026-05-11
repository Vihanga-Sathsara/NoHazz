import { useEffect, useState } from "react";

import {
  FlaskConical,
  Droplets,
  ShieldCheck,
  Leaf,
} from "lucide-react";

export default function NohazzScientificSection() {

  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  const flowSteps = [
    "Phosphate Runoff",
    "Nutrient Overload",
    "Algal Bloom",
    "Oxygen Depletion",
    "Aquatic Collapse",
  ];

  const scienceCards = [
    {
      title: "Advanced Cleaning Efficiency",
      desc: "Precision surfactant engineering removes deep contaminants while protecting fabric quality.",
      icon: <FlaskConical size={28} />,
    },

    {
      title: "Micellar Suspension Technology",
      desc: "Advanced micellar systems capture and isolate dirt particles for effective rinse removal.",
      icon: <Droplets size={28} />,
    },

    {
      title: "Skin-Conscious Chemistry",
      desc: "Balanced formulation engineered to remain gentle on sensitive skin-contact fabrics.",
      icon: <ShieldCheck size={28} />,
    },

    {
      title: "Phosphate-Free Innovation",
      desc: "High-performance cleaning without contributing to ecological phosphate pollution.",
      icon: <Leaf size={28} />,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden py-24 px-5 md:px-10 lg:px-20 bg-gradient-to-b from-white via-blue-50 to-white">

      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-200/30 rounded-full blur-3xl"></div>

      {/* FLOATING ELEMENTS */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-blue-300/30 rounded-full animate-spin"></div>

      <div className="absolute bottom-20 right-20 w-28 h-28 border border-cyan-300/20 rounded-full animate-pulse"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-sm uppercase tracking-[0.4em] text-blue-700 font-semibold mb-4">
            Scientific Innovation
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
            THE <span className="text-blue-700">NOHAZZ</span>
            <br />
            SCIENTIFIC FRAMEWORK
          </h2>

          <div className="w-28 h-1 bg-blue-600 rounded-full mx-auto mt-6"></div>

          <p className="mt-8 text-gray-600 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Advanced eco-cleaning science engineered for powerful performance,
            skin-conscious safety, and environmental sustainability.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div className="space-y-6">

            {scienceCards.map((item, i) => (

              <div
                key={i}
                className="
                  group
                  relative
                  overflow-hidden
                  bg-white/80
                  backdrop-blur-xl
                  border border-blue-100
                  rounded-3xl
                  p-6 md:p-7
                  hover:-translate-y-2
                  hover:border-blue-300
                  transition-all
                  duration-500
                  shadow-[0_10px_40px_rgba(37,99,235,0.08)]
                  hover:shadow-[0_20px_60px_rgba(37,99,235,0.15)]
                "
              >

                {/* HOVER GLOW */}
                <div className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  bg-gradient-to-br
                  from-blue-100/40
                  to-cyan-100/40
                  transition-all duration-500
                "></div>

                <div className="relative flex gap-5 items-start">

                  {/* ICON */}
                  <div
                    className="
                      min-w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-blue-600
                      to-cyan-500
                      flex
                      items-center
                      justify-center
                      text-white
                      shadow-lg
                      group-hover:rotate-12
                      group-hover:scale-110
                      transition-all
                      duration-500
                    "
                  >
                    {item.icon}
                  </div>

                  {/* TEXT */}
                  <div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                      {item.desc}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>

          {/* RIGHT SIDE FLOW */}
          <div className="relative flex justify-center">

            <div className="w-full max-w-md space-y-5">

              <div className="text-center mb-8">

                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Environmental Impact Flow
                </h3>

                <p className="text-gray-600 mt-3">
                  Why phosphate-free chemistry matters.
                </p>

              </div>

              {flowSteps.map((step, i) => (

                <div key={i}>

                  <div
                    className={`
                      relative
                      overflow-hidden
                      rounded-3xl
                      p-5
                      text-center
                      border
                      transition-all
                      duration-700

                      ${
                        activeStep === i
                          ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-blue-300 shadow-[0_0_40px_rgba(59,130,246,0.35)] scale-105"
                          : "bg-white/80 text-gray-700 border-blue-100"
                      }
                    `}
                  >

                    {/* SHINE EFFECT */}
                    {activeStep === i && (
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    )}

                    <p className="relative z-10 text-lg md:text-xl font-semibold">
                      {step}
                    </p>

                  </div>

                  {i !== flowSteps.length - 1 && (

                    <div className="flex justify-center py-3">

                      <div
                        className={`
                          w-1 h-10 rounded-full transition-all duration-700

                          ${
                            activeStep > i
                              ? "bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                              : "bg-blue-200"
                          }
                        `}
                      ></div>

                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>
        </div>

        {/* BOTTOM QUOTE */}
        <div className="mt-24 text-center">

          <div
            className="
              inline-block
              bg-gradient-to-r
              from-blue-600
              to-cyan-500
              text-white
              px-8 md:px-12
              py-6
              rounded-[2rem]
              shadow-[0_20px_60px_rgba(37,99,235,0.2)]
              hover:scale-105
              transition-all
              duration-500
            "
          >

            <p className="text-lg md:text-2xl font-semibold leading-relaxed">
              “Not just detergent formulation —
              <br className="hidden md:block" />
              this is intelligent eco-cleaning science.”
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}