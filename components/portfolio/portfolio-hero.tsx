export function PortfolioHero() {
  return (
    <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#181434]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Tbl5180ObTdKEH56hUiFjZ4NN3ddHe.png"
          alt="Football stadium"
          className="h-full w-full object-cover opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/20 via-transparent to-[#181434]/30" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <div className="bg-[#181434]/30 border border-white/10 rounded-sm px-6 py-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-white">
            Portfolio
          </h1>
        </div>
      </div>
    </section>
  )
}
