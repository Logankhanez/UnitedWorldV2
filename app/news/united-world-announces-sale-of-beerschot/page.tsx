import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function BeerschotArticlePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0 bg-[#181434]">
          <img
            src="https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80"
            alt="Stadium"
            className="h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/50 to-[#181434]/70" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="text-white/80 text-sm mb-4">Business Update | September 24, 2025</p>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white italic">
            United World Announces Sale of K. Beerschot VA
          </h1>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span>Antwerp</span>
            <span>•</span>
            <span>4 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed text-foreground">
              United World is proud to announce the successful sale of K. Beerschot VA, marking the beginning of an exciting new chapter in the club's story.
            </p>

            <p className="leading-relaxed text-muted-foreground mt-6">
              When United World took charge in 2018, Beerschot had just climbed back from the amateur divisions. From that moment, our focus was on bringing the club back to its historic level.
            </p>

            <p className="leading-relaxed text-muted-foreground mt-6">
              One of the most symbolic steps was restoring the legendary #13 license, reuniting Beerschot with its true identity. Over the following years, we invested heavily in rebuilding the squad for long term sustainable growth. As a result, the club spent three of the last five seasons competing in the Jupiler Pro League, proudly returning to where it has always belonged: among Belgium's top teams.
            </p>

            <h2 className="font-serif text-2xl text-[#181434] mt-12 mb-6">A Shared Success Story</h2>

            <p className="leading-relaxed text-muted-foreground">
              We want to thank Beerschot fans, whose passion has been the heart and soul of the club throughout this journey. The chants at the Olympisch Stadion, the sea of purple in Antwerp, and the unwavering support through every high and low have made Beerschot one of Europe's most unique football clubs.
            </p>

            <p className="leading-relaxed text-muted-foreground mt-6">
              Our gratitude also goes to the staff, minority shareholders, and local community who stood by us and shared in the work of building a stronger, more sustainable Beerschot. Their commitment has been key to the club's progress.
            </p>

            <h2 className="font-serif text-2xl text-[#181434] mt-12 mb-6">Looking Ahead</h2>

            <p className="leading-relaxed text-muted-foreground">
              The new ownership inherits a club with a proud tradition, a vibrant fanbase, a strong squad and a clear identity. We are confident that Beerschot will continue to grow and enjoy success both on and off the pitch in the years to come.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="font-serif text-xl text-[#181434] mb-4">About United World</h3>
              <p className="leading-relaxed text-muted-foreground">
                United World is a global sports and investment group dedicated to building sustainable and competitive football organisations that create lasting value for fans, communities, and stakeholders around the world.
              </p>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
