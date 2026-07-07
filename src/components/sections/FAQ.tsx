"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { faqItems } from "@/data/faq"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <Section id="faq" background="muted">
      <SectionHeader
        subtitle="FAQ"
        title="Frequently Asked Questions"
      />

      <div className="max-w-3xl mx-auto space-y-3">
        {faqItems.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
            className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between px-6 py-5 text-left"
            >
              <span className="font-semibold text-[#111827] pr-4">{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#6B7280] flex-shrink-0 transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
              />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-5 text-[#6B7280] leading-relaxed border-t border-[#E5E7EB] pt-4">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
