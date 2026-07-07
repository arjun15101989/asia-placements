"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { ContactForm } from "@/components/forms/ContactForm"
import { CheckCircle, ArrowUpRight } from "lucide-react"

const benefits = [
  "Pre-screened, qualified candidates within 72 hours",
  "Flexible engagement models for all budgets",
  "Dedicated account manager for your hiring needs",
  "Volume discounts on bulk and corporate hiring",
  "Post-placement replacement guarantee",
  "Payroll and compliance support available",
]

export function Employers() {
  return (
    <Section id="hire">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:order-2"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-3">
            For Employers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] mb-6">
            Hire the{" "}
            <span className="gradient-text">Best Talent</span>{" "}
            for Your Team
          </h2>
          <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
            Partner with Asia Placements to find skilled professionals who drive your business forward. 
            From executive search to bulk hiring, we've got you covered.
          </p>

          <div className="space-y-3 mb-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-[#14B8A6] flex-shrink-0" />
                <span className="text-[#111827]">{benefit}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:hr@asiaplacements.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#0F172A] text-white font-semibold rounded-xl hover:bg-[#1E293B] transition-all shadow-lg"
            >
              Post a Requirement <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        <GlassCard className="lg:order-1">
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">Send Your Requirement</h3>
          <ContactForm />
        </GlassCard>
      </div>
    </Section>
  )
}
