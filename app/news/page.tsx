import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { NewsHero } from "@/components/news/news-hero"
import { NewsList } from "@/components/news/news-list"

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <NewsHero />
      <NewsList />
      <Footer />
    </main>
  )
}
