"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { services } from "@/data/services"
import {
  UserCheck, Calendar, Award, Users, GraduationCap,
  Monitor, Briefcase, Receipt, Building2, LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  UserCheck, Calendar, Award, Users, GraduationCap,
  Monitor, Briefcase, Receipt, Building2,
}

export function Services() {
  return (
    <Section id="services">
      <SectionHeader
        subtitle="Our Services"
        title="Comprehensive Recruitment Solutions"
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon] || Briefcase
          return (
            <GlassCard key={service.title} delay={i * 0.05}>
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#2563EB]/10 to-[#14B8A6]/10 flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">{service.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
            </GlassCard>
          )
        })}
      </div>
    </Section>
  )
}
