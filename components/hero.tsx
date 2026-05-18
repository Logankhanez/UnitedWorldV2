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
          className="absolute inset-0 h-full w-full object-cover md:object-center"
          style={{ pointerEvents: 'none', objectPosition: 'center 40%' }}
          // @ts-ignore
          webkit-playsinline="true"
        >
          <source
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Sans%20titre-5-WP8HSNBqfoBjUP4Bxm3qWdb76MmvM1.mp4"
            type="video/mp4"
          />
        </video>
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
