"use client"

import { ChevronDown } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

// Floating particle component for confetti/splash effect
function FloatingParticle({ delay, duration, startX, startY, size, color }: {
  delay: number
  duration: number
  startX: number
  startY: number
  size: number
  color: string
}) {
  return (
    <div
      className="absolute rounded-full opacity-0 animate-float-particle"
      style={{
        left: `${startX}%`,
        top: `${startY}%`,
        width: size,
        height: size,
        backgroundColor: color,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
      }}
    />
  )
}

// Generate particles with various properties
function generateParticles(count: number) {
  const colors = [
    'rgba(255, 255, 255, 0.8)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(200, 220, 255, 0.7)',
    'rgba(255, 220, 200, 0.6)',
  ]
  
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 4,
    startX: 20 + Math.random() * 60,
    startY: 30 + Math.random() * 40,
    size: 2 + Math.random() * 4,
    color: colors[Math.floor(Math.random() * colors.length)],
  }))
}

export function Hero() {
  const [particles] = useState(() => generateParticles(30))
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef<HTMLElement>(null)

  // Subtle parallax effect on mouse move
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height
      setMousePosition({ x: x * 10, y: y * 10 })
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

  return (
    <section ref={heroRef} className="relative h-screen w-full overflow-hidden">
      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes ken-burns {
          0% {
            transform: scale(1) translate(0%, 0%);
          }
          50% {
            transform: scale(1.08) translate(-1%, -0.5%);
          }
          100% {
            transform: scale(1) translate(0%, 0%);
          }
        }
        
        @keyframes float-particle {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0) scale(0);
          }
          10% {
            opacity: 0.8;
            transform: translateY(-10px) translateX(5px) scale(1);
          }
          50% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.3;
            transform: translateY(-80px) translateX(-20px) scale(0.8);
          }
          100% {
            opacity: 0;
            transform: translateY(-100px) translateX(-30px) scale(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-2%, -2%); }
          20% { transform: translate(2%, 2%); }
          30% { transform: translate(-1%, 1%); }
          40% { transform: translate(1%, -1%); }
          50% { transform: translate(-2%, 2%); }
          60% { transform: translate(2%, -2%); }
          70% { transform: translate(-1%, -1%); }
          80% { transform: translate(1%, 1%); }
          90% { transform: translate(-2%, -2%); }
        }
        
        .animate-ken-burns {
          animation: ken-burns 20s ease-in-out infinite;
        }
        
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
        
        .animate-grain {
          animation: grain 0.5s steps(10) infinite;
        }
      `}</style>

      {/* Background with Ken Burns effect */}
      <div className="absolute inset-0 bg-[#181434] overflow-hidden">
        <div 
          className="absolute inset-[-20px] animate-ken-burns"
          style={{
            transform: `scale(1.02) translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        >
          <Image
            src="/images/hero-celebration.jpg"
            alt="Football celebration"
            fill
            priority
            quality={75}
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        
        {/* Floating particles for live photo effect */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map((particle) => (
            <FloatingParticle key={particle.id} {...particle} />
          ))}
        </div>
        
        {/* Subtle shimmer overlay for dynamic light effect */}
        <div 
          className="absolute inset-0 opacity-10 animate-shimmer pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            backgroundSize: '200% 100%',
          }}
        />
        
        {/* Film grain overlay for cinematic effect */}
        <div 
          className="absolute inset-[-10%] opacity-[0.03] pointer-events-none animate-grain"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
          }}
        />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/40 via-transparent to-[#181434]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#181434]/20 via-transparent to-[#181434]/20" />
        
        {/* Vignette effect */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(24, 20, 52, 0.4) 100%)',
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
