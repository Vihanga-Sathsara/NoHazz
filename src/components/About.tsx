import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';
import { Target, Eye } from 'lucide-react'; 
import img1 from "../assets/1.jpeg";
import img2 from "../assets/2.jpeg";
import img3 from "../assets/images (1).jpeg";

gsap.registerPlugin(ScrollTrigger);

function About() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 1. Reveal Animation 
    gsap.utils.toArray<HTMLElement>('.reveal').forEach((elem) => {
      gsap.fromTo(elem, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 1, ease: "power2.out",
        scrollTrigger: { trigger: elem, start: "top 90%" }
      });
    });

    // 2. Slide from Left 
    gsap.utils.toArray<HTMLElement>('.slide-left').forEach((elem) => {
      gsap.fromTo(elem, { opacity: 0, x: -150 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "expo.out",
        scrollTrigger: { trigger: elem, start: "top 85%" }
      });
    });

    // 3. Slide from Right 
    gsap.utils.toArray<HTMLElement>('.slide-right').forEach((elem) => {
      gsap.fromTo(elem, { opacity: 0, x: 150 }, {
        opacity: 1, x: 0, duration: 1.2, ease: "expo.out",
        scrollTrigger: { trigger: elem, start: "top 85%" }
      });
    });

    

    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-linear-to-br from-[#050B0A] via-[#071A16] to-[#0B2A22]">
      
      

      {/* --- MISSION & VISION --- */}
      <section className="max-w-7xl mx-auto py-10 px-6 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="slide-left bg-white p-10 rounded-[40px] shadow-2xl border-b-10 border-green-400">
            <div className="mb-6 inline-flex p-4 bg-green-700 rounded-2xl text-green-300">
              <Target size={35} />
            </div>
            <h2 className="text-3xl font-black text-green-700 mb-4 uppercase italic">Our Mission</h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-semibold">
              To protect the Earth and its people by creating safe, eco-conscious cleaning products.
            </p>
          </div>

          <div className="slide-right bg-green-800 p-10 rounded-[40px] shadow-2xl border-b-10 border-green-300">
            <div className="mb-6 inline-flex p-4 bg-green-700 rounded-2xl text-white">
              <Eye size={35} />
            </div>
            <h2 className="text-3xl font-black text-white mb-4 uppercase italic">Our Vision</h2>
            <p className="text-lg md:text-xl text-green-100 leading-relaxed font-medium">
              To lead a cleaner, greener future—achieving <span className="text-green-300 font-bold">Rs 100 Million</span> in sales by 2027.
            </p>
          </div>
        </div>
      </section>

      {/* --- PERFECT WASH SECTION --- */}
      <section className="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="relative slide-left">
          <img src="https://res.cloudinary.com/dvnoyis73/image/upload/q_auto/f_auto/v1778397248/2_gfus3d_e_background_removal_f_png_nvvznd.png" alt="Wash" className="rounded-[50px] w-full h-100 md:h-137.5 object-contain shadow-2xl border-4 border-green-400" />
          <div className="absolute -bottom-6 -right-2 md:-right-8 bg-white p-6 rounded-[30px] shadow-2xl">
            <p className="text-green-700 font-black text-sm md:text-xl italic uppercase">Residue-Free Promise.</p>
          </div>
        </div>
        <div className="space-y-8 slide-right">
          <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter italic uppercase">
            Beyond just <br/> <span className="text-green-300">stain removal.</span>
          </h2>
          <p className="text-xl text-green-50 leading-relaxed font-medium">
             Conventional detergents leave a toxic film. <strong>NOHAZZ</strong> is engineered to vanish—leaving nothing behind but purity.
          </p>
        </div>
      </section>

      {/* --- ZERO PLASTIC SECTION --- */}
      <section className="max-w-6xl mx-auto py-20 px-6 mb-20">
        <div className="bg-white rounded-[50px] md:rounded-[80px] p-10 md:p-20 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="grid grid-cols-2 gap-4 slide-left order-2 md:order-1">
             <img src={img1} className="rounded-3xl h-36 md:h-56 w-full object-cover shadow-lg border-2 border-green-700" />
             <img src={img2} className="rounded-3xl h-36 md:h-56 w-full object-cover shadow-lg border-2 border-green-700" />
             <img src={img3} className="rounded-[40px] h-56 md:h-72 w-full object-cover shadow-lg border-2 border-green-700 col-span-2" />
          </div>

          <div className="space-y-8 order-1 md:order-2 slide-right">
            <h2 className="text-5xl md:text-7xl font-black text-green-700 tracking-tighter italic uppercase leading-none">
              Zero Plastic <br/> <span className="text-green-500">Future.</span>
            </h2>
            <div className="space-y-4">
               <div className="flex items-center gap-5 p-5 rounded-[30px] bg-green-50 border-2 border-green-100 shadow-sm">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-white font-black italic bg-green-700">R</div>
                  <span className="font-bold text-green-800 text-base md:text-lg">Refill System Technology</span>
               </div>
               <div className="flex items-center gap-5 p-5 rounded-[30px] bg-green-50 border-2 border-green-100 shadow-sm">
                  <div className="h-12 w-12 rounded-2xl flex items-center justify-center text-white font-black italic bg-green-700">C</div>
                  <span className="font-bold text-green-800 text-base md:text-lg">Circular Economy Model</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  );
}

export default About;