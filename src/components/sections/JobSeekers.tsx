"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/ui/Section"
import { GlassCard } from "@/components/ui/GlassCard"
import { ApplyForm } from "@/components/forms/ApplyForm"
import { ArrowUpRight, CheckCircle } from "lucide-react"

const benefits = [
  "Free registration and placement services",
  "Access to 500+ active job openings",
  "Profile review and career counseling",
  "Interview preparation and guidance",
  "Direct connection with top employers",
  "Timely updates on suitable opportunities",
]

export function JobSeekers() {
  return (
    <Section id="apply" background="muted">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-3">
            For Job Seekers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-[#0F172A] mb-6">
            Find Your{" "}
            <span className="gradient-text">Dream Job</span>{" "}
            Today
          </h2>
          <p className="text-lg text-[#6B7280] mb-8 leading-relaxed">
            Take the next step in your career. Submit your resume and let our experts match you with the perfect opportunity.
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
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-500/20"
            >
              Email CV <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="tel:+919561814547"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#E5E7EB] text-[#111827] font-semibold rounded-xl hover:border-[#2563EB] transition-all"
            >
              Call HR Now
            </a>
          </div>
        </motion.div>

        <GlassCard>
          <h3 className="text-xl font-bold text-[#0F172A] mb-6">Apply for Jobs</h3>
          <ApplyForm />
        </GlassCard>
      </div>
    </Section>
  )
}
