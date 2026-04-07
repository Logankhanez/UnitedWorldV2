import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about/about-hero"
import { AboutIntro } from "@/components/about/about-intro"
import { WhatWeLookFor } from "@/components/about/what-we-look-for"
import { PartnershipApproach } from "@/components/about/partnership-approach"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <AboutHero />
      <AboutIntro />
      <WhatWeLookFor />
      <PartnershipApproach />
      <Footer />
    </main>
  )
}
