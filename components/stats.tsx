"use client"

import { useEffect, useState, useRef } from "react"

const stats = [
  { value: "$500M", suffix: "", label: "AUM" },
  { value: "15", suffix: "", label: "PORTFOLIO COMPANIES" },
  { value: "10", suffix: "+", label: "YEARS OF EXPERIENCE" },
]

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startCounting) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, startCounting])

  return count
}

export function Stats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-muted py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center ${
                index < stats.length - 1 ? "md:border-r md:border-[#181434]/20" : ""
              }`}
            >
              <div className="font-serif text-5xl font-light italic text-[#181434] md:text-6xl lg:text-7xl">
                {stat.value.includes("$") ? (
                  <>
                    $<CountUpNumber value={500} isVisible={isVisible} />M
                  </>
                ) : (
                  <>
                    <CountUpNumber
                      value={parseInt(stat.value)}
                      isVisible={isVisible}
                    />
                    {stat.suffix}
                  </>
                )}
              </div>
              <div className="mt-4 text-sm tracking-widest text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUpNumber({ value, isVisible }: { value: number; isVisible: boolean }) {
  const count = useCountUp(value, 2000, isVisible)
  return <span>{count}</span>
}
