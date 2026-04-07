export function PortfolioHero() {
  return (
    <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[#181434]">
        <img
          src="/images/design-mode/image.png"
          alt="Football stadium"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-[#181434]/40" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <div className="backdrop-blur-sm bg-[#181434]/40 border border-white/10 rounded-sm px-6 py-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl italic text-white">
            Portfolio
          </h1>
        </div>
      </div>
    </section>
  )
}
