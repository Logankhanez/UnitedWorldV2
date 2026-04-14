'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useRef } from 'react'

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.muted = true
    video.defaultMuted = true
    video.setAttribute('muted', '')
    video.setAttribute('playsinline', '')
    video.setAttribute('webkit-playsinline', '')

    const attemptPlay = () => {
      video.play().catch(() => {})
    }

    video.load()
    video.addEventListener('canplay', attemptPlay, { once: true })
    attemptPlay()

    return () => {
      video.removeEventListener('canplay', attemptPlay)
    }
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 bg-[#181434]">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          disablePictureInPicture
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ pointerEvents: 'none' }}
          // @ts-ignore
          webkit-playsinline="true"
        >
          <source
            src="https://res.cloudinary.com/dfegvdqlh/video/upload/v1776152644/United_World_-_2_-_HD_1080p_xhgxoc.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/40 via-transparent to-[#181434]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181434]/20 via-transparent to-[#181434]/20 pointer-events-none" />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(24, 20, 52, 0.3) 100%)',
          }}
        />
      </div>

      {/* Scroll Down Arrow */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-10 w-10 text-white drop-shadow-lg" strokeWidth={1} />
      </button>
    </section>
  )
}
