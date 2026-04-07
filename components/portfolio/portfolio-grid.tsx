"use client"

import { useState } from "react"

// Filter categories
const filters = [
  { id: "all", label: "ALL" },
  { id: "current", label: "CURRENT" },
  { id: "realized", label: "REALIZED" },
]

// Companies data
const companies = [
  { 
    id: 1, 
    name: "USPBL", 
    category: "Current", 
    filter: "current", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Te0ieidN8hIYAEBmpeXGoV79RlcuD3.png",
    description: "United Shore Professional Baseball League",
    website: "https://uspbl.com/"
  },
  { 
    id: 2, 
    name: "DoubleTree by Hilton", 
    category: "Current", 
    filter: "current", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-6DFS7licGcEMbuM2oHhCbU5wQuDYY2.png",
    description: "Hilton DoubleTree Sheffield City",
    website: "https://www.hilton.com/en/hotels/dsasddi-doubletree-sheffield-city/"
  },
  { 
    id: 3, 
    name: "Hiva", 
    category: "Current", 
    filter: "current", 
    logo: null,
    description: "Sports Marketing Agency in Saudi Arabia",
    website: null
  },
  { 
    id: 4, 
    name: "Sheffield United", 
    category: "Realized", 
    filter: "realized", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-z5AQFSVvE35gBDJ4Cuer4qZb05YzaE.png",
    description: "English Football Club",
    website: "https://www.sufc.co.uk/"
  },
  { 
    id: 5, 
    name: "Beerschot", 
    category: "Realized", 
    filter: "realized", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ED0PSUBUnjlaeEO3CABU0Hlh9ukKgl.png",
    description: "Belgian Football Club",
    website: "https://www.beerschot.be/nl/index.php"
  },
  { 
    id: 6, 
    name: "Châteauroux", 
    category: "Realized", 
    filter: "realized", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8Qdc3jUa4WTnOTsHKlglG0347CSma8.png",
    description: "French Football Club",
    website: "https://www.berrichonne.net/accueil.html"
  },
  { 
    id: 7, 
    name: "Kerala United", 
    category: "Realized", 
    filter: "realized", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-9m91A90s8H9ELyS1IxezhrTI3qzyXg.png",
    description: "Indian Football Club",
    website: null
  },
  { 
    id: 8, 
    name: "Al Hilal United", 
    category: "Realized", 
    filter: "realized", 
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fbSkAQWPJCFGUR4Y0t1Nd7hYXTLYiP.png",
    description: "UAE Football Club",
    website: null
  },
]

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredCompanies = activeFilter === "all" 
    ? companies 
    : companies.filter(company => company.filter === activeFilter)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-0 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-8 py-3 text-sm font-medium tracking-widest transition-all duration-300 border border-[#181434] cursor-pointer ${
                activeFilter === filter.id
                  ? "bg-[#181434] text-white"
                  : "bg-transparent text-[#181434] hover:bg-[#181434]/5"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCompanies.map((company) => {
            const CardWrapper = company.website ? 'a' : 'div'
            const cardProps = company.website 
              ? { href: company.website, target: "_blank", rel: "noopener noreferrer" }
              : {}
            
            return (
              <CardWrapper
                key={company.id}
                {...cardProps}
                className="group cursor-pointer block transition-all duration-300 hover:-translate-y-2"
              >
                {/* Logo Container */}
                <div className="h-[200px] w-full border-2 border-gray-200 bg-white flex items-center justify-center p-8 transition-all duration-300 group-hover:shadow-2xl group-hover:border-[#181434] group-hover:bg-[#181434]">
                  {company.logo ? (
                    <img
                      src={company.logo || "/placeholder.svg"}
                      alt={company.name}
                      className={`max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-110 ${company.name === "DoubleTree by Hilton" ? "group-hover:brightness-0 group-hover:invert" : ""}`}
                    />
                  ) : (
                    <span className="text-[#181434] text-2xl font-serif font-medium transition-colors duration-300 group-hover:text-white">{company.name}</span>
                  )}
                </div>
                
                {/* Company Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-serif text-[#181434] group-hover:text-[#B8860B] transition-colors duration-300">
                    {company.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {company.description}
                  </p>
                </div>
              </CardWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
