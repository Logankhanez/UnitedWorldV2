"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useRef } from "react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.playsInline = true

    const tryPlay = () => {
      video.play().catch(() => {
        // retry on user interaction for strict browsers
        document.addEventListener("touchstart", () => video.play(), { once: true })
        document.addEventListener("click", () => video.play(), { once: true })
      })
    }

    if (video.readyState >= 2) {
      tryPlay()
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true })
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 bg-[#181434] overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Design%20sans%20titre%20%281%29-0gHtBExJR8KEHMN1uFa9zydvO4ZwW0.mp4" type="video/mp4" />
        </video>
        {/* Overlay gradient for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/30 via-[#181434]/10 to-[#181434]/40" />
      </div>



      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-10 w-10 text-white" strokeWidth={1} />
      </button>
    </section>
  )
}
