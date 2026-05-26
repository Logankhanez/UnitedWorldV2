export function AboutHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-QZTbZinsCtDpqNlxKdnQhs8fGskKux.png"
          alt="About United World"
          className="h-full w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/20 via-transparent to-[#181434]/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <div className="bg-[#181434]/30 border border-white/10 rounded-sm px-6 py-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic">
            About Us
          </h1>
        </div>
      </div>
    </section>
  )
}
