"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState, useCallback } from "react"
import Image from "next/image"

const heroImages = [
  {
    src: "/images/hero-celebration.jpg",
    alt: "Sheffield United team celebration"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-akV4LAeTv8lCqNzBofHtmPhEgr2Vjl.png",
    alt: "Sheffield United players celebrating goal"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 8000) // Change slide every 8 seconds

    return () => clearInterval(interval)
  }, [])

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x: x * 8, y: y * 8 })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* CSS for Ken Burns animation */}
      <style jsx global>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0%, 0%);
          }
          50% {
            transform: scale(1.06) translate(-0.5%, -0.3%);
          }
          100% {
            transform: scale(1) translate(0%, 0%);
          }
        }
        
        .animate-ken-burns {
          animation: ken-burns 25s ease-in-out infinite;
        }
      `}</style>

      {/* Background with Ken Burns effect and parallax */}
      <div className="absolute inset-0 bg-[#181434] overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-[-20px] transition-opacity duration-1500 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              transitionDuration: '1500ms',
            }}
          >
            <div 
              className="absolute inset-0 animate-ken-burns"
              style={{
                transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
                transition: 'transform 0.5s ease-out',
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                quality={75}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          </div>
        ))}
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/40 via-transparent to-[#181434]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181434]/20 via-transparent to-[#181434]/20" />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(24, 20, 52, 0.3) 100%)',
          }}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              index === currentSlide 
                ? 'w-8 bg-white' 
                : 'w-1.5 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
