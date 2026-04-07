const criteria = [
  {
    title: "Football Clubs with Growth Potential"
  },
  {
    title: "Strong Youth Academy Infrastructure"
  },
  {
    title: "Aligned Leadership and Vision"
  },
  {
    title: "Strategic Geographic Markets"
  },
  {
    title: "Sustainable Business Models"
  },
  {
    title: "Community-Focused Organizations"
  },
  {
    title: "Multi-Club Synergy Opportunities"
  },
  {
    title: "Long-Term Value Creation"
  }
]

export function WhatWeLookFor() {
  return (
    <section className="py-20 lg:py-28 bg-[#f8f8f8]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#181434]">
          What We Look For
        </h2>
        
        {/* Decorative line */}
        <div className="mt-6 mb-12 w-16 h-0.5 bg-[#181434]" />

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {criteria.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 p-8 flex items-center justify-center min-h-[180px]"
            >
              <p className="font-serif text-lg md:text-xl text-[#181434] text-center leading-snug">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
