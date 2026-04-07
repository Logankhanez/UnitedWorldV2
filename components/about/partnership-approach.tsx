"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const approaches = [
  {
    title: "Player Development",
    content: "Investing in world-class training facilities, coaching staff, and youth academies to nurture the next generation of football talent."
  },
  {
    title: "Financial Sustainability",
    content: "Implementing sound financial practices and revenue diversification strategies to ensure long-term club stability and growth."
  },
  {
    title: "Operations and Strategy",
    content: "Optimizing club operations through data-driven decision making, modern technology, and strategic planning."
  },
  {
    title: "Global Network",
    content: "Leveraging our multi-club ecosystem to create opportunities for player development, knowledge sharing, and commercial partnerships."
  },
  {
    title: "Community Engagement",
    content: "Building strong relationships with local communities through outreach programs, fan engagement, and social initiatives."
  }
]

export function PartnershipApproach() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#181434] leading-tight">
              Partnership Approach
            </h2>
            
            {/* Decorative line */}
            <div className="mt-6 mb-8 w-16 h-0.5 bg-[#181434]" />

            <p className="font-semibold text-[#181434] mb-4">
              A Proven Playbook, Tailored to Every Club
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We apply a proprietary value creation methodology, developed over years of experience 
              in global football. Our approach is focused on building lasting value and begins with 
              establishing a multi-year vision for growth, followed by the development of a detailed 
              plan of execution for club management and stakeholders.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-0">
            {approaches.map((item, index) => (
              <div 
                key={index} 
                className="border-b border-gray-200"
                onMouseEnter={() => setOpenIndex(index)}
                onMouseLeave={() => setOpenIndex(null)}
              >
                <div
                  className="w-full flex items-center justify-between py-5 text-left cursor-pointer hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="font-medium text-[#181434]">{item.title}</span>
                  <ChevronDown 
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`} 
                  />
                </div>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed pr-8">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
