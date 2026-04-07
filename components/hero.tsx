'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

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
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* CSS for Ken Burns animation */}
      <style jsx>{`
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
        <div 
          className="absolute inset-[-20px] animate-ken-burns"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        >
          <Image
            src="/images/hero-celebration.jpg"
            alt="Sheffield United team celebration with champagne"
            fill
            priority
            quality={75}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        
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
