"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import {
  Zap, Clock, BadgeCheck, HeadphonesIcon, TrendingUp, Globe,
} from "lucide-react"

const reasons = [
  {
    icon: BadgeCheck,
    title: "Proven Track Record",
    description: "5000+ successful placements across diverse industries and roles.",
  },
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Shortlisted profiles within 48-72 hours for most positions.",
  },
  {
    icon: Clock,
    title: "10+ Years Experience",
    description: "Deep industry knowledge and extensive network across India.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Personal account manager for every client and candidate.",
  },
  {
    icon: TrendingUp,
    title: "Cost Effective",
    description: "Competitive pricing with flexible engagement models.",
  },
  {
    icon: Globe,
    title: "Pan-India Reach",
    description: "Recruitment services across Maharashtra and all major Indian cities.",
  },
]

export function WhyChooseUs() {
  return (
    <Section id="why-us">
      <SectionHeader
        subtitle="Why Choose Us"
        title="What Makes Asia Placements Different"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((reason, i) => {
          const Icon = reason.icon
          return (
            <GlassCard key={reason.title} delay={i * 0.08}>
              <div className="w-12 h-12 rounded-xl bg-[#CCFBF1] flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-[#14B8A6]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{reason.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{reason.description}</p>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
