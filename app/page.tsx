"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WorkoutSection } from "@/components/workout-section"
import { ProgressRing } from "@/components/progress-ring"
import { Dumbbell, Target, Zap } from "lucide-react"
import confetti from "canvas-confetti"

const workoutData = {
  warmup: {
    title: "Warm-up",
    icon: "🔥",
    exercises: [
      {
        name: "Hand swings (front & side)",
        weight: "Bodyweight",
        reps: "30 sec",
        sets: 2,
        notes: "Loosen shoulders",
        videoUrl: "https://www.youtube.com/watch?v=ncPSh7MBRUk",
      },
      {
        name: "Arm circles",
        weight: "Bodyweight",
        reps: "20",
        sets: 2,
        notes: "Small → big circles",
        videoUrl: "https://www.youtube.com/watch?v=P3dzI9opLGE",
      },
      {
        name: "Neck rotation",
        weight: "Bodyweight",
        reps: "10",
        sets: 2,
        notes: "Slow & controlled",
        videoUrl: "https://www.youtube.com/watch?v=sk3oOFmQI0Y",
      },
      {
        name: "Waist rotation",
        weight: "Bodyweight",
        reps: "20",
        sets: 2,
        notes: "Core warm-up",
        videoUrl: "https://www.youtube.com/watch?v=h6XyzlM8m24",
      },
      {
        name: "Light jumping / march",
        weight: "Bodyweight",
        reps: "1 min",
        sets: 1,
        notes: "Increase heart rate",
        videoUrl: "https://www.youtube.com/watch?v=c_Dq_NCzj8M",
      },
    ],
  },
  legs: {
    title: "Legs",
    icon: "🦵",
    exercises: [
      {
        name: "Squats",
        weight: "Bodyweight",
        reps: "20",
        sets: 2,
        notes: "Keep back straight",
        videoUrl: "https://www.youtube.com/watch?v=YaXPRqUwItQ",
      },
      {
        name: "Calf raises (machine)",
        weight: "Machine",
        reps: "10",
        sets: 2,
        notes: "Full stretch & squeeze",
        videoUrl: "https://www.youtube.com/watch?v=pz66Bw6HJ4s",
      },
    ],
  },
  chest: {
    title: "Chest",
    icon: "💪",
    exercises: [
      {
        name: "Bench Press",
        weight: "10 kg",
        reps: "12",
        sets: 3,
        notes: "Controlled reps",
        videoUrl: "https://www.youtube.com/watch?v=rT7DgCr-3pg",
      },
      {
        name: "Dumbbell Fly",
        weight: "5 kg",
        reps: "12",
        sets: 3,
        notes: "Slow stretch",
        videoUrl: "https://www.youtube.com/watch?v=eozdVDA78K0",
      },
    ],
  },
  shoulders: {
    title: "Shoulders",
    icon: "🏋️",
    exercises: [
      {
        name: "Dumbbell Shoulder Press",
        weight: "5 kg",
        reps: "15",
        sets: 3,
        notes: "Don't lock elbows",
        videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
      },
    ],
  },
  biceps: {
    title: "Biceps",
    icon: "💪",
    exercises: [
      {
        name: "Dumbbell Bicep Curl",
        weight: "5 kg",
        reps: "12",
        sets: 3,
        notes: "Strict form",
        videoUrl: "https://www.youtube.com/watch?v=ykJmrZ5v0Oo",
      },
      {
        name: "Double Bicep Curl",
        weight: "5 kg",
        reps: "12",
        sets: 3,
        notes: "Both hands together",
        videoUrl: "https://www.youtube.com/watch?v=sAq_ocpRh_I",
      },
      {
        name: "Hammer Curl",
        weight: "5 kg",
        reps: "12",
        sets: 3,
        notes: "Neutral grip",
        videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4",
      },
      {
        name: "Hammer Bicep Curl",
        weight: "5 kg",
        reps: "12",
        sets: 3,
        notes: "Focus forearms",
        videoUrl: "https://www.youtube.com/watch?v=TwD-YGVP4Bk",
      },
    ],
  },
  forearms: {
    title: "Forearms",
    icon: "✊",
    exercises: [
      {
        name: "Wrist curls / Forearm exercise",
        weight: "5 kg",
        reps: "10",
        sets: 2,
        notes: "Slow movement",
        videoUrl: "https://www.youtube.com/watch?v=3VLTzIrnb5g",
      },
    ],
  },
  cooldown: {
    title: "Cool Down",
    icon: "🧘",
    exercises: [
      {
        name: "Stretching (arms, legs, chest)",
        weight: "—",
        reps: "5 min",
        sets: 1,
        notes: "Prevent soreness",
        videoUrl: "https://www.youtube.com/watch?v=g_tea8ZNk5A",
      },
    ],
  },
}

export default function WorkoutTracker() {
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("completedExercises")
    if (saved) {
      setCompletedExercises(new Set(JSON.parse(saved)))
    }
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("completedExercises", JSON.stringify([...completedExercises]))
    }
  }, [completedExercises, mounted])

  const totalExercises = Object.values(workoutData).reduce((acc, section) => acc + section.exercises.length, 0)

  const toggleExercise = (exerciseId: string) => {
    setCompletedExercises((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId)
      } else {
        newSet.add(exerciseId)
        // Trigger confetti
        confetti({
          particleCount: 50,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#7B61FF", "#9D7BFF", "#6FFFE9"],
        })
      }
      return newSet
    })
  }

  const resetProgress = () => {
    if (confirm("Reset all progress?")) {
      setCompletedExercises(new Set())
    }
  }

  const progress = (completedExercises.size / totalExercises) * 100

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(123,97,255,0.1),transparent_50%)]" />

        <div className="container relative mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full glass-card px-4 py-2">
              <Zap className="h-4 w-4 text-accent" />
              <span className="text-sm text-muted-foreground">Transform Your Body Daily</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-7xl">
              <span className="gradient-text">Daily Full Body</span>
              <br />
              Workout Plan
            </h1>

            <p className="mb-8 text-lg text-muted-foreground text-balance md:text-xl">
              Complete guided workout program with animated demonstrations for every exercise. Track your progress and
              build consistency.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2 glow-effect">
                <Target className="h-5 w-5" />
                Start Workout
              </Button>
              <Button size="lg" variant="outline" className="glass-card bg-transparent">
                View Progress
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Overview */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="glass-card rounded-2xl p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
              <div className="text-center md:text-left">
                <h2 className="mb-2 text-3xl font-bold">Your Progress</h2>
                <p className="text-muted-foreground">
                  {completedExercises.size} of {totalExercises} exercises completed
                </p>
              </div>

              <div className="flex items-center gap-8">
                <ProgressRing progress={progress} size={120} strokeWidth={8} />

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Total Exercises</span>
                    <span className="font-bold">{totalExercises}</span>
                  </div>
                  <Button onClick={resetProgress} variant="ghost" size="sm">
                    Reset Progress
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workout Sections */}
      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto max-w-6xl space-y-8">
          {Object.entries(workoutData).map(([key, section]) => (
            <WorkoutSection
              key={key}
              section={section}
              sectionKey={key}
              completedExercises={completedExercises}
              onToggleExercise={toggleExercise}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Stay consistent. Track progress. Build strength.</p>
        </div>
      </footer>
    </div>
  )
}
