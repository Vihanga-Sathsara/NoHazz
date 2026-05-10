import { useEffect, useRef } from "react"
import gsap from "gsap"
import NavigationBar from "./NavigationBar"
import { FlaskConical, Droplets, Heart, Leaf } from "lucide-react"
import NohazzScientificPage from "./NohazzScientificPage"
import About from "./About"
import Footer from "./Footer"
import AboutCompany from "./AboutCompany"
import DotGrid from "./DotGridAnimation"
import ProductGallery from "./ProductGallery"
import bottle1 from "../assets/bottle1.png"

const features = [
  { icon: FlaskConical, label: "Clean Formula" },
  { icon: Droplets, label: "Fresh Rinse" },
  { icon: Heart, label: "Gentle Care" },
  { icon: Leaf, label: "Green Science" },
]
const headingTextPart1 = "NOT JUST"
const headingTextPart2 = "A DETERGENT"
const headingText2 = "TEXTILE SCIENCE REDEFINED"
const subheadingText1 = "Traditional detergents stop at stain removal."
const subheadingText2 = "NOHAZZ goes further — into what remains."

function LandingPage() {
  const navRef = useRef<HTMLDivElement | null>(null)
  const bottleRef = useRef<HTMLImageElement | null>(null)
  const logoRef = useRef<HTMLDivElement | null>(null)
  const leftContentRef = useRef<HTMLDivElement | null>(null)
  const leftBottomContentRef = useRef<HTMLDivElement | null>(null)
  const featureWrapperRef = useRef<HTMLDivElement | null>(null)
  const featureGridRef = useRef<HTMLDivElement | null>(null)
  const bioRef = useRef<HTMLDivElement | null>(null)
  const tabletLeftRef = useRef<HTMLDivElement | null>(null)
  const tabletGridRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLDivElement | null>(null)
  const mobileTextRef = useRef<HTMLDivElement | null>(null)
  const trackRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
  const isMd = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches
  const isSm = window.matchMedia("(max-width: 767px)").matches

  const ctx = gsap.context(() => {

    const tl = gsap.timeline()

    // ================= HERO LOGO =================
    tl.fromTo(
      logoRef.current,
      {
        opacity: 0,
        scale: 0.7,
        y: 40,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out",
      }
    )
    .to(logoRef.current, {
      opacity: 0.85,
      duration: 0.8,
    })

    // ================= BOTTLE =================
    .fromTo(
      bottleRef.current,
      {
        y: -300,
        opacity: 0,
        rotate: -15,
        scale: 0.7,
      },
      {
        y: isMd ? 200 : isSm ? 55 : 0,
        opacity: 1,
        rotate: 0,
        scale: 1,
        duration: 2,
        ease: "power4.out",
      },
      "-=0.6"
    )

    .fromTo(
      navRef.current,
      {
        y: -80,
        opacity: 0,
        filter: "blur(10px)",
      },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power4.out",
      },
      0 
    )

    // ================= LEFT CONTENT =================
    .fromTo(
      leftContentRef.current?.children || [],
      {
        x: -120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=1"
    )

    // ================= LEFT BOTTOM =================
    .fromTo(
      leftBottomContentRef.current?.children || [],
      {
        x: -120,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
      },
      "-=0.8"
    )

    // ================= FEATURES =================
    .fromTo(
      featureGridRef.current?.children || [],
      {
        opacity: 0,
        y: 80,
        scale: 0.8,
        rotate: 4,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
      },
      "-=0.8"
    )

    // ================= BIO =================
    .fromTo(
      bioRef.current,
      {
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
      },
      "-=1"
    )

    // bio children
    .fromTo(
      bioRef.current?.children?.[0] ? [bioRef.current.children[0]] : [],
      {
        scale: 0.5,
        opacity: 0,
        rotate: -20,
      },
      {
        scale: 1,
        opacity: 1,
        rotate: 0,
        duration: 1,
        ease: "back.out(1.8)",
      },
      "-=0.8"
    )

    // ================= TABLET =================
    .fromTo(
      tabletLeftRef.current?.children || [],
      {
        x: -60,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 1,
      },
      "-=1"
    )

    .fromTo(
      tabletGridRef.current?.children || [],
      {
        y: 40,
        opacity: 0,
        scale: 0.85,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1,
        duration: 1,
      },
      "-=0.8"
    )

    // ================= BUTTON =================
    .fromTo(
      buttonRef.current?.children || [],
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
      },
      "-=0.8"
    )

    // ================= MOBILE TEXT =================
    .fromTo(
      mobileTextRef.current?.children || [],
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
      },
      "-=1"
    )

  
    // ================= TRACK SCROLL =================
    if (trackRef.current) {
      const el = trackRef.current
      const width = el.scrollWidth / 2

      gsap.fromTo(el,
        { opacity: 0, x: 30 },
        { opacity: 1, x: 0, duration: 1 }
      )

      gsap.to(el, {
        x: -width,
        duration: 50,
        ease: "none",
        repeat: -1,
        forced3d: true,
      })
    }

  })

  return () => ctx.revert()
}, [])

 const scrollToSection = (id: string) => {
  const target = document.getElementById(id)
  if (!target) return

  gsap.to(window, {
    duration: 1.2,
    scrollTo: {
      y: target,
      offsetY: 80,
    },
    ease: "power3.inOut",
  })
}

  return (
    <>
      <div ref={navRef} className="fixed top-0 left-0 w-full z-999 flex justify-center pt-4">
        <div className="w-[95%]">
          <NavigationBar />
        </div>
      </div>
      <section id="hero-section" className="w-full h-screen bg-linear-to-br from-[#050B0A] via-[#071A16] to-[#0B2A22] relative flex-col items-center flex overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <DotGrid></DotGrid>
          </div>
          <div ref={logoRef} className="hidden absolute top-[35%] w-full lg:flex xl:flex justify-center pointer-events-none z-10" style={{ fontFamily: "Saira" }}>
            <h1 className="absolute text-[clamp(60px,12vw,150px)] font-black text-black/40 translate-x-3 translate-y-4 whitespace-nowrap">
              NOHAZZ
            </h1>
            <h1 className="absolute text-[clamp(60px,12vw,150px)] font-black text-gray-300 translate-x-0.5 translate-y-0.5 whitespace-nowrap">
              NOHAZZ
            </h1>
          </div>
          <div className="absolute inset-0 h-screen pointer-events-none">
    <div className="flex items-center justify-center md:justify-end md:pr-10 lg:relative lg:justify-center  w-full h-full">
      <img
        ref={bottleRef}
        src={bottle1}
        alt="NOHAZZ"
        className="
          relative z-12
          w-50 h-70
          md:w-80 md:h-170
          lg:w-100 lg:h-180
          drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]
        "
      />
    </div>
