"use client"

interface ExerciseAnimationProps {
  exerciseName: string
}

export function ExerciseAnimation({ exerciseName }: ExerciseAnimationProps) {
  // Map exercise names to animation components
  const getAnimation = () => {
    const name = exerciseName.toLowerCase()

    if (name.includes("squat")) {
      return <SquatAnimation />
    } else if (name.includes("bench press")) {
      return <BenchPressAnimation />
    } else if (name.includes("fly")) {
      return <FlyAnimation />
    } else if (name.includes("shoulder press")) {
      return <ShoulderPressAnimation />
    } else if (name.includes("curl")) {
      return <CurlAnimation />
    } else if (name.includes("calf")) {
      return <CalfRaiseAnimation />
    } else if (name.includes("wrist")) {
      return <WristCurlAnimation />
    } else if (name.includes("hand swing") || name.includes("arm circle")) {
      return <ArmCircleAnimation />
    } else if (name.includes("neck rotation")) {
      return <NeckRotationAnimation />
    } else if (name.includes("waist rotation")) {
      return <WaistRotationAnimation />
    } else if (name.includes("jumping") || name.includes("march")) {
      return <JumpingAnimation />
    } else if (name.includes("stretch")) {
      return <StretchAnimation />
    }

    return <GenericAnimation />
  }

  return <div className="flex items-center justify-center rounded-xl bg-background/50 p-4">{getAnimation()}</div>
}

function SquatAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="armGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.75 0.20 190)" />
          <stop offset="100%" stopColor="oklch(0.65 0.20 190)" />
        </linearGradient>
        <linearGradient id="legGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.70 0.25 250)" />
          <stop offset="100%" stopColor="oklch(0.60 0.25 250)" />
        </linearGradient>
        <linearGradient id="torsoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.65 0.25 270)" />
          <stop offset="100%" stopColor="oklch(0.55 0.25 270)" />
        </linearGradient>
      </defs>
      <style>
        {`
          @keyframes squat {
            0% { 
              d: path('M100,55 L100,100');
            }
            50% { 
              d: path('M100,55 L100,85');
            }
            100% { 
              d: path('M100,55 L100,100');
            }
          }
          @keyframes squatLegsUp {
            0%, 100% { 
              d: path('M100,100 L85,125 L80,145');
            }
            50% { 
              d: path('M100,85 L85,110 L75,130');
            }
          }
          @keyframes squatLegsUp2 {
            0%, 100% { 
              d: path('M100,100 L115,125 L120,145');
            }
            50% { 
              d: path('M100,85 L115,110 L125,130');
            }
          }
          @keyframes squatArms {
            0%, 100% { 
              d: path('M100,70 L80,85');
            }
            50% { 
              d: path('M100,60 L70,70');
            }
          }
          @keyframes squatArms2 {
            0%, 100% { 
              d: path('M100,70 L120,85');
            }
            50% { 
              d: path('M100,60 L130,70');
            }
          }
          @keyframes squatHead {
            0%, 100% { cy: 40; }
            50% { cy: 35; }
          }
          @keyframes arrowBounce {
            0%, 100% { opacity: 0.3; transform: translateY(0); }
            50% { opacity: 1; transform: translateY(5px); }
          }
          @keyframes ghostFade {
            0%, 100% { opacity: 0.15; }
            50% { opacity: 0.05; }
          }
          .squat-torso { animation: squat 2.5s ease-in-out infinite; }
          .squat-leg1 { animation: squatLegsUp 2.5s ease-in-out infinite; }
          .squat-leg2 { animation: squatLegsUp2 2.5s ease-in-out infinite; }
          .squat-arm1 { animation: squatArms 2.5s ease-in-out infinite; }
          .squat-arm2 { animation: squatArms2 2.5s ease-in-out infinite; }
          .squat-head { animation: squatHead 2.5s ease-in-out infinite; }
          .arrow { animation: arrowBounce 2.5s ease-in-out infinite; }
          .ghost { animation: ghostFade 2.5s ease-in-out infinite; }
        `}
      </style>

      {/* Ghost outline - starting position */}
      <g className="ghost" opacity="0.15">
        <circle
          cx="100"
          cy="40"
          r="16"
          fill="none"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <line x1="100" y1="55" x2="100" y2="100" stroke="oklch(0.75 0.20 190)" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="100" y1="100" x2="85" y2="125" stroke="oklch(0.70 0.25 250)" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="85" y1="125" x2="80" y2="145" stroke="oklch(0.70 0.25 250)" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="100" y1="100" x2="115" y2="125" stroke="oklch(0.70 0.25 250)" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="115" y1="125" x2="120" y2="145" stroke="oklch(0.70 0.25 250)" strokeWidth="3" strokeDasharray="4 4" />
      </g>

      {/* Grid platform */}
      <g opacity="0.3">
        <line x1="60" y1="150" x2="140" y2="150" stroke="oklch(0.75 0.20 190)" strokeWidth="2" />
        <line x1="70" y1="150" x2="70" y2="155" stroke="oklch(0.75 0.20 190)" strokeWidth="1" />
        <line x1="90" y1="150" x2="90" y2="155" stroke="oklch(0.75 0.20 190)" strokeWidth="1" />
        <line x1="110" y1="150" x2="110" y2="155" stroke="oklch(0.75 0.20 190)" strokeWidth="1" />
        <line x1="130" y1="150" x2="130" y2="155" stroke="oklch(0.75 0.20 190)" strokeWidth="1" />
      </g>

      {/* Directional arrow */}
      <g className="arrow">
        <path
          d="M50,40 L50,50 M45,45 L50,50 L55,45"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text x="50" y="35" fill="oklch(0.75 0.20 190)" fontSize="9" fontWeight="600" textAnchor="middle">
          DOWN
        </text>
      </g>

      {/* Animated figure */}
      <g>
        {/* Head with gradient */}
        <circle
          className="squat-head"
          cx="100"
          cy="40"
          r="16"
          fill="url(#torsoGrad)"
          stroke="oklch(0.75 0.20 270)"
          strokeWidth="1"
        />

        {/* Joints */}
        <circle className="squat-head" cx="100" cy="40" r="3" fill="oklch(0.95 0.1 190)" />
        <circle cx="100" cy="55" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />

        {/* Torso */}
        <path
          className="squat-torso"
          d="M100,55 L100,100"
          stroke="url(#torsoGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="100" cy="100" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />

        {/* Arms */}
        <path
          className="squat-arm1"
          d="M100,70 L80,85"
          stroke="url(#armGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="100" cy="70" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="80" cy="85" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />

        <path
          className="squat-arm2"
          d="M100,70 L120,85"
          stroke="url(#armGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="120" cy="85" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />

        {/* Legs with joints */}
        <path
          className="squat-leg1"
          d="M100,100 L85,125 L80,145"
          stroke="url(#legGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="85" cy="125" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />
        <circle cx="80" cy="145" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />

        <path
          className="squat-leg2"
          d="M100,100 L115,125 L120,145"
          stroke="url(#legGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="115" cy="125" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />
        <circle cx="120" cy="145" r="4" fill="oklch(0.95 0.1 190)" className="squat-head" />
      </g>

      <text
        x="100"
        y="180"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        SQUAT
      </text>
    </svg>
  )
}

function BenchPressAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <defs>
        <linearGradient id="benchArmGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="oklch(0.75 0.20 190)" />
          <stop offset="100%" stopColor="oklch(0.65 0.20 190)" />
        </linearGradient>
      </defs>
      <style>
        {`
          @keyframes benchBar {
            0%, 100% { transform: translateY(25px); }
            50% { transform: translateY(0px); }
          }
          @keyframes benchArm1 {
            0%, 100% { 
              d: path('M80,95 L70,115');
            }
            50% { 
              d: path('M80,95 L70,90');
            }
          }
          @keyframes benchArm2 {
            0%, 100% { 
              d: path('M120,95 L130,115');
            }
            50% { 
              d: path('M120,95 L130,90');
            }
          }
          .bench-bar { animation: benchBar 2.5s ease-in-out infinite; }
          .bench-arm-left { animation: benchArm1 2.5s ease-in-out infinite; }
          .bench-arm-right { animation: benchArm2 2.5s ease-in-out infinite; }
        `}
      </style>

      {/* Bench equipment */}
      <rect x="60" y="105" width="80" height="10" fill="oklch(0.30 0.02 240)" rx="3" />
      <rect x="55" y="115" width="5" height="20" fill="oklch(0.25 0.02 240)" rx="2" />
      <rect x="140" y="115" width="5" height="20" fill="oklch(0.25 0.02 240)" rx="2" />

      {/* Ghost position - arms extended */}
      <g opacity="0.12">
        <line x1="50" y1="65" x2="150" y2="65" stroke="oklch(0.75 0.20 190)" strokeWidth="4" strokeDasharray="4 4" />
        <line x1="80" y1="95" x2="70" y2="90" stroke="oklch(0.75 0.20 190)" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="120" y1="95" x2="130" y2="90" stroke="oklch(0.75 0.20 190)" strokeWidth="3" strokeDasharray="4 4" />
      </g>

      {/* Arrow indicator */}
      <g opacity="0.6">
        <path
          d="M155,80 L155,70 M150,75 L155,70 L160,75"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <text x="165" y="77" fill="oklch(0.75 0.20 190)" fontSize="9" fontWeight="600">
          UP
        </text>
      </g>

      {/* Person lying down */}
      <circle cx="100" cy="98" r="13" fill="url(#benchArmGrad)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
      <circle cx="100" cy="98" r="3" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="110" x2="100" y2="130" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="130" r="4" fill="oklch(0.95 0.1 190)" />

      {/* Animated barbell and arms */}
      <g className="bench-bar">
        {/* Barbell */}
        <line x1="50" y1="90" x2="150" y2="90" stroke="oklch(0.85 0.05 60)" strokeWidth="6" strokeLinecap="round" />
        <rect x="48" y="85" width="8" height="10" fill="oklch(0.40 0.05 240)" rx="2" />
        <rect x="144" y="85" width="8" height="10" fill="oklch(0.40 0.05 240)" rx="2" />

        {/* Arms */}
        <path
          className="bench-arm-left"
          d="M80,95 L70,115"
          stroke="url(#benchArmGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="80" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="70" cy="115" r="4" fill="oklch(0.95 0.1 190)" />

        <path
          className="bench-arm-right"
          d="M120,95 L130,115"
          stroke="url(#benchArmGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="120" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="130" cy="115" r="4" fill="oklch(0.95 0.1 190)" />

        {/* Shoulder joints */}
        <circle cx="80" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="120" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <text
        x="100"
        y="165"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        BENCH PRESS
      </text>
    </svg>
  )
}

function FlyAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes flyLeft {
            0%, 100% { 
              d: path('M85,95 L50,90');
            }
            50% { 
              d: path('M85,95 L75,70');
            }
          }
          @keyframes flyRight {
            0%, 100% { 
              d: path('M115,95 L150,90');
            }
            50% { 
              d: path('M115,95 L125,70');
            }
          }
          @keyframes flyDbLeft {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(25px, -20px); }
          }
          @keyframes flyDbRight {
            0%, 100% { transform: translate(0, 0); }
            50% { transform: translate(-25px, -20px); }
          }
          .fly-arm-left { animation: flyLeft 3s ease-in-out infinite; }
          .fly-arm-right { animation: flyRight 3s ease-in-out infinite; }
          .fly-db-left { animation: flyDbLeft 3s ease-in-out infinite; }
          .fly-db-right { animation: flyDbRight 3s ease-in-out infinite; }
        `}
      </style>

      {/* Bench */}
      <rect x="60" y="105" width="80" height="10" fill="oklch(0.30 0.02 240)" rx="3" />

      {/* Motion arcs */}
      <path
        d="M 50,90 Q 75,55 100,60"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
        opacity="0.3"
      />
      <path
        d="M 150,90 Q 125,55 100,60"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
        opacity="0.3"
      />

      {/* Person */}
      <circle cx="100" cy="98" r="13" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
      <circle cx="100" cy="98" r="3" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="110" x2="100" y2="130" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />

      {/* Animated arms with dumbbells */}
      <g>
        <path
          className="fly-arm-left"
          d="M85,95 L50,90"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="85" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <g className="fly-db-left">
          <ellipse cx="50" cy="90" rx="8" ry="12" fill="oklch(0.40 0.05 240)" />
          <circle cx="50" cy="90" r="4" fill="oklch(0.95 0.1 190)" />
        </g>

        <path
          className="fly-arm-right"
          d="M115,95 L150,90"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="115" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <g className="fly-db-right">
          <ellipse cx="150" cy="90" rx="8" ry="12" fill="oklch(0.40 0.05 240)" />
          <circle cx="150" cy="90" r="4" fill="oklch(0.95 0.1 190)" />
        </g>
      </g>

      <text
        x="100"
        y="165"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        DUMBBELL FLY
      </text>
    </svg>
  )
}

function ShoulderPressAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes shoulderPressLeft {
            0%, 100% { 
              d: path('M90,75 L75,90 L70,110');
            }
            50% { 
              d: path('M90,75 L80,60 L75,45');
            }
          }
          @keyframes shoulderPressRight {
            0%, 100% { 
              d: path('M110,75 L125,90 L130,110');
            }
            50% { 
              d: path('M110,75 L120,60 L125,45');
            }
          }
          @keyframes pressDb {
            0%, 100% { cy: 110; }
            50% { cy: 45; }
          }
          .press-left { animation: shoulderPressLeft 2.5s ease-in-out infinite; }
          .press-right { animation: shoulderPressRight 2.5s ease-in-out infinite; }
          .press-db { animation: pressDb 2.5s ease-in-out infinite; }
        `}
      </style>

      {/* Ghost position - arms down */}
      <g opacity="0.12">
        <line x1="90" y1="75" x2="70" y2="110" stroke="oklch(0.75 0.20 190)" strokeWidth="3" strokeDasharray="4 4" />
        <line x1="110" y1="75" x2="130" y2="110" stroke="oklch(0.75 0.20 190)" strokeWidth="3" strokeDasharray="4 4" />
      </g>

      {/* Arrow */}
      <g opacity="0.6">
        <path
          d="M40,80 L40,60 M35,65 L40,60 L45,65"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <text x="40" y="95" fill="oklch(0.75 0.20 190)" fontSize="9" fontWeight="600" textAnchor="middle">
          PRESS
        </text>
      </g>

      {/* Platform */}
      <line x1="60" y1="155" x2="140" y2="155" stroke="oklch(0.30 0.02 240)" strokeWidth="3" opacity="0.4" />

      {/* Person */}
      <circle cx="100" cy="60" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
      <circle cx="100" cy="60" r="3" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="75" x2="100" y2="130" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="75" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="100" cy="130" r="4" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="130" x2="90" y2="155" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="130" x2="110" y2="155" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="90" cy="155" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="110" cy="155" r="4" fill="oklch(0.95 0.1 190)" />

      {/* Animated arms with dumbbells */}
      <g>
        <path
          className="press-left"
          d="M90,75 L75,90 L70,110"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="90" cy="75" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="75" cy="90" r="4" fill="oklch(0.95 0.1 190)" className="press-db" />
        <ellipse className="press-db" cx="70" cy="110" rx="8" ry="12" fill="oklch(0.40 0.05 240)" />
        <circle className="press-db" cx="70" cy="110" r="4" fill="oklch(0.95 0.1 190)" />

        <path
          className="press-right"
          d="M110,75 L125,90 L130,110"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="110" cy="75" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="125" cy="90" r="4" fill="oklch(0.95 0.1 190)" className="press-db" />
        <ellipse className="press-db" cx="130" cy="110" rx="8" ry="12" fill="oklch(0.40 0.05 240)" />
        <circle className="press-db" cx="130" cy="110" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <text
        x="100"
        y="180"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        SHOULDER PRESS
      </text>
    </svg>
  )
}

function CurlAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes curlForearm {
            0%, 100% { 
              d: path('M75,90 L70,115');
            }
            50% { 
              d: path('M75,90 L65,70');
            }
          }
          @keyframes curlDb {
            0%, 100% { cy: 115; }
            50% { cy: 70; }
          }
          .curl-forearm { animation: curlForearm 2s ease-in-out infinite; }
          .curl-db { animation: curlDb 2s ease-in-out infinite; }
        `}
      </style>

      {/* Ghost - arm down */}
      <g opacity="0.12">
        <line x1="75" y1="90" x2="70" y2="115" stroke="oklch(0.75 0.20 190)" strokeWidth="3" strokeDasharray="4 4" />
        <circle
          cx="70"
          cy="120"
          r="6"
          stroke="oklch(0.40 0.05 240)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="4 4"
        />
      </g>

      {/* Curl arc path */}
      <path
        d="M 70,115 Q 60,90 65,70"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
        opacity="0.3"
      />

      {/* Arrow */}
      <g opacity="0.6">
        <path d="M45,100 Q 40,85 45,70" stroke="oklch(0.75 0.20 190)" strokeWidth="2" fill="none" />
        <path
          d="M42,74 L45,70 L48,74"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <text x="35" y="88" fill="oklch(0.75 0.20 190)" fontSize="9" fontWeight="600">
          CURL
        </text>
      </g>

      {/* Platform */}
      <line x1="60" y1="160" x2="140" y2="160" stroke="oklch(0.30 0.02 240)" strokeWidth="3" opacity="0.4" />

      {/* Person */}
      <circle cx="100" cy="50" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
      <circle cx="100" cy="50" r="3" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="65" x2="100" y2="130" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="65" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="100" cy="130" r="4" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="130" x2="90" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="130" x2="110" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="90" cy="160" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="110" cy="160" r="4" fill="oklch(0.95 0.1 190)" />

      {/* Static arm */}
      <line x1="110" y1="75" x2="130" y2="110" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="110" cy="75" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="130" cy="110" r="4" fill="oklch(0.95 0.1 190)" />
      <ellipse cx="135" cy="115" rx="7" ry="11" fill="oklch(0.40 0.05 240)" />

      {/* Curling arm with animated dumbbell */}
      <g>
        <line x1="90" y1="75" x2="75" y2="90" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="90" cy="75" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="75" cy="90" r="4" fill="oklch(0.95 0.1 190)" />

        <path
          className="curl-forearm"
          d="M75,90 L70,115"
          stroke="oklch(0.75 0.20 190)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />
        <circle className="curl-db" cx="70" cy="115" r="4" fill="oklch(0.95 0.1 190)" />
        <ellipse className="curl-db" cx="65" cy="120" rx="7" ry="11" fill="oklch(0.40 0.05 240)" />
      </g>

      <text
        x="100"
        y="185"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        BICEP CURL
      </text>
    </svg>
  )
}

function CalfRaiseAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes calfRaise {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-15px); }
          }
          .calf-body { animation: calfRaise 1.5s ease-in-out infinite; }
        `}
      </style>

      {/* Platform */}
      <rect x="70" y="145" width="60" height="8" fill="oklch(0.30 0.02 240)" rx="3" />

      <g className="calf-body">
        <circle cx="100" cy="40" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
        <circle cx="100" cy="40" r="3" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="55" x2="100" y2="110" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="55" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="100" cy="110" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="70" x2="85" y2="85" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="70" x2="115" y2="85" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="70" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="85" cy="85" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="115" cy="85" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="110" x2="95" y2="140" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="110" x2="105" y2="140" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="95" cy="140" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="105" cy="140" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <text
        x="100"
        y="175"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        CALF RAISE
      </text>
    </svg>
  )
}

function WristCurlAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes wristCurl {
            0%, 100% { 
              d: path('M120,90 L140,90');
            }
            50% { 
              d: path('M120,90 L140,75');
            }
          }
          .wrist-hand { animation: wristCurl 1.5s ease-in-out infinite; }
        `}
      </style>

      <rect x="40" y="95" width="80" height="10" fill="oklch(0.30 0.02 240)" rx="3" />
      <line x1="60" y1="90" x2="120" y2="90" stroke="oklch(0.65 0.25 270)" strokeWidth="6" strokeLinecap="round" />
      <circle cx="60" cy="90" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="120" cy="90" r="4" fill="oklch(0.95 0.1 190)" />

      <path
        className="wrist-hand"
        d="M120,90 L140,90"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="5"
        strokeLinecap="round"
        fill="none"
      />
      <ellipse cx="145" cy="90" rx="7" ry="11" fill="oklch(0.40 0.05 240)" />

      <text
        x="100"
        y="140"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        WRIST CURL
      </text>
    </svg>
  )
}

function ArmCircleAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes armCircle {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .circle-left { transform-origin: 100px 70px; animation: armCircle 3s linear infinite; }
          .circle-right { transform-origin: 100px 70px; animation: armCircle 3s linear infinite reverse; }
        `}
      </style>

      {/* Circular motion paths */}
      <circle
        cx="70"
        cy="70"
        r="30"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.25"
      />
      <circle
        cx="130"
        cy="70"
        r="30"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="4 4"
        opacity="0.25"
      />

      <circle cx="100" cy="50" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
      <circle cx="100" cy="50" r="3" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="65" x2="100" y2="120" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="65" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="100" cy="120" r="4" fill="oklch(0.95 0.1 190)" />

      <g className="circle-left">
        <line x1="100" y1="70" x2="70" y2="70" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="70" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="70" cy="70" r="4" fill="oklch(0.95 0.1 190)" />
      </g>
      <g className="circle-right">
        <line x1="100" y1="70" x2="130" y2="70" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="130" cy="70" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <line x1="100" y1="120" x2="90" y2="150" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="120" x2="110" y2="150" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="90" cy="150" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="110" cy="150" r="4" fill="oklch(0.95 0.1 190)" />

      <text
        x="100"
        y="180"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        ARM CIRCLES
      </text>
    </svg>
  )
}

function NeckRotationAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes neckRotate {
            0%, 100% { transform: rotate(-20deg); }
            50% { transform: rotate(20deg); }
          }
          .neck-head { transform-origin: 100px 75px; animation: neckRotate 2s ease-in-out infinite; }
        `}
      </style>

      {/* Arc showing head rotation */}
      <path
        d="M 80,60 Q 100,45 120,60"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
        opacity="0.3"
      />

      <line x1="100" y1="75" x2="100" y2="130" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="75" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="100" cy="130" r="4" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="90" x2="80" y2="110" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="90" x2="120" y2="110" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="90" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="80" cy="110" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="120" cy="110" r="4" fill="oklch(0.95 0.1 190)" />

      <g className="neck-head">
        <line x1="100" y1="60" x2="100" y2="75" stroke="oklch(0.65 0.25 270)" strokeWidth="4" strokeLinecap="round" />
        <circle cx="100" cy="50" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
        <circle cx="100" cy="50" r="3" fill="oklch(0.95 0.1 190)" />
        <circle cx="100" cy="60" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <line x1="100" y1="130" x2="90" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="130" x2="110" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="90" cy="160" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="110" cy="160" r="4" fill="oklch(0.95 0.1 190)" />

      <text
        x="100"
        y="185"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        NECK ROTATION
      </text>
    </svg>
  )
}

function WaistRotationAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes waistRotate {
            0%, 100% { transform: rotate(-25deg); }
            50% { transform: rotate(25deg); }
          }
          .waist-upper { transform-origin: 100px 90px; animation: waistRotate 2.5s ease-in-out infinite; }
        `}
      </style>

      {/* Rotation arc */}
      <path
        d="M 70,80 Q 100,70 130,80"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="1.5"
        fill="none"
        strokeDasharray="3 3"
        opacity="0.3"
      />

      <line x1="100" y1="90" x2="100" y2="130" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="100" cy="90" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="100" cy="130" r="4" fill="oklch(0.95 0.1 190)" />
      <line x1="100" y1="130" x2="85" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <line x1="100" y1="130" x2="115" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
      <circle cx="85" cy="160" r="4" fill="oklch(0.95 0.1 190)" />
      <circle cx="115" cy="160" r="4" fill="oklch(0.95 0.1 190)" />

      <g className="waist-upper">
        <circle cx="100" cy="50" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
        <circle cx="100" cy="50" r="3" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="65" x2="100" y2="90" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="65" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="75" x2="75" y2="85" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="75" x2="125" y2="85" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="75" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="75" cy="85" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="125" cy="85" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <text
        x="100"
        y="185"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        WAIST ROTATION
      </text>
    </svg>
  )
}

function JumpingAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes jump {
            0%, 100% { transform: translateY(20px); }
            50% { transform: translateY(-10px); }
          }
          .jump-body { animation: jump 1.2s ease-in-out infinite; }
        `}
      </style>

      <line x1="60" y1="145" x2="140" y2="145" stroke="oklch(0.30 0.02 240)" strokeWidth="4" strokeLinecap="round" />

      <g className="jump-body">
        <circle cx="100" cy="40" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
        <circle cx="100" cy="40" r="3" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="55" x2="100" y2="100" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="55" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="100" cy="100" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="70" x2="85" y2="50" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="70" x2="115" y2="50" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="70" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="85" cy="50" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="115" cy="50" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="100" x2="90" y2="120" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="100" x2="110" y2="120" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="90" cy="120" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="110" cy="120" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <text
        x="100"
        y="170"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        JUMPING
      </text>
    </svg>
  )
}

function StretchAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes stretch {
            0%, 100% { transform: scale(1, 1); }
            50% { transform: scale(1.08, 0.96); }
          }
          .stretch-body { transform-origin: 100px 100px; animation: stretch 3s ease-in-out infinite; }
        `}
      </style>

      {/* Stretch indicators */}
      <path
        d="M 60,95 L 50,95 M 55,90 L 50,95 L 55,100"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />
      <path
        d="M 140,95 L 150,95 M 145,90 L 150,95 L 145,100"
        stroke="oklch(0.75 0.20 190)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        opacity="0.5"
      />

      <g className="stretch-body">
        <circle cx="100" cy="70" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
        <circle cx="100" cy="70" r="3" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="85" x2="100" y2="130" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="85" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="100" cy="130" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="95" x2="60" y2="95" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="95" x2="140" y2="95" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="60" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="140" cy="95" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="130" x2="80" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="130" x2="120" y2="160" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="80" cy="160" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="120" cy="160" r="4" fill="oklch(0.95 0.1 190)" />
      </g>

      <text
        x="100"
        y="185"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        STRETCHING
      </text>
    </svg>
  )
}

function GenericAnimation() {
  return (
    <svg className="h-48 w-48" viewBox="0 0 200 200">
      <style>
        {`
          @keyframes pulse {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.03); }
          }
          .pulse { animation: pulse 2s ease-in-out infinite; }
        `}
      </style>
      <g className="pulse">
        <circle cx="100" cy="50" r="15" fill="oklch(0.65 0.25 270)" stroke="oklch(0.75 0.20 270)" strokeWidth="1" />
        <circle cx="100" cy="50" r="3" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="65" x2="100" y2="120" stroke="oklch(0.65 0.25 270)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="65" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="100" cy="120" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="80" x2="75" y2="100" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="80" x2="125" y2="100" stroke="oklch(0.75 0.20 190)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="100" cy="80" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="75" cy="100" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="125" cy="100" r="4" fill="oklch(0.95 0.1 190)" />
        <line x1="100" y1="120" x2="85" y2="150" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="120" x2="115" y2="150" stroke="oklch(0.70 0.25 250)" strokeWidth="5" strokeLinecap="round" />
        <circle cx="85" cy="150" r="4" fill="oklch(0.95 0.1 190)" />
        <circle cx="115" cy="150" r="4" fill="oklch(0.95 0.1 190)" />
      </g>
      <text
        x="100"
        y="180"
        textAnchor="middle"
        fill="oklch(0.75 0.20 190)"
        fontSize="11"
        fontWeight="700"
        letterSpacing="1"
      >
        EXERCISE
      </text>
    </svg>
  )
}
