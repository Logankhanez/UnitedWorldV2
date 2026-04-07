"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-bybq6TNKfHPHHlX6GcA2nTACYadeDx.png",
    alt: "Sheffield United"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-t911pUP6S1Qk5NnzlJAUck1oZd3twj.jpeg",
    alt: "Beerschot"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/collage-2022-07-11T20_52_08.387Z-alBT2jd8XWP5of6TrMG009CtTq77kE.jpg",
    alt: "Châteauroux"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C4m69Su3kDge0NjnNyb1xmSlp0cj5C.png",
    alt: "United Academy"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eeapgQRhlvjmXtzZ4uAWC3AkwziZ6a.png",
    alt: "Sheffield United Celebration"
  },
]

export function About() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-serif text-2xl font-normal text-[#181434] md:text-3xl">
              Who We Are
            </h2>
            <div className="mt-2 h-0.5 w-10 bg-[#181434]" />
            
            <div className="mt-5 space-y-3 text-muted-foreground leading-relaxed text-xs">
              <p>
                At United World, we lead the evolution of the global sports industry through 
                strategic investment, smart innovation, and a commitment to sustainable growth.
              </p>
              <p>
                We recognize that sports have the unique power to unite communities, inspire 
                generations, and drive meaningful change. That&apos;s why our goal is to support 
                visionary leaders and organizations as they continue to grow, helping them 
                become pioneers in their respective markets.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-6 inline-flex items-center justify-center border border-[#181434] px-5 py-2 text-[10px] font-medium tracking-widest text-[#181434] transition-colors hover:bg-[#181434] hover:text-white"
            >
              ABOUT US
            </Link>
          </div>

          {/* Carousel */}
          <div className="relative">
            <div className="relative w-full" style={{ paddingBottom: '100%' }}>
              {carouselImages.map((image, index) => (
                <img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-[#181434] w-6" : "bg-[#181434]/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
