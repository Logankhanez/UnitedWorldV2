import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHero } from "@/components/portfolio/portfolio-hero"
import { PortfolioGrid } from "@/components/portfolio/portfolio-grid"

export const metadata = {
  title: "Portfolio | United World",
  description: "Discover our portfolio of sports clubs and companies across the globe.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <PortfolioHero />
      <PortfolioGrid />
      <Footer />
    </main>
  )
}
