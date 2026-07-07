"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { testimonials } from "@/data/testimonials"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const t = testimonials[current]

  return (
    <Section id="testimonials">
      <SectionHeader
        subtitle="Testimonials"
        title="What People Say About Us"
      />

      <div className="relative max-w-3xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2563EB]/5 via-white to-[#14B8A6]/5 border border-[#E5E7EB] p-8 md:p-12">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -100 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-[#2563EB]/20 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-[#111827] leading-relaxed mb-8 italic">
                &ldquo;{t.content}&rdquo;
              </p>

              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-[#E5E7EB]"
                    }`}
                  />
                ))}
              </div>

              <div>
                <div className="font-bold text-[#0F172A]">{t.name}</div>
                <div className="text-sm text-[#6B7280]">
                  {t.role}, {t.company}
                </div>
                <span className={`inline-block mt-2 text-xs font-semibold px-3 py-1 rounded-full ${
                  t.type === "candidate" ? "bg-[#DBEAFE] text-[#2563EB]" : "bg-[#CCFBF1] text-[#14B8A6]"
                }`}>
                  {t.type === "candidate" ? "Job Seeker" : "Employer"}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F8FAFC] hover:border-[#2563EB] transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-[#6B7280]" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1)
                    setCurrent(i)
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-[#2563EB] w-6" : "bg-[#D1D5DB] hover:bg-[#9CA3AF]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:bg-[#F8FAFC] hover:border-[#2563EB] transition-all"
            >
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>
      </div>
    </Section>
  )
}
