export function ContactHero() {
  return (
    <section className="relative h-[75vh] min-h-[550px] w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#181434]">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nhHLsKZytTuZijrGv4rEGN9LsSo13w.png"
          alt="Contact United World"
          className="h-full w-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/60 via-transparent to-[#181434]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="backdrop-blur-sm bg-[#181434]/40 border border-white/10 rounded-sm px-6 py-4">
          <h1 className="font-serif text-3xl font-light italic text-white md:text-4xl lg:text-5xl">
            Contact
          </h1>
        </div>
      </div>
    </section>
  )
}
