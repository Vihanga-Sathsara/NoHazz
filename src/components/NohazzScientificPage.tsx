import { useEffect, useState } from "react";

export default function NohazzScientificPage() {

  /* FLOW CHART ANIMATION */
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  const flowSteps = [
    "Phosphate Runoff",
    "Nutrient Overload",
    "Algal Bloom Explosion",
    "Oxygen Depletion",
    "Aquatic Collapse",
  ];

  return (
    <div id="nohazz-science" className=" bg-[#050B0A] text-white overflow-hidden min-h-screen font-sans relative">

      {/* BACKGROUND GLOW */}
      <div className="fixed inset-0 -z-10 overflow-hidden">

        <div className="absolute top-0 left-0 w-62.5 h-62.5 md:w-125 md:h-125 bg-green-400/20 blur-3xl rounded-full animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-62.5 h-62.5 md:w-125 md:h-125 bg-green-700/20 blur-3xl rounded-full animate-pulse"></div>

      </div>

      {/* FLOATING ELEMENTS */}
      <div className="absolute top-20 left-5 md:left-10 w-16 h-16 md:w-20 md:h-20 rounded-full border border-green-300/30 animate-spin"></div>

      <div className="absolute bottom-20 right-5 md:right-20 w-20 h-20 md:w-32 md:h-32 rounded-full border border-green-400/20 animate-ping"></div>

      <div className="absolute top-1/2 left-10 md:left-20 w-4 h-4 md:w-5 md:h-5 bg-green-300 rounded-full animate-bounce"></div>

      {/* SCIENTIFIC FRAMEWORK */}
      <section className="py-20 md:py-28 px-4 md:px-6 max-w-7xl mx-auto">

        <div className="text-center mb-16 md:mb-20 animate-fadeIn">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-green-300 leading-tight">
            THE NOHAZZ SCIENTIFIC FRAMEWORK
          </h2>

          <div className="w-28 md:w-40 h-2 bg-green-700 rounded-full mx-auto mt-5 animate-pulse"></div>

          <p className="mt-6 text-base md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Six integrated pillars engineered for powerful cleaning performance
            without environmental compromise.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">

          {[
            {
              title: "Advanced Soil Detachment Efficiency",
              desc: "Precision surfactant engineering designed to remove deep contaminants while preserving fabric structure.",
            },
            {
              title: "Micellar Suspension Chemistry",
              desc: "Stabilized micelles capture and isolate dirt particles for advanced suspension and removal.",
            },
            {
              title: "Ultra-Low Residue Rinse Engineering",
              desc: "Reduces chemical retention on fabrics through optimized rinse dispersion systems.",
            },
            {
              title: "Skin-Conscious Fabric Interaction",
              desc: "Balanced chemistry engineered to remain gentle on skin-contact textiles.",
            },
            {
              title: "Phosphate-Free Environmental Protection",
              desc: "High-performance cleaning without ecological phosphate pollution.",
            },
            {
              title: "Zero Plastic Circular System Design",
              desc: "A sustainable packaging ecosystem minimizing long-term plastic waste impact.",
            },
          ].map((item, i) => (

            <div
              key={i}
              className="group relative p-6 md:p-8 rounded-[30px] bg-white/5 border border-green-400/20 backdrop-blur-xl shadow-xl hover:-translate-y-5 hover:scale-[1.03] hover:shadow-[0_20px_60px_rgba(34,197,94,0.25)] transition-all duration-700 overflow-hidden"
            >

              {/* POPUP GLOW */}
              <div className="absolute inset-0 bg-linear-to-br from-transparent to-green-400/10 opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {/* FLOATING DOT */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-300 animate-ping"></div>

              <div className="relative z-10">

                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-green-700 text-white flex items-center justify-center text-xl md:text-2xl font-bold mb-5 md:mb-6 group-hover:rotate-12 transition duration-700">
                  0{i + 1}
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-green-300 mb-4 leading-snug">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-sm md:text-lg">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}
        </div>

        {/* QUOTE */}
        <div className="mt-16 md:mt-20 text-center">

          <div className="inline-block px-6 md:px-10 py-5 md:py-6 bg-green-700 rounded-[25px] shadow-2xl max-w-4xl hover:scale-105 transition duration-700">

            <p className="text-green-300 text-lg md:text-2xl font-semibold tracking-wide leading-relaxed">
              “This is not detergent formulation. This is systems-level cleaning science.”
            </p>

          </div>
        </div>
      </section>

      {/* ENVIRONMENTAL SCIENCE */}
      <section className="relative py-20 md:py-32 bg-linear-to-br from-[#050B0A] via-[#071A16] to-[#0B2A22] overflow-hidden">

        {/* GRID */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle,#86efac_1px,transparent_1px)] bg-size-[30px_30px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-block px-4 py-2 rounded-full bg-green-400/10 border border-green-300/20 mb-6 md:mb-8 backdrop-blur-xl">
              <p className="text-green-300 uppercase tracking-[3px] text-xs md:text-sm font-semibold">
                Environmental Chemistry
              </p>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
              PHOSPHATE-FREE
              <span className="block text-green-300">
                SCIENTIFIC INNOVATION
              </span>
            </h2>

            <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-300 leading-relaxed">
              Traditional phosphate-based detergents can trigger ecological chain
              reactions in aquatic systems, causing severe oxygen depletion and
              ecosystem destruction.
            </p>

            {/* EFFECT BOXES */}
            <div className="mt-10 md:mt-12 space-y-4 md:space-y-5">

              {[
                "Fish mortality",
                "Oxygen-starved lakes",
                "Biodiversity loss",
                "Water quality degradation",
              ].map((item, i) => (

                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 md:p-5 backdrop-blur-md hover:translate-x-4 hover:bg-green-400/10 transition-all duration-500"
                >

                  <div className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-300 animate-pulse"></div>

                  <p className="text-white text-sm md:text-lg">
                    {item}
                  </p>

                </div>
              ))}
            </div>
          </div>

          {/* FLOW CHART */}
          <div className="relative flex justify-center items-center">

            <div className="space-y-5 md:space-y-6 w-full max-w-full sm:max-w-md">

              {flowSteps.map((step, i) => (

                <div key={i}>

                  <div
                    className={`relative group rounded-3xl p-5 md:p-6 text-center transition-all duration-700 border overflow-hidden
                      
                      ${
                        activeStep === i
                          ? "bg-green-400/20 border-green-300 scale-105 shadow-[0_0_40px_rgba(74,222,128,0.4)]"
                          : "bg-white/10 border-white/10"
                      }
                    `}
                  >

                    {/* ACTIVE FLOW */}
                    {activeStep === i && (
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-green-300/20 to-transparent animate-pulse"></div>
                    )}

                    <p className="relative z-10 text-green-300 text-lg md:text-xl font-bold">
                      {step}
                    </p>

                  </div>

                  {i !== flowSteps.length - 1 && (
                    <div className="flex justify-center py-3">

                      <div
                        className={`w-1 h-10 transition-all duration-700 ${
                          activeStep > i
                            ? "bg-green-300 shadow-[0_0_20px_rgba(74,222,128,0.8)]"
                            : "bg-green-300/30"
                        }`}
                      ></div>

                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKIN SCIENCE */}
      <section className="relative py-20 md:py-32  bg-linear-to-br from-[#050B0A] via-[#071A16] to-[#0B2A22] overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle,#ffffff_1px,transparent_1px)] bg-size-[40px_40px]"></div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-6 text-center">

          <div className="inline-block px-4 py-2 rounded-full bg-green-400/10 border border-green-300/20 mb-6 md:mb-8">
            <p className="text-green-300 uppercase tracking-[3px] text-xs md:text-sm font-semibold">
              Skin-Conscious Chemistry
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-7xl font-black text-white leading-tight max-w-5xl mx-auto">
            WHAT TOUCHES FABRIC
            <span className="block text-green-300">
              EVENTUALLY TOUCHES SKIN
            </span>
          </h2>

          <p className="mt-6 md:mt-8 text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">
            Scientific formulation focused on comfort, residue reduction, and
            fabric softness through optimized rinse behavior.
          </p>

          {/* CARDS */}
          <div className="mt-14 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

            {[
              "pH-balanced formulation",
              "Controlled surfactant levels",
              "Reduced chemical residue",
              "Gentle rinse behavior",
            ].map((item, i) => (

              <div
                key={i}
                className="group bg-white/10 backdrop-blur-xl border border-white/10 rounded-[30px] p-6 md:p-8 hover:-translate-y-4 hover:bg-white/15 hover:shadow-[0_0_40px_rgba(74,222,128,0.3)] transition-all duration-700"
              >

                <div className="w-14 h-14 md:w-16 md:h-16 mx-auto rounded-full border-4 border-green-300 flex items-center justify-center text-green-300 text-xl md:text-2xl font-black mb-5 md:mb-6 group-hover:rotate-180 transition duration-700">
                  {i + 1}
                </div>

                <p className="text-white text-base md:text-lg font-semibold leading-relaxed">
                  {item}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}