import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-[#181434] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-4 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="inline-block">
              <Image
                src="/images/united-world-logo.png"
                alt="United World"
                width={160}
                height={36}
                className="h-auto w-[140px] lg:w-[160px]"
              />
            </Link>
          </div>

          {/* Address */}
          <div className="flex items-start gap-2">
            <MapPin className="h-3 w-3 flex-shrink-0 mt-0.5 text-white/70" />
            <div className="text-white/80 text-[10px] leading-relaxed">
              <p>Chemin du Pavillon 5</p>
              <p>1218 Grand Saconnex</p>
              <p>Geneva, Switzerland</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3 text-white/70" />
              <a href="tel:+41225474949" className="text-white/80 text-[10px] hover:text-white transition-colors">
                +41 22 547 49 49
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3 text-white/70" />
              <a href="mailto:info@unitedworld.ch" className="text-white/80 text-[10px] hover:text-white transition-colors">
                ir@unitedworld.ch
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-2 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-2 lg:flex-row">
            {/* Copyright */}
            <div className="text-[10px] text-white/60">
              © {new Date().getFullYear()} United World. All rights reserved.
            </div>

            {/* Legal Links + By Itech */}
            <div className="flex flex-col items-center gap-1 text-[10px]">
              <div className="flex items-center gap-2">
                <Link href="/terms-of-use" className="text-white/60 hover:text-white transition-colors">
                  Terms of Use
                </Link>
                <span className="text-white/30">|</span>
                <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </div>
              <a
                href="https://itech-solution.ch"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A84C] hover:text-[#e0c070] transition-colors text-[9px]"
              >
                By Itech Solution Concept SA
              </a>
            </div>

            {/* Footer Navigation */}
            <div className="hidden md:flex items-center gap-2 text-[10px]">
              {footerLinks.map((link, index) => (
                <span key={link.label} className="flex items-center gap-2">
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                  {index < footerLinks.length - 1 && (
                    <span className="text-white/30">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
