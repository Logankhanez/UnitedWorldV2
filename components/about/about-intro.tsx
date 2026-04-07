import Image from "next/image"

export function AboutIntro() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#181434] leading-tight">
              Growing Together<br />
              with a Purpose
            </h2>
            
            {/* Decorative line */}
            <div className="mt-6 mb-8 w-16 h-0.5 bg-[#181434]" />
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                United World is more than an investment firm - we are strategic partners who provide 
                deep operational expertise and financial support to clubs and sports organizations worldwide. 
                We work closely with management throughout the life of an investment.
              </p>
              <p>
                We believe meaningful growth comes from true partnership - working alongside 
                exceptional management teams with a shared focus on developing talent, building 
                sustainable success, and creating lasting value for communities and stakeholders alike.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="/images/design-mode/image.png"
              alt="Business executives overlooking stadium"
              className="w-full h-auto rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