</div>
          {/* Desktop responsive */}
          <div className="hidden absolute w-full h-screen lg:flex overflow-hidden">
              <div className="relative w-[50%] h-full">
                  <div ref={leftContentRef} className="w-full h-[50%] flex flex-col justify-center text-white px-8 py-5">
                      <p className="text-sm text-green-300 py-2 tracking-[4px]">{headingText2}</p>
                      <p className="text-4xl lg:text-3xl font-bold text-white">{headingTextPart1}</p>
                      <p className="text-3xl md:text-7xl lg:text-4xl font-extrabold text-green-300">{headingTextPart2}</p>
                      <div className="w-full h-auto flex flex-row gap-4 mt-6 md:mt-10 lg:mt-6">
                        <button onClick={() => scrollToSection("about")} className="rounded-full bg-green-400 text-black font-semibold tracking-wide hover:bg-green-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20 py-2 px-4 md:py-4 md:px-6 lg:py-3 lg:px-4 md:text-xl lg:text-base cursor-pointer">
                          Explore NOHAZZ
                        </button>
                        <button onClick={() => scrollToSection("explore")} className="rounded-full border border-white/20 text-white backdrop-blur-md hover:border-green-400/40 hover:bg-white/5 transition-all duration-300 py-2 px-4  md:py-4 md:px-6 md:text-xl lg:py-3 lg:px-4 lg:text-base cursor-pointer">
                          Learn The Science
                        </button>
                      </div>
                  </div>
                  <div ref={leftBottomContentRef} className="relative w-full h-[50%] flex flex-col justify-end py-20 text-white px-8">
                    <p className="text-lg md:text-[25px] lg:text-[15px] text-gray-300">
                      {subheadingText1}
                    </p>
                    <p className="text-lg md:text-[25px] lg:text-[15px] text-gray-300">
                      {subheadingText2}
                    </p>
                  </div>
              </div>
              <div className="relative w-[50%] h-full">
                <div className="w-full h-[50%] flex justify-end items-center">
                      <div ref={bioRef} className="flex flex-col text-white group cursor-default relative items-center justify-end px-36">

                        <div className="hidden lg:flex relative items-center justify-center">

                          <div className="absolute md:w-27 md:h-27 lg:w-16 lg:h-16 xl:w-35 xl:h-35 rounded-full border border-green-400/20 animate-ping" />

                          <div className="absolute md:w-32 md:h-32 lg:w-20 lg:h-20 xl:w-28 xl:h-28 rounded-full border border-green-400/10" />

                          <div className="relative md:w-20 md:h-20 lg:w-12 lg:h-12 xl:w-16 xl:h-16 rounded-full bg-green-400/10 flex items-center justify-center border border-green-400/30 group-hover:bg-green-400/20 group-hover:border-green-400/60 transition-all duration-300">

                            <div className="absolute inset-1 rounded-full bg-green-400/10 blur-md group-hover:bg-green-400/20 transition-all duration-300" />

                            <Leaf className="text-green-300 w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" />

                          </div>

                        </div>

                        <div className="mt-4 hidden lg:flex flex-col items-center gap-1">

                          <p className="text-[9px] tracking-[4px] text-green-300/60 font-medium uppercase">
                            Bio
                          </p>

                          <p className="text-[11px] tracking-[3px] text-green-300 font-semibold uppercase">
                            Engineered
                          </p>

                        <div className="w-4 h-px bg-green-400/40 mt-1" />

                        </div>

                      </div>
                </div>
                  <div ref={featureWrapperRef} className="relative w-full h-[50%] flex items-center justify-end px-8">
                    <div ref={featureGridRef} className="relative grid grid-cols-2 gap-3 px-8 py-3 h-auto z-15 lg:bg-black/20 border border-white/10 rounded-lg">
                       {features.map(({ icon: Icon, label }) => (
                              <div
                                key={label}
                                className="flex flex-col items-center gap-2 group md:bg-black/20 lg:bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/30 rounded-xl px-6 py-4 md:px-7 md:py-7 lg:px-4 lg:py-2 transition-all duration-200"
                              >

                                <div className="shrink-0 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-full bg-green-400/10 border border-green-400/25 flex items-center justify-center group-hover:bg-green-400/20 transition-all duration-200">

                                  <Icon
                                    className="w-5 h-5 md:w-7 md:h-7 lg:w-6 lg:h-6 text-green-400"
                                    strokeWidth={1.5}
                                  />

                                </div>

                                <p className="md:text-[15px] lg:text-[10px] xl:text-[15px] text-gray-300 group-hover:text-white transition-colors duration-200 leading-tight">
                                  {label}
                                </p>

                              </div>
                            ))}
                    </div>
                        
                  </div>
              </div>
              
          </div>
          {/* Tablet responsive */}
          <div className="absolute w-full h-screen hidden md:flex lg:hidden overflow-hidden">
              <div className="w-[60%] h-full">
                <div className="w-full h-[60%] items-center justify-center flex flex-col">
                    <div ref={tabletLeftRef} className="w-full h-[50%] flex flex-col justify-center text-white px-8 py-5">
                       <p className="text-[19px] text-green-300 py-2 tracking-[4px]">{headingText2}</p>
                       <p className="text-6xl font-bold text-white">{headingTextPart1}</p>
                       <p className="text-5xl font-extrabold text-green-300">{headingTextPart2}</p>
                       <p className="text-xl text-gray-300 pt-4">{subheadingText1}</p>
                       <p className="text-xl text-gray-300">{subheadingText2}</p>
                    </div>
                    <div ref={buttonRef} className="w-full h-auto flex flex-row gap-4 px-8">
                        <button onClick={() => scrollToSection("about")} className="rounded-full bg-green-400 text-black font-semibold tracking-wide hover:bg-green-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20 py-2 px-4 text-base cursor-pointer">
                          Explore NOHAZZ
                        </button>
                        <button onClick={() => scrollToSection("explore")} className="rounded-full border border-white/20 text-white backdrop-blur-md hover:border-green-400/40 hover:bg-white/5 transition-all duration-300 py-2 px-4 text-base cursor-pointer">
                          Learn The Science
                        </button>
                    </div>
                  </div>
                  <div className="w-full h-[40%] justify-start flex flex-col">
                            <div ref={tabletGridRef} className="relative grid grid-cols-2 gap-3 px-8 py-3 h-auto z-15 lg:bg-black/20 border border-white/10 rounded-lg">
                       {features.map(({ icon: Icon, label }) => (
                              <div
                                key={label}
                                className="flex flex-col items-center gap-2 group md:bg-black/20 lg:bg-white/5 hover:bg-white/10 border border-white/10 hover:border-green-400/30 rounded-xl px-6 py-4 md:px-7 md:py-7 lg:px-4 lg:py-2 transition-all duration-200"
                              >

                                <div className="shrink-0 md:w-16 md:h-16 lg:w-12 lg:h-12 rounded-full bg-green-400/10 border border-green-400/25 flex items-center justify-center group-hover:bg-green-400/20 transition-all duration-200">

                                  <Icon
                                    className="w-5 h-5 md:w-7 md:h-7 lg:w-6 lg:h-6 text-green-400"
                                    strokeWidth={1.5}
                                  />

                                </div>

                                <p className="md:text-[15px] lg:text-[10px] xl:text-[15px] text-gray-300 group-hover:text-white transition-colors duration-200 leading-tight">
                                  {label}
                                </p>

                              </div>
                            ))}
                    </div>
                  </div>
              </div>
                           
          </div>

          {/* Mobile responsive */}
          <div className="absolute w-full h-screen flex md:hidden lg:hidden flex-col overflow-x-hidden overflow-y-auto">
            <div ref={mobileTextRef} className="relative w-full h-[70%] flex flex-col justify-center text-white px-8 py-3">
                      <p className="text-[12px] text-green-300  tracking-[4px]">{headingText2}</p>
                      <p className="text-4xl font-bold text-white">{headingTextPart1}</p>
                      <p className="text-3xl font-extrabold text-green-300">{headingTextPart2}</p>
                      <p className="text-sm text-gray-300 ">{subheadingText1}</p>
                      <p className="text-sm text-gray-300">{subheadingText2}</p>
                      <div className="w-full h-auto flex flex-row gap-4 mt-2">
                        <button onClick={() => scrollToSection("about")} className="rounded-full bg-green-400 text-black font-semibold tracking-wide hover:bg-green-300 transition-all duration-300 hover:scale-105 shadow-lg shadow-green-500/20 py-2 px-4 text-[10px]">
                          Explore NOHAZZ
                        </button>
                        <button onClick={() => scrollToSection("explore")} className="rounded-full border border-white/20 text-white backdrop-blur-md hover:border-green-400/40 hover:bg-white/5 transition-all duration-300 py-2 px-4 text-[10px]">
                          Learn The Science
                        </button>
                      </div>

            </div>
            <div className="relative w-full h-[50%] flex items-end justify-center px-8 py-2 overflow-hidden">
                  <div className="relative w-full h-[50%] flex items-end justify-center px-4 overflow-hidden">

                    <div ref={trackRef} className="flex gap-3 w-max">
                      {[...features, ...features].map(({ icon: Icon, label }, index) => (
                        <div
                          key={index}
                          className="min-w-40 flex flex-col items-center gap-2 group bg-black/20 hover:bg-white/10 border border-white/10 hover:border-green-400/30 rounded-xl px-5 py-4"
                        >
                          <div className="w-10 h-10 rounded-full bg-green-400/10 border border-green-400/25 flex items-center justify-center group-hover:bg-green-400/20">
                            <Icon className="w-5 h-5 text-green-400" />
                          </div>

                          <p className="text-gray-300 group-hover:text-white text-center text-sm">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>

                  </div>
            </div>
          </div>
     </section>
     <section id="products">
        <ProductGallery />
    </section>
     <section id="explore">
        <NohazzScientificPage />
     </section>
     <section id="about">
        <AboutCompany />
     </section>
     <section>
        <About />
     </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  )
}

export default LandingPage