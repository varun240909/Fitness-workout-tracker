"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, Info, Play } from "lucide-react"
import { ExerciseAnimation } from "@/components/exercise-animation"
import { VideoModal } from "@/components/video-modal"

interface Exercise {
  name: string
  weight: string
  reps: string
  sets: number
  notes: string
  videoUrl: string
}

interface Section {
  title: string
  icon: string
  exercises: Exercise[]
}

interface WorkoutSectionProps {
  section: Section
  sectionKey: string
  completedExercises: Set<string>
  onToggleExercise: (exerciseId: string) => void
}

export function WorkoutSection({ section, sectionKey, completedExercises, onToggleExercise }: WorkoutSectionProps) {
  const [expandedExercises, setExpandedExercises] = useState<Set<string>>(new Set())
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; videoUrl: string; exerciseName: string }>({
    isOpen: false,
    videoUrl: "",
    exerciseName: "",
  })

  const toggleExpand = (exerciseId: string) => {
    setExpandedExercises((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(exerciseId)) {
        newSet.delete(exerciseId)
      } else {
        newSet.add(exerciseId)
      }
      return newSet
    })
  }

  const openVideoModal = (videoUrl: string, exerciseName: string) => {
    setVideoModal({ isOpen: true, videoUrl, exerciseName })
  }

  return (
    <>
      <Card className="glass-card overflow-hidden border-border/50">
        <div className="border-b border-border/30 bg-gradient-to-r from-primary/10 to-secondary/10 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20 text-2xl">
              {section.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{section.title}</h3>
              <p className="text-sm text-muted-foreground">
                {section.exercises.length} exercise{section.exercises.length !== 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>

        <div className="divide-y divide-border/30">
          {section.exercises.map((exercise, index) => {
            const exerciseId = `${sectionKey}-${index}`
            const isCompleted = completedExercises.has(exerciseId)
            const isExpanded = expandedExercises.has(exerciseId)

            return (
              <div key={exerciseId} className={`transition-all ${isCompleted ? "bg-primary/5" : ""}`}>
                <div className="flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex flex-1 items-start gap-4">
                    <button
                      onClick={() => onToggleExercise(exerciseId)}
                      className={`mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-all ${
                        isCompleted
                          ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                          : "border-muted-foreground/30 hover:border-primary"
                      }`}
                    >
                      {isCompleted && <Check className="h-4 w-4" />}
                    </button>

                    <div className="flex-1">
                      <h4
                        className={`mb-1 text-lg font-semibold ${
                          isCompleted ? "text-muted-foreground line-through" : ""
                        }`}
                      >
                        {exercise.name}
                      </h4>
                      <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                        <span className="rounded-full bg-muted px-3 py-1">{exercise.weight}</span>
                        <span className="rounded-full bg-muted px-3 py-1">
                          {exercise.reps} reps × {exercise.sets} sets
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 self-start md:self-center">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() => openVideoModal(exercise.videoUrl, exercise.name)}
                      className="gap-2 glow-effect"
                    >
                      <Play className="h-4 w-4" />
                      How to do it?
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => toggleExpand(exerciseId)} className="gap-2">
                      <Info className="h-4 w-4" />
                      Details
                      <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </Button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="border-t border-border/30 bg-muted/30 p-6">
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h5 className="mb-2 font-semibold text-accent">Exercise Notes</h5>
                        <p className="text-sm text-muted-foreground">{exercise.notes}</p>
                      </div>
                      <div>
                        <h5 className="mb-3 font-semibold text-accent">Visual Guide</h5>
                        <ExerciseAnimation exerciseName={exercise.name} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Card>

      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal({ isOpen: false, videoUrl: "", exerciseName: "" })}
        videoUrl={videoModal.videoUrl}
        exerciseName={videoModal.exerciseName}
      />
    </>
  )
}
