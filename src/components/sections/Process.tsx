"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import {
  Search, FileSearch, Users, Handshake, HeartHandshake, ArrowDown,
} from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Requirement Analysis",
    description: "We deeply understand your needs, culture, and role requirements.",
  },
  {
    icon: FileSearch,
    title: "Sourcing & Screening",
    description: "We leverage our network to find and screen top candidates.",
  },
  {
    icon: Users,
    title: "Assessment & Interviews",
    description: "Rigorous evaluation including skills tests and interviews.",
  },
  {
    icon: Handshake,
    title: "Offer & Onboarding",
    description: "We manage offers, negotiations, and smooth onboarding.",
  },
  {
    icon: HeartHandshake,
    title: "Post-Placement Support",
    description: "Ongoing support to ensure long-term satisfaction.",
  },
]

export function Process() {
  return (
    <Section id="process" background="muted">
      <SectionHeader
        subtitle="Recruitment Process"
        title="How We Work"
      />

      <div className="relative max-w-4xl mx-auto">
        {/* Connecting line */}
        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#2563EB] via-[#14B8A6] to-[#2563EB] hidden md:block" />

        <div className="space-y-8 md:space-y-12">
          {steps.map((step, i) => {
            const Icon = step.icon
            const isLeft = i % 2 === 0
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Number */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-[#2563EB] to-[#14B8A6] flex items-center justify-center text-white font-bold text-lg shadow-lg md:absolute md:left-1/2 md:-translate-x-1/2">
                  {i + 1}
                </div>

                {/* Content */}
                <div className={`flex-1 md:w-1/2 ${isLeft ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm hover:shadow-lg transition-all">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-[#2563EB]" />
                      </div>
                      <h3 className="text-lg font-bold text-[#0F172A]">{step.title}</h3>
                    </div>
                    <p className="text-[#6B7280] text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </Section>
  )
}
