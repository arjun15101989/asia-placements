"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { industries } from "@/data/industries"
import {
  Monitor, Landmark, TrendingUp, HeartPulse, ShoppingBag,
  Factory, Wrench, BookOpen, Car, Truck, Wifi, LucideIcon,
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  Monitor, Landmark, TrendingUp, HeartPulse, ShoppingBag,
  Factory, Wrench, BookOpen, Car, Truck, Wifi,
}

export function Industries() {
  return (
    <Section id="industries" background="muted">
      <SectionHeader
        subtitle="Industries We Serve"
        title="Expertise Across Diverse Sectors"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {industries.map((industry, i) => {
          const Icon = iconMap[industry.icon] || Monitor
          return (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-5 text-center shadow-sm hover:shadow-lg hover:border-[#2563EB]/20 transition-all duration-300 group cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] flex items-center justify-center mx-auto mb-3 group-hover:bg-[#DBEAFE] transition-colors">
                {Icon && <Icon className="w-5 h-5 text-[#6B7280] group-hover:text-[#2563EB] transition-colors" />}
              </div>
              <h3 className="text-sm font-semibold text-[#111827]">{industry.name}</h3>
            </motion.div>
          )
        })}
      </div>
    </Section>
  )
}
