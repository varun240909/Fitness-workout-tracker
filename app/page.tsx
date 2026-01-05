"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { WorkoutSection } from "@/components/workout-section"
import { ProgressRing } from "@/components/progress-ring"
import { Dumbbell, Zap, Calendar } from "lucide-react"
import confetti from "canvas-confetti"

const workoutData = {
  monday: {
    title: "Monday - Chest + Tricep",
    icon: "💪",
    day: "Day 1",
    exercises: [
      {
        name: "Assisted push-up",
        weight: "Machine",
        reps: "10",
        sets: 3,
        notes: "Use band or machine assistance",
        videoUrl: "https://www.youtube.com/watch?v=wRN7inUj4ao",
      },
      {
        name: "Flat Dumbbell press",
        weight: "2 or 5 kg",
        reps: "10-12",
        sets: 3,
        notes: "Controlled movement, don't lock elbows",
        videoUrl: "https://www.youtube.com/watch?v=pKZMNVbfUzQ",
      },
      {
        name: "Incline dumbbell press",
        weight: "5 kg",
        reps: "10",
        sets: 3,
        notes: "Upper chest focus",
        videoUrl: "https://www.youtube.com/watch?v=sK4Rvug6ufo",
      },
      {
        name: "Machine pec fly or dumbbell fly",
        weight: "5 kg",
        reps: "12",
        sets: 3,
        notes: "Squeeze at the top",
        videoUrl: "https://www.youtube.com/watch?v=dY4LduyY8H0",
      },
      {
        name: "Pull over",
        weight: "5 or 7.5 kg",
        reps: "15",
        sets: 3,
        notes: "Stretch lats and chest",
        videoUrl: "https://www.youtube.com/watch?v=l0YnKjgikm0",
      },
      {
        name: "Tricep pull down",
        weight: "Machine",
        reps: "10",
        sets: 4,
        notes: "Keep elbows tucked",
        videoUrl: "https://www.youtube.com/watch?v=odbyvJm7d8s",
      },
    ],
  },
  tuesday: {
    title: "Tuesday - Leg Day",
    icon: "🦵",
    day: "Day 2",
    exercises: [
      {
        name: "Goblet squat",
        weight: "7.5kg or 12.5 kg",
        reps: "12",
        sets: 3,
        notes: "Hold dumbbell at chest",
        videoUrl: "https://www.youtube.com/watch?v=dUT7_EVG_ok",
      },
      {
        name: "Reverse lunges",
        weight: "5 kg",
        reps: "10",
        sets: 3,
        notes: "Each leg - control the descent",
        videoUrl: "https://www.youtube.com/watch?v=9aqXSshQkks",
      },
      {
        name: "Leg extension",
        weight: "20kg or 30kg",
        reps: "10",
        sets: 3,
        notes: "Full range of motion",
        videoUrl: "https://www.youtube.com/watch?v=3pOsjZGe10k",
      },
      {
        name: "RDL Dumbbell or Barbell",
        weight: "5 kg",
        reps: "12",
        sets: 3,
        notes: "Romanian deadlift - feel hamstring stretch",
        videoUrl: "https://www.youtube.com/watch?v=uUjqvxEWcbo",
      },
      {
        name: "Calf raises",
        weight: "Bodyweight",
        reps: "15",
        sets: 3,
        notes: "Full stretch at bottom",
        videoUrl: "https://www.youtube.com/watch?v=0PhsQvV-ZXg",
      },
      {
        name: "Incline walk",
        weight: "—",
        reps: "5 min",
        sets: 1,
        notes: "Treadmill incline 10-15%",
        videoUrl: "https://www.youtube.com/watch?v=Ii71nAaRc_8",
      },
    ],
  },
  wednesday: {
    title: "Wednesday - Back + Bicep",
    icon: "🏋️",
    day: "Day 3",
    exercises: [
      {
        name: "Assisted pull-up",
        weight: "Machine",
        reps: "10",
        sets: 3,
        notes: "Build up to unassisted",
        videoUrl: "https://www.youtube.com/watch?v=gx0RWT7WbmA",
      },
      {
        name: "Lat pull down",
        weight: "Correct posture weight",
        reps: "10",
        sets: 3,
        notes: "Pull to upper chest",
        videoUrl: "https://www.youtube.com/watch?v=G0uMUkXXTbo",
      },
      {
        name: "Seated row",
        weight: "Correct posture weight",
        reps: "10",
        sets: 4,
        notes: "Squeeze shoulder blades",
        videoUrl: "https://www.youtube.com/watch?v=f_r95UajQcg",
      },
      {
        name: "Dumbbell row",
        weight: "10 kg",
        reps: "12",
        sets: 4,
        notes: "Single arm - elbow high",
        videoUrl: "https://www.youtube.com/watch?v=nMFCMNKnLgQ",
      },
      {
        name: "Dumbbell hammer curl",
        weight: "5 kg",
        reps: "10",
        sets: 3,
        notes: "Neutral grip throughout",
        videoUrl: "https://www.youtube.com/watch?v=zC3nLlEvin4",
      },
      {
        name: "Dumbbell preacher curl",
        weight: "5 kg",
        reps: "10",
        sets: 3,
        notes: "Strict form - no swinging",
        videoUrl: "https://www.youtube.com/watch?v=BPmUhDtdQfw",
      },
    ],
  },
  thursday: {
    title: "Thursday - Shoulder + Core",
    icon: "🔥",
    day: "Day 4",
    exercises: [
      {
        name: "Shoulder press",
        weight: "5 or 7.5 kg",
        reps: "12",
        sets: 3,
        notes: "Seated or standing",
        videoUrl: "https://www.youtube.com/watch?v=qEwKCR5JCog",
      },
      {
        name: "Lateral raises",
        weight: "5 kg",
        reps: "10",
        sets: 3,
        notes: "Raise to shoulder height",
        videoUrl: "https://www.youtube.com/watch?v=nnH63icHYXY",
      },
      {
        name: "Vertical shoulder press",
        weight: "Machine",
        reps: "10-12",
        sets: 3,
        notes: "According to machine weight",
        videoUrl: "https://www.youtube.com/watch?v=BAZkFGeUy5U",
      },
      {
        name: "Front raises",
        weight: "5 kg",
        reps: "10",
        sets: 3,
        notes: "Raise to eye level",
        videoUrl: "https://www.youtube.com/watch?v=vOqq8BfT3gQ",
      },
      {
        name: "Crunches",
        weight: "Bodyweight",
        reps: "10",
        sets: 3,
        notes: "Focus on upper abs",
        videoUrl: "https://www.youtube.com/watch?v=Xyd_fa5zoEU",
      },
      {
        name: "Plank until failure",
        weight: "Bodyweight",
        reps: "Max",
        sets: 3,
        notes: "Maintain straight body line",
        videoUrl: "https://www.youtube.com/watch?v=z_xEzYVCqWk",
      },
    ],
  },
  friday: {
    title: "Friday - Cardio Day",
    icon: "🏃",
    day: "Day 5",
    exercises: [
      {
        name: "Running intervals",
        weight: "—",
        reps: "20 min",
        sets: 1,
        notes: "Run 2 min, walk 1 min",
        videoUrl: "https://www.youtube.com/watch?v=bYNcFxEOOEc",
      },
      {
        name: "High knees",
        weight: "Bodyweight",
        reps: "30 each leg",
        sets: 3,
        notes: "Explosive movement",
        videoUrl: "https://www.youtube.com/watch?v=dKkACF_lgaQ",
      },
      {
        name: "Burpees",
        weight: "Bodyweight",
        reps: "10",
        sets: 3,
        notes: "Full body movement",
        videoUrl: "https://www.youtube.com/watch?v=u1floBsVMNs",
      },
      {
        name: "Jumping jacks",
        weight: "Bodyweight",
        reps: "30-35",
        sets: 4,
        notes: "Keep pace steady",
        videoUrl: "https://www.youtube.com/watch?v=V4hetzlRkvE",
      },
      {
        name: "Lateral step ups",
        weight: "Bodyweight",
        reps: "10 each leg",
        sets: 3,
        notes: "Step to the side, focus glutes",
        videoUrl: "https://www.youtube.com/watch?v=K-74LaOH5Cg",
      },
      {
        name: "Cycle or air bike",
        weight: "—",
        reps: "15 min",
        sets: 1,
        notes: "Moderate to high intensity",
        videoUrl: "https://www.youtube.com/watch?v=HY6ut9OaAHI",
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
              <span className="text-sm text-muted-foreground">3-Month Beginner Program</span>
            </div>

            <h1 className="mb-6 text-5xl font-bold tracking-tight text-balance md:text-7xl">
              <span className="gradient-text">Beginner Workout</span>
              <br />
              5-Day Split
            </h1>

            <p className="mb-8 text-lg text-muted-foreground text-balance md:text-xl">
              Structured 3-month program with video demonstrations. Build strength progressively with chest, legs, back,
              shoulders, and cardio days.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2 glow-effect">
                <Calendar className="h-5 w-5" />
                View Weekly Plan
              </Button>
              <Button size="lg" variant="outline" className="glass-card bg-transparent">
                Track Progress
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
                <h2 className="mb-2 text-3xl font-bold">Weekly Progress</h2>
                <p className="text-muted-foreground">
                  {completedExercises.size} of {totalExercises} exercises completed this week
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
          <p>3-Month Beginner Program • Stay consistent • Track your progress • Build strength</p>
        </div>
      </footer>
    </div>
  )
}
