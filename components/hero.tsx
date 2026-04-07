'use client'

import { ChevronDown } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const heroImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/494186595_23929244436681399_3007383273772444971_n-mD7ymaG0LrJ1o2q3O4UBquOFmw7G2V.jpg",
    alt: "Sheffield United team celebration with champagne"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-akV4LAeTv8lCqNzBofHtmPhEgr2Vjl.png",
    alt: "Sheffield United trio celebrating"
  }
]

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  // Auto-advance carousel every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 8000)
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

      {/* Carousel container */}
      <div className="absolute inset-0 bg-[#181434] overflow-hidden">
        {/* Slides */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div 
              className="absolute inset-[-20px] animate-ken-burns w-full h-full"
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/40 via-transparent to-[#181434]/50 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181434]/20 via-transparent to-[#181434]/20 pointer-events-none" />
        
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
