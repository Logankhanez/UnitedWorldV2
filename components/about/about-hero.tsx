export function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 bg-[#2D1B4E]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3D2066]/80 via-[#2D1B4E] to-[#1A0F2E]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="backdrop-blur-sm bg-[#2D1B4E]/40 border border-white/10 rounded-sm px-6 py-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic">
            About Us
          </h1>
        </div>
      </div>
    </section>
  )
}
