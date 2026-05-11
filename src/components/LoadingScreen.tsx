import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Logo from "../assets/company-logo.png";
import Logo1 from "../assets/brand-logo.png";

type Props = {
  onFinish: () => void;
};

function LoadingScreen({ onFinish }: Props) {
  const [progress, setProgress] = useState(0);
  const loaderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;
      setProgress(start);

      if (start >= 100) {
        clearInterval(interval);

        gsap.to(loaderRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power2.inOut",
          onComplete: () => {
            onFinish(); // 👉 tell App loading finished
          },
        });
      }
    }, 25); // ⬅️ faster + smoother


    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-9999 bg-linear-to-br from-white via-blue-50 to-white flex flex-col items-center justify-center"
    >
      <div className="flex gap-4">
        <img
       
        src={Logo}
        alt="Company Logo"
        className="w-32 h-32 md:w-40 md:h-40 mb-8 object-contain"
      />
     <img
        
        src={Logo1}
        alt="Brand Logo"
        className="w-32 h-32 md:w-40 md:h-40 mb-8 object-contain"
      />
      </div>
      {/* Logo */}
      

      {/* Progress Bar */}
      <div className="w-64 md:w-80 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Percentage */}
      <h1 className="text-blue-700 text-3xl md:text-4xl font-bold mt-6">
        {progress}%
      </h1>
    </div>
  );
}

export default LoadingScreen;