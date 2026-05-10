import { useState } from "react"

interface ProductCardProps {
  front: string
  back: string
  name: string
}

export default function ProductCard({
  front,
  back,
  name,
}: ProductCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="w-full flex justify-center">

      {/* Perspective wrapper */}
      <div
        onClick={() => setFlipped(!flipped)}
        className="relative w-full max-w-sm h-95 cursor-pointer perspective"
      >

        {/* Inner card */}
        <div
          className={`
            relative w-full h-full transition-transform duration-700
            transform-style-preserve-3d
            ${flipped ? "rotate-y-180" : ""}
          `}
        >

          {/* FRONT */}
          <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden border border-white/10 bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

            <img
              src={front}
              alt={name}
              className="w-full h-full object-contain scale-105 transition-transform duration-700 hover:scale-110"
            />

            {/* glow overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-black/10" />

            {/* label */}
            <div className="absolute bottom-4 left-4">
              <p className="text-green-300 text-sm tracking-wide font-semibold">
                {name}
              </p>
              <p className="text-gray-400 text-xs">Front View</p>
            </div>

          </div>

          {/* BACK */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-3xl overflow-hidden border border-green-400/20 bg-black/40 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

            <img
              src={back}
              alt={name}
              className="w-full h-full object-contain scale-105 transition-transform duration-700 hover:scale-110"
            />

            {/* glow overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-green-500/10" />

            {/* label */}
            <div className="absolute bottom-4 left-4">
              <p className="text-green-400 text-sm tracking-wide font-semibold">
                {name}
              </p>
              <p className="text-gray-400 text-xs">Back View</p>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}