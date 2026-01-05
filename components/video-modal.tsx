"use client"

import { useEffect, useRef } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  exerciseName: string
}

export function VideoModal({ isOpen, onClose, videoUrl, exerciseName }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "unset"
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Extract video ID from YouTube URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoId = url.split("v=")[1]?.split("&")[0] || url.split("/").pop()
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-4xl glass-card rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border/30 bg-gradient-to-r from-primary/20 to-secondary/20 p-4">
          <h3 className="text-lg font-semibold">{exerciseName}</h3>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-destructive/20 hover:text-destructive"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={getYouTubeEmbedUrl(videoUrl)}
            title={exerciseName}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Footer */}
        <div className="border-t border-border/30 bg-muted/30 p-4 text-center text-sm text-muted-foreground">
          Follow along with the video to learn proper form and technique
        </div>
      </div>
    </div>
  )
}
