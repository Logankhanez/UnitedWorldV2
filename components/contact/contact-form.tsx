"use client"

import React from "react"

import { useState } from "react"
import { MapPin, Phone, Mail } from "lucide-react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left - Contact Info */}
          <div>
            <h2 className="font-serif text-3xl font-light text-[#181434] md:text-4xl">
              Get in Touch
            </h2>
            <div className="mt-3 h-1 w-12 bg-[#181434]" />
            
            <p className="mt-8 text-gray-600 leading-relaxed">
              We would love to hear from you. Whether you have a question about our investments, 
              partnerships, or anything else, our team is ready to answer all your questions.
            </p>

            <div className="mt-12 space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#181434]">
                  <MapPin className="h-5 w-5 text-[#181434]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#181434]">Address</h3>
                  <p className="mt-1 text-gray-600">
                    Chemin du Pavillon 5<br />
                    1218 Grand Saconnex<br />
                    Geneva, Switzerland
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#181434]">
                  <Phone className="h-5 w-5 text-[#181434]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#181434]">Phone</h3>
                  <a 
                    href="tel:+41225474949" 
                    className="mt-1 block text-gray-600 hover:text-[#181434] transition-colors"
                  >
                    +41 22 547 49 49
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#181434]">
                  <Mail className="h-5 w-5 text-[#181434]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#181434]">Email</h3>
                  <a 
                    href="mailto:info@unitedworld.ch" 
                    className="mt-1 block text-gray-600 hover:text-[#181434] transition-colors"
                  >
                    ir@unitedworld.ch
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#181434] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-[#181434] placeholder-gray-400 focus:border-[#181434] focus:outline-none focus:ring-1 focus:ring-[#181434] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#181434] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-[#181434] placeholder-gray-400 focus:border-[#181434] focus:outline-none focus:ring-1 focus:ring-[#181434] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[#181434] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 px-4 py-3 text-[#181434] placeholder-gray-400 focus:border-[#181434] focus:outline-none focus:ring-1 focus:ring-[#181434] transition-colors"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#181434] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full border border-gray-300 px-4 py-3 text-[#181434] placeholder-gray-400 focus:border-[#181434] focus:outline-none focus:ring-1 focus:ring-[#181434] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full border border-[#181434] bg-[#181434] px-8 py-4 text-sm font-medium tracking-widest text-white transition-all duration-300 hover:bg-transparent hover:text-[#181434] cursor-pointer"
              >
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
