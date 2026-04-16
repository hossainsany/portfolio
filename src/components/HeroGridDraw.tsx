import { motion } from 'motion/react'

export default function HeroGridDraw() {
  const lines = Array.from({ length: 50 })
  const drawDistance = 2000
  const glowColor = '#fffafa05' // Semi-transparent white for glow effect

  return (
    <div className="absolute inset-0 z-1 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(to bottom, black 50%, transparent 100%)',
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="static-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#0B1327"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#static-grid)" />
        </svg>

        {/* =========================================
            SVG 2: ANIMATED "WAVE" LINES (Top)
            ========================================= */}
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Draw Vertical Lines */}
          {lines.map((_, i) => (
            <motion.line
              key={`col-${i}`}
              x1={i * 40}
              y1={0}
              x2={i * 40}
              y2={drawDistance}
              stroke={glowColor}
              strokeWidth="1"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                delay: i * 0.15,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0.5,
              }}
            />
          ))}

          {/* Draw Horizontal Lines */}
          {lines.map((_, i) => (
            <motion.line
              key={`row-${i}`}
              x1={0}
              y1={i * 40}
              x2={drawDistance}
              y2={i * 40}
              stroke={glowColor}
              strokeWidth="1"
              initial={{ pathLength: 0, pathOffset: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 1],
                pathOffset: [0, 0, 1],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 6,
                delay: i * 0.15,
                ease: 'easeInOut',
                repeat: Infinity,
                repeatType: 'loop',
                repeatDelay: 0.5,
              }}
            />
          ))}
        </svg>
      </div>

      {/* Overlay to catch clicks if needed, or act as a generic pointer shield */}
      <div className="absolute inset-0 pointer-events-none" />
    </div>
  )
}
