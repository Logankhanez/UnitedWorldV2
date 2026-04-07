"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"

// Portfolio items
const portfolioItems = [
  { name: "USPBL", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Te0ieidN8hIYAEBmpeXGoV79RlcuD3.png", description: "United Shore Professional Baseball League", website: "https://uspbl.com/" },
  { name: "DoubleTree by Hilton", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6DFS7licGcEMbuM2oHhCbU5wQuDYY2.png", description: "Hilton DoubleTree Sheffield City", website: "https://www.hilton.com/en/hotels/dsasddi-doubletree-sheffield-city/" },
  { name: "Hiva", logo: null, description: "Sports Marketing Agency in Saudi Arabia", website: null },
  { name: "Sheffield United", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z5AQFSVvE35gBDJ4Cuer4qZb05YzaE.png", description: "English Football Club", website: "https://www.sufc.co.uk/" },
  { name: "Beerschot", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ED0PSUBUnjlaeEO3CABU0Hlh9ukKgl.png", description: "Belgian Football Club", website: "https://www.beerschot.be/nl/index.php" },
  { name: "Châteauroux", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Qdc3jUa4WTnOTsHKlglG0347CSma8.png", description: "French Football Club", website: "https://www.berrichonne.net/accueil.html" },
  { name: "Kerala United", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9m91A90s8H9ELyS1IxezhrTI3qzyXg.png", description: "Indian Football Club", website: null },
  { name: "Al Hilal United", logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fbSkAQWPJCFGUR4Y0t1Nd7hYXTLYiP.png", description: "UAE Football Club", website: null },
]

export function Portfolio() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    // Clone items for infinite scroll effect
    const scrollContent = scrollContainer.firstElementChild as HTMLElement
    if (!scrollContent) return

    // Animation for continuous scroll
    let animationId: number
    let scrollPosition = 0
    const speed = 0.5

    const animate = () => {
      scrollPosition += speed
      if (scrollPosition >= scrollContent.scrollWidth / 2) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section id="portfolio" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-serif text-4xl font-normal text-[#181434] md:text-5xl">
          Portfolio
        </h2>
        <div className="mt-4 h-1 w-16 bg-[#181434]" />
      </div>

      {/* Scrolling Portfolio */}
      <div
        ref={scrollRef}
        className="mt-16 overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        <div className="flex gap-6 px-6">
          {/* Double the items for seamless loop */}
          {[...portfolioItems, ...portfolioItems].map((item, index) => {
            const CardWrapper = item.website ? 'a' : 'div'
            const cardProps = item.website 
              ? { href: item.website, target: "_blank", rel: "noopener noreferrer" }
              : {}
            
            return (
              <CardWrapper
                key={`${item.name}-${index}`}
                {...cardProps}
                className="group flex h-40 w-56 md:h-48 md:w-72 flex-shrink-0 flex-col items-center justify-center border-2 border-gray-200 bg-white p-4 md:p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-[#181434] hover:bg-[#181434]"
              >
                {item.logo ? (
                  <img
                    src={item.logo || "/placeholder.svg"}
                    alt={item.name}
                    className={`max-h-20 max-w-full object-contain transition-all duration-300 group-hover:scale-110 ${item.name === "DoubleTree by Hilton" ? "group-hover:brightness-0 group-hover:invert" : ""}`}
                  />
                ) : (
                  <span className="text-2xl font-serif font-medium text-[#181434] transition-colors duration-300 group-hover:text-white">{item.name}</span>
                )}
                <div className="mt-4 text-center">
                  <div className="text-sm font-medium text-[#181434] transition-colors duration-300 group-hover:text-[#B8860B]">{item.name}</div>
                  <div className="mt-1 text-xs text-gray-500 transition-colors duration-300 group-hover:text-white/70">{item.description}</div>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>

      {/* View All Button */}
      <div className="mt-16 flex justify-center">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center border border-[#181434] px-8 py-4 text-sm font-medium tracking-widest text-[#181434] transition-colors hover:bg-[#181434] hover:text-white cursor-pointer"
        >
          VIEW ALL
        </Link>
      </div>
    </section>
  )
}
