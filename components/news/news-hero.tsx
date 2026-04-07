export function NewsHero() {
  return (
    <section className="relative h-[75vh] min-h-[550px] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?w=1920&q=80"
          alt="Stadium"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#181434]/50" />
      </div>

      {/* Title */}
      <div className="relative z-10 text-center">
        <div className="backdrop-blur-sm bg-[#181434]/40 border border-white/10 rounded-sm px-6 py-4">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic">
            News
          </h1>
        </div>
      </div>
    </section>
  )
}
