import Image from "next/image"
import Link from "next/link"

const newsArticles = [
  {
    id: 1,
    date: "September 24, 2025",
    category: "Business Update",
    location: "Antwerp",
    readTime: "4 min read",
    title: "United World Announces Sale of K. Beerschot VA",
    excerpt: "United World is proud to announce the successful sale of K. Beerschot VA, marking the beginning of an exciting new chapter in the club's story. When United World took charge in 2018, Beerschot had just climbed back from the amateur divisions.",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-46LODIDXLtXJKE4mtJg4flA6UINb46.png",
    slug: "united-world-announces-sale-of-beerschot"
  },
]

export function NewsList() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="space-y-0">
          {newsArticles.map((article) => (
            <article 
              key={article.id} 
              className="border-t border-gray-200 py-12 first:border-t-0"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_300px] lg:gap-12">
                {/* Content */}
                <div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {article.date}
                  </p>
                  <h2 className="font-serif text-2xl md:text-3xl text-[#181434] mb-4 hover:text-[#181434]/70 transition-colors">
                    <Link href={`/news/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                {/* Logo */}
                <div className="flex items-center justify-center lg:justify-end">
                  <div className="w-full max-w-[300px] h-[180px] border border-gray-100 flex items-center justify-center bg-white overflow-hidden">
                    {article.logo ? (
                      <img
                        src={article.logo}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <span className="text-muted-foreground text-sm">Company Logo</span>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
