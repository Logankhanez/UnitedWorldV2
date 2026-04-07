import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Construction } from "lucide-react"
import Link from "next/link"

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative h-[40vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-[#181434]">
          <div className="absolute inset-0 bg-gradient-to-b from-[#181434]/80 to-[#181434]" />
        </div>
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <div className="backdrop-blur-sm bg-[#181434]/40 border border-white/10 rounded-sm px-6 py-4">
            <h1 className="font-serif text-3xl font-light italic text-white md:text-4xl lg:text-5xl">
              Team
            </h1>
          </div>
        </div>
      </section>

      {/* Under Construction */}
      <section className="py-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-8">
            <div className="p-6 rounded-full bg-[#181434]/5">
              <Construction className="h-16 w-16 text-[#181434]" />
            </div>
          </div>
          <h2 className="font-serif text-3xl font-light text-[#181434] md:text-4xl mb-6">
            Page Under Construction
          </h2>
          <p className="text-gray-600 leading-relaxed mb-10">
            We are currently working on this page. Please check back soon to meet our team.
          </p>
          <Link
            href="/"
            className="inline-flex items-center justify-center border border-[#181434] px-8 py-4 text-sm font-medium tracking-widest text-[#181434] transition-colors hover:bg-[#181434] hover:text-white cursor-pointer"
          >
            BACK TO HOME
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
