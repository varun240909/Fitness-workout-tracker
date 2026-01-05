"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ExerciseAnimationProps {
  exerciseName: string
}

export function ExerciseAnimation({ exerciseName }: ExerciseAnimationProps) {
  const [isPlaying, setIsPlaying] = useState(true)
  const [speed, setSpeed] = useState(1)

  const getAnimation = () => {
    const name = exerciseName.toLowerCase()

    // Chest exercises
    if (name.includes("push-up") || name.includes("push up")) {
      return <PushUpAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("flat") && name.includes("press")) {
      return <BenchPressAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("incline") && name.includes("press")) {
      return <InclinePressAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("pec fly") || name.includes("dumbbell fly")) {
      return <PecFlyAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("pull over") || name.includes("pullover")) {
      return <PulloverAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("tricep")) {
      return <TricepAnimation isPlaying={isPlaying} speed={speed} />
    }
    // Leg exercises
    else if (name.includes("goblet") && name.includes("squat")) {
      return <GobletSquatAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("lunge")) {
      return <LungeAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("extension")) {
      return <LegExtensionAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("rdl") || name.includes("deadlift")) {
      return <RDLAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("calf")) {
      return <CalfRaiseAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("incline walk")) {
      return <InclineWalkAnimation isPlaying={isPlaying} speed={speed} />
    }
    // Back exercises
    else if (name.includes("pull-up") || name.includes("pull up")) {
      return <PullUpAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("lat pull")) {
      return <LatPulldownAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("seated row")) {
      return <SeatedRowAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("dumbbell row")) {
      return <DumbbellRowAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("hammer curl")) {
      return <HammerCurlAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("preacher curl")) {
      return <PreacherCurlAnimation isPlaying={isPlaying} speed={speed} />
    }
    // Shoulder exercises
    else if (name.includes("shoulder press")) {
      return <ShoulderPressAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("lateral raise")) {
      return <LateralRaiseAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("vertical") && name.includes("press")) {
      return <VerticalPressAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("front raise")) {
      return <FrontRaiseAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("crunch")) {
      return <CrunchAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("plank")) {
      return <PlankAnimation isPlaying={isPlaying} speed={speed} />
    }
    // Cardio exercises
    else if (name.includes("running") || name.includes("interval")) {
      return <RunningAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("high knee")) {
      return <HighKneesAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("burpee")) {
      return <BurpeeAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("jumping jack")) {
      return <JumpingJackAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("lateral step") || name.includes("step up")) {
      return <LateralStepAnimation isPlaying={isPlaying} speed={speed} />
    } else if (name.includes("cycle") || name.includes("bike")) {
      return <CycleAnimation isPlaying={isPlaying} speed={speed} />
    }

    return <GenericAnimation isPlaying={isPlaying} speed={speed} />
  }

  return (
    <div className="relative flex flex-col items-center justify-center rounded-xl bg-gradient-to-br from-background/80 to-background/50 p-6">
      {getAnimation()}

      <div className="mt-4 flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={() => setIsPlaying(!isPlaying)} className="h-8 w-8 rounded-full p-0">
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>

        <div className="flex items-center gap-1 rounded-full bg-background/50 px-2 py-1">
          {[0.5, 1, 2].map((s) => (
            <button
              key={s}
              onClick={() => setSpeed(s)}
              className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                speed === s ? "bg-primary text-primary-foreground" : "hover:bg-background/50"
              }`}
            >
              {s}x
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

// Joint component for visible connection points
function Joint({ x, y, r = 5, glow = false }: { x: number; y: number; r?: number; glow?: boolean }) {
  return (
    <>
      {glow && (
        <circle cx={x} cy={y} r={r + 3} fill="oklch(0.75 0.20 190)" opacity="0.3">
          <animate attributeName="opacity" values="0.2;0.5;0.2" dur="1.5s" repeatCount="indefinite" />
        </circle>
      )}
      <circle cx={x} cy={y} r={r} fill="#ffffff" stroke="oklch(0.65 0.25 270)" strokeWidth="2" />
    </>
  )
}

// Arrow for showing movement direction
function MovementArrow({ path, color = "oklch(0.75 0.20 190)" }: { path: string; color?: string }) {
  return (
    <g opacity="0.6">
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="3"
        fill="none"
        strokeDasharray="5,5"
        initial={{ strokeDashoffset: 0 }}
        animate={{ strokeDashoffset: -20 }}
        transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0 0, 10 3, 0 6" fill={color} />
        </marker>
      </defs>
    </g>
  )
}

// Push-up animation with proper form indicators
function PushUpAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return (
    <svg className="h-64 w-full max-w-md" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.75 0.20 190)" />
          <stop offset="100%" stopColor="oklch(0.85 0.20 190)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground plane */}
      <line x1="50" y1="160" x2="250" y2="160" stroke="oklch(0.30 0.02 240)" strokeWidth="2" opacity="0.3" />
      <rect x="40" y="160" width="220" height="1" fill="url(#armGrad)" opacity="0.2" />

      {/* Ghost outline showing starting position */}
      <g opacity="0.2">
        <circle cx="90" cy="110" r="18" fill="oklch(0.75 0.20 190)" />
        <line x1="90" y1="125" x2="210" y2="125" stroke="oklch(0.65 0.25 270)" strokeWidth="6" />
        <line x1="70" y1="155" x2="90" y2="125" stroke="url(#armGrad)" strokeWidth="6" />
        <line x1="110" y1="155" x2="90" y2="125" stroke="url(#armGrad)" strokeWidth="6" />
        <line x1="210" y1="125" x2="200" y2="155" stroke="oklch(0.70 0.25 250)" strokeWidth="6" />
        <line x1="210" y1="125" x2="220" y2="155" stroke="oklch(0.70 0.25 250)" strokeWidth="6" />
      </g>

      {/* Animated body */}
      <motion.g
        animate={
          isPlaying
            ? {
                y: [0, -20, 0],
              }
            : {}
        }
        transition={{
          duration: 3 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.45, 0, 0.55, 1],
        }}
      >
        {/* Head with facial direction indicator */}
        <circle cx="90" cy="110" r="18" fill="oklch(0.65 0.25 270)" filter="url(#glow)" />
        <circle cx="85" cy="108" r="2" fill="oklch(0.95 0.1 190)" />

        {/* Torso (purple) */}
        <line x1="90" y1="125" x2="210" y2="125" stroke="oklch(0.65 0.25 270)" strokeWidth="6" strokeLinecap="round" />

        {/* Arms (cyan) with visible joints */}
        <line x1="70" y1="155" x2="90" y2="125" stroke="url(#armGrad)" strokeWidth="6" strokeLinecap="round" />
        <line x1="110" y1="155" x2="90" y2="125" stroke="url(#armGrad)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={90} y={125} r={6} glow />
        <Joint x={70} y={155} r={5} />
        <Joint x={110} y={155} r={5} />

        {/* Legs (blue) */}
        <line x1="210" y1="125" x2="200" y2="155" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <line x1="210" y1="125" x2="220" y2="155" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={210} y={125} r={6} />
        <Joint x={200} y={155} r={5} />
        <Joint x={220} y={155} r={5} />

        {/* Muscle engagement glow on chest */}
        <motion.ellipse
          cx="150"
          cy="125"
          rx="30"
          ry="15"
          fill="oklch(0.75 0.20 190)"
          opacity="0"
          animate={
            isPlaying
              ? {
                  opacity: [0, 0.4, 0],
                }
              : {}
          }
          transition={{
            duration: 3 / speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Movement arrow */}
      <MovementArrow path="M 150,80 L 150,50 M 150,50 L 145,55 M 150,50 L 155,55" />

      {/* Form annotation */}
      <text x="150" y="185" textAnchor="middle" fill="oklch(0.75 0.20 190)" fontSize="10" fontWeight="600">
        Keep core tight • Elbow 45°
      </text>
    </svg>
  )
}

// Bench Press with bar path visualization
function BenchPressAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return (
    <svg className="h-64 w-full max-w-md" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <linearGradient id="barGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.60 0.05 240)" />
          <stop offset="50%" stopColor="oklch(0.85 0.05 60)" />
          <stop offset="100%" stopColor="oklch(0.60 0.05 240)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Bench */}
      <rect x="80" y="125" width="140" height="12" fill="oklch(0.30 0.02 240)" rx="3" />
      <rect x="75" y="137" width="10" height="30" fill="oklch(0.25 0.02 240)" rx="2" />
      <rect x="215" y="137" width="10" height="30" fill="oklch(0.25 0.02 240)" rx="2" />

      {/* Body on bench */}
      <circle cx="150" cy="120" r="16" fill="oklch(0.65 0.25 270)" filter="url(#glow)" />
      <ellipse cx="150" cy="145" rx="40" ry="20" fill="oklch(0.65 0.25 270)" opacity="0.8" />
      <Joint x={150} y={120} r={7} />

      {/* Barbell with animated movement */}
      <motion.g
        animate={
          isPlaying
            ? {
                y: [0, 30, 0],
              }
            : {}
        }
        transition={{
          duration: 3 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        {/* Bar */}
        <line x1="60" y1="85" x2="240" y2="85" stroke="url(#barGrad)" strokeWidth="6" strokeLinecap="round" />

        {/* Weight plates */}
        <rect x="55" y="78" width="12" height="14" fill="oklch(0.40 0.05 240)" rx="2" />
        <rect x="233" y="78" width="12" height="14" fill="oklch(0.40 0.05 240)" rx="2" />
        <rect x="67" y="80" width="8" height="10" fill="oklch(0.35 0.05 240)" rx="1" />
        <rect x="225" y="80" width="8" height="10" fill="oklch(0.35 0.05 240)" rx="1" />

        {/* Arms holding bar */}
        <line x1="120" y1="120" x2="105" y2="85" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
        <line x1="180" y1="120" x2="195" y2="85" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={120} y={120} r={6} glow />
        <Joint x={180} y={120} r={6} glow />
        <Joint x={105} y={85} r={5} />
        <Joint x={195} y={85} r={5} />

        {/* Muscle glow on arms during press */}
        <motion.line
          x1="120"
          y1="120"
          x2="105"
          y2="85"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="10"
          opacity="0"
          strokeLinecap="round"
          animate={
            isPlaying
              ? {
                  opacity: [0, 0.5, 0],
                }
              : {}
          }
          transition={{
            duration: 3 / speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.line
          x1="180"
          y1="120"
          x2="195"
          y2="85"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="10"
          opacity="0"
          strokeLinecap="round"
          animate={
            isPlaying
              ? {
                  opacity: [0, 0.5, 0],
                }
              : {}
          }
          transition={{
            duration: 3 / speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Bar path indicator (straight line) */}
      <line
        x1="150"
        y1="70"
        x2="150"
        y2="130"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="2"
        strokeDasharray="4,4"
        opacity="0.4"
      />

      {/* Form tips */}
      <text x="150" y="185" textAnchor="middle" fill="oklch(0.75 0.20 190)" fontSize="10" fontWeight="600">
        Straight bar path • Touch chest • Full lockout
      </text>
    </svg>
  )
}

// Goblet Squat with depth indicator
function GobletSquatAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return (
    <svg className="h-64 w-full max-w-md" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground with shadow */}
      <ellipse cx="150" cy="175" rx="60" ry="8" fill="oklch(0.20 0.02 240)" opacity="0.3" />
      <line x1="70" y1="175" x2="230" y2="175" stroke="oklch(0.30 0.02 240)" strokeWidth="2" opacity="0.4" />

      {/* Parallel depth indicator line */}
      <line
        x1="90"
        y1="140"
        x2="210"
        y2="140"
        stroke="oklch(0.70 0.20 120)"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.5"
      />
      <text x="70" y="143" fill="oklch(0.70 0.20 120)" fontSize="9" fontWeight="600">
        Parallel
      </text>

      {/* Animated squat motion */}
      <motion.g
        animate={
          isPlaying
            ? {
                y: [0, 25, 0],
              }
            : {}
        }
        transition={{
          duration: 3.5 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.43, 0.13, 0.57, 0.87],
        }}
      >
        {/* Head */}
        <circle cx="150" cy="50" r="16" fill="oklch(0.65 0.25 270)" filter="url(#glow)" />
        <circle cx="145" cy="48" r="2" fill="oklch(0.95 0.1 190)" />

        {/* Dumbbell held at chest */}
        <ellipse cx="150" cy="85" rx="12" ry="16" fill="oklch(0.40 0.05 240)" />
        <rect x="147" y="75" width="6" height="8" fill="oklch(0.35 0.05 240)" rx="1" />

        {/* Arms holding dumbbell (cyan) */}
        <line x1="140" y1="85" x2="135" y2="70" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <line x1="160" y1="85" x2="165" y2="70" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <Joint x={140} y={85} r={5} glow />
        <Joint x={160} y={85} r={5} glow />
        <Joint x={135} y={70} r={4} />
        <Joint x={165} y={70} r={4} />

        {/* Torso (purple) */}
        <line x1="150" y1="65" x2="150" y2="105" stroke="oklch(0.65 0.25 270)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={150} y={65} r={6} />
        <Joint x={150} y={105} r={6} />

        {/* Legs (blue) with knee joints */}
        <line x1="150" y1="105" x2="135" y2="140" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <line x1="150" y1="105" x2="165" y2="140" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <line x1="135" y1="140" x2="130" y2="175" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <line x1="165" y1="140" x2="170" y2="175" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={135} y={140} r={5} glow />
        <Joint x={165} y={140} r={5} glow />
        <Joint x={130} y={175} r={5} />
        <Joint x={170} y={175} r={5} />

        {/* Glute activation glow */}
        <motion.ellipse
          cx="150"
          cy="105"
          rx="25"
          ry="15"
          fill="oklch(0.70 0.25 250)"
          opacity="0"
          animate={
            isPlaying
              ? {
                  opacity: [0, 0.4, 0],
                }
              : {}
          }
          transition={{
            duration: 3.5 / speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Knee tracking indicator */}
      <motion.g
        opacity="0.5"
        animate={
          isPlaying
            ? {
                y: [0, 25, 0],
              }
            : {}
        }
        transition={{
          duration: 3.5 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.43, 0.13, 0.57, 0.87],
        }}
      >
        <line x1="135" y1="140" x2="130" y2="175" stroke="oklch(0.75 0.20 190)" strokeWidth="2" strokeDasharray="3,3" />
        <text x="115" y="160" fill="oklch(0.75 0.20 190)" fontSize="8" fontWeight="600">
          Over toes
        </text>
      </motion.g>

      {/* Form tips */}
      <text x="150" y="195" textAnchor="middle" fill="oklch(0.75 0.20 190)" fontSize="10" fontWeight="600">
        Chest up • Knees track toes • Squat to parallel
      </text>
    </svg>
  )
}

// Hammer Curl with forearm rotation detail
function HammerCurlAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return (
    <svg className="h-64 w-full max-w-md" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground */}
      <line x1="100" y1="175" x2="200" y2="175" stroke="oklch(0.30 0.02 240)" strokeWidth="2" opacity="0.3" />

      {/* Body (stable) */}
      <circle cx="150" cy="50" r="14" fill="oklch(0.65 0.25 270)" filter="url(#glow)" />
      <line x1="150" y1="63" x2="150" y2="110" stroke="oklch(0.65 0.25 270)" strokeWidth="6" strokeLinecap="round" />
      <line x1="150" y1="110" x2="140" y2="145" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <line x1="150" y1="110" x2="160" y2="145" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <line x1="140" y1="145" x2="140" y2="175" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="145" x2="160" y2="175" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <Joint x={150} y={63} r={6} />
      <Joint x={150} y={110} r={6} />
      <Joint x={140} y={145} r={5} />
      <Joint x={160} y={145} r={5} />

      {/* Right arm curling (animated) */}
      <motion.g
        animate={
          isPlaying
            ? {
                rotate: [0, -70, 0],
              }
            : {}
        }
        style={{ originX: "185px", originY: "75px" }}
        transition={{
          duration: 2.5 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <line x1="185" y1="75" x2="185" y2="115" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={185} y={115} r={5} />

        {/* Dumbbell (neutral grip - hammer position) */}
        <rect x="182" y="115" width="6" height="20" fill="oklch(0.40 0.05 240)" rx="2" />
        <ellipse cx="185" cy="125" rx="8" ry="5" fill="oklch(0.35 0.05 240)" />

        {/* Bicep glow during contraction */}
        <motion.line
          x1="185"
          y1="75"
          x2="185"
          y2="115"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="12"
          opacity="0"
          strokeLinecap="round"
          animate={
            isPlaying
              ? {
                  opacity: [0, 0.5, 0],
                }
              : {}
          }
          transition={{
            duration: 2.5 / speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.g>

      {/* Upper arm (stationary - elbow fixed) */}
      <line x1="160" y1="75" x2="185" y2="75" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
      <Joint x={160} y={75} r={6} />
      <Joint x={185} y={75} r={6} glow />

      {/* Elbow fixed position indicator */}
      <circle cx="185" cy="75" r="12" stroke="oklch(0.70 0.20 120)" strokeWidth="2" fill="none" opacity="0.4" />
      <text x="205" y="80" fill="oklch(0.70 0.20 120)" fontSize="9" fontWeight="600">
        Elbow fixed
      </text>

      {/* Left arm (non-working arm) */}
      <line x1="140" y1="75" x2="115" y2="75" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
      <line x1="115" y1="75" x2="115" y2="115" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
      <Joint x={140} y={75} r={6} />
      <Joint x={115} y={75} r={5} />
      <Joint x={115} y={115} r={5} />
      <rect x="112" y="115" width="6" height="20" fill="oklch(0.40 0.05 240)" rx="2" />

      {/* Form tips */}
      <text x="150" y="195" textAnchor="middle" fill="oklch(0.75 0.20 190)" fontSize="10" fontWeight="600">
        Neutral grip • Elbow stays still • Control the weight
      </text>
    </svg>
  )
}

// Lateral Raise with shoulder abduction visualization
function LateralRaiseAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return (
    <svg className="h-64 w-full max-w-md" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Ground */}
      <line x1="100" y1="175" x2="200" y2="175" stroke="oklch(0.30 0.02 240)" strokeWidth="2" opacity="0.3" />

      {/* Body (stable) */}
      <circle cx="150" cy="55" r="14" fill="oklch(0.65 0.25 270)" filter="url(#glow)" />
      <line x1="150" y1="68" x2="150" y2="115" stroke="oklch(0.65 0.25 270)" strokeWidth="6" strokeLinecap="round" />
      <line x1="150" y1="115" x2="140" y2="150" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <line x1="150" y1="115" x2="160" y2="150" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <line x1="140" y1="150" x2="140" y2="175" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <line x1="160" y1="150" x2="160" y2="175" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
      <Joint x={150} y={68} r={6} />
      <Joint x={150} y={115} r={6} />
      <Joint x={140} y={150} r={5} />
      <Joint x={160} y={150} r={5} />

      {/* Left arm raising */}
      <motion.g
        animate={
          isPlaying
            ? {
                rotate: [0, -85, 0],
              }
            : {}
        }
        style={{ originX: "135px", originY: "75px" }}
        transition={{
          duration: 3 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <line x1="135" y1="75" x2="135" y2="120" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={135} y={120} r={5} />
        <ellipse cx="135" cy="128" rx="5" ry="8" fill="oklch(0.40 0.05 240)" />
      </motion.g>

      {/* Right arm raising */}
      <motion.g
        animate={
          isPlaying
            ? {
                rotate: [0, 85, 0],
              }
            : {}
        }
        style={{ originX: "165px", originY: "75px" }}
        transition={{
          duration: 3 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: [0.42, 0, 0.58, 1],
        }}
      >
        <line x1="165" y1="75" x2="165" y2="120" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={165} y={120} r={5} />
        <ellipse cx="165" cy="128" rx="5" ry="8" fill="oklch(0.40 0.05 240)" />
      </motion.g>

      {/* Shoulders with joints */}
      <Joint x={135} y={75} r={6} glow />
      <Joint x={165} y={75} r={6} glow />
      <line x1="135" y1="75" x2="165" y2="75" stroke="oklch(0.65 0.25 270)" strokeWidth="6" strokeLinecap="round" />

      {/* Shoulder height reference line */}
      <line
        x1="70"
        y1="75"
        x2="230"
        y2="75"
        stroke="oklch(0.70 0.20 120)"
        strokeWidth="2"
        strokeDasharray="5,5"
        opacity="0.4"
      />
      <text x="240" y="78" fill="oklch(0.70 0.20 120)" fontSize="9" fontWeight="600">
        Shoulder level
      </text>

      {/* Deltoid activation glow */}
      <motion.circle
        cx="135"
        cy="75"
        r="15"
        fill="oklch(0.75 0.20 190)"
        opacity="0"
        animate={
          isPlaying
            ? {
                opacity: [0, 0.4, 0],
              }
            : {}
        }
        transition={{
          duration: 3 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.circle
        cx="165"
        cy="75"
        r="15"
        fill="oklch(0.75 0.20 190)"
        opacity="0"
        animate={
          isPlaying
            ? {
                opacity: [0, 0.4, 0],
              }
            : {}
        }
        transition={{
          duration: 3 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      {/* Form tips */}
      <text x="150" y="195" textAnchor="middle" fill="oklch(0.75 0.20 190)" fontSize="10" fontWeight="600">
        Slight bend in elbows • Raise to shoulder height • Control descent
      </text>
    </svg>
  )
}

// Generic fallback animation
function GenericAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return (
    <svg className="h-64 w-full max-w-md" viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <line x1="100" y1="165" x2="200" y2="165" stroke="oklch(0.30 0.02 240)" strokeWidth="2" opacity="0.3" />

      <motion.g
        animate={
          isPlaying
            ? {
                y: [0, -10, 0],
              }
            : {}
        }
        transition={{
          duration: 2 / speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <circle cx="150" cy="70" r="14" fill="oklch(0.65 0.25 270)" filter="url(#glow)" />
        <line x1="150" y1="83" x2="150" y2="125" stroke="oklch(0.65 0.25 270)" strokeWidth="6" strokeLinecap="round" />
        <line x1="135" y1="95" x2="165" y2="95" stroke="oklch(0.75 0.20 190)" strokeWidth="6" strokeLinecap="round" />
        <line x1="150" y1="125" x2="135" y2="165" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <line x1="150" y1="125" x2="165" y2="165" stroke="oklch(0.70 0.25 250)" strokeWidth="6" strokeLinecap="round" />
        <Joint x={150} y={83} r={6} />
        <Joint x={135} y={95} r={5} />
        <Joint x={165} y={95} r={5} />
        <Joint x={150} y={125} r={6} />
        <Joint x={135} y={165} r={5} />
        <Joint x={165} y={165} r={5} />
      </motion.g>

      <text x="150" y="195" textAnchor="middle" fill="oklch(0.75 0.20 190)" fontSize="10" fontWeight="600">
        Exercise animation
      </text>
    </svg>
  )
}

// Placeholder implementations for remaining exercises (following same pattern)
function InclinePressAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function PecFlyAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function PulloverAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function TricepAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function LungeAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function LegExtensionAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function RDLAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function CalfRaiseAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function InclineWalkAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function PullUpAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function LatPulldownAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function SeatedRowAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function DumbbellRowAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function PreacherCurlAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function ShoulderPressAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function VerticalPressAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function FrontRaiseAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function CrunchAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function PlankAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function RunningAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function HighKneesAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function BurpeeAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function JumpingJackAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function LateralStepAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
function CycleAnimation({ isPlaying, speed }: { isPlaying: boolean; speed: number }) {
  return <GenericAnimation isPlaying={isPlaying} speed={speed} />
}
