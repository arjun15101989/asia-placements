"use client"

import { motion } from "framer-motion"
import { Section, SectionHeader } from "@/components/ui/Section"
import { Building2, Target, Shield, HeartHandshake } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description: "To bridge the gap between talented professionals and forward-thinking organizations, creating lasting partnerships that drive growth and success.",
  },
  {
    icon: Shield,
    title: "Our Vision",
    description: "To be India's most trusted recruitment partner, known for integrity, excellence, and transforming how companies build their workforce.",
  },
  {
    icon: Building2,
    title: "Who We Are",
    description: "Based in Vasai, Maharashtra, Asia Placements is a premier HR consultancy with a decade of experience in recruitment, staffing, and HR solutions across India.",
  },
  {
    icon: HeartHandshake,
    title: "Our Commitment",
    description: "We are committed to delivering personalized recruitment solutions that respect both candidate aspirations and employer requirements with transparency and professionalism.",
  },
]

export function About() {
  return (
    <Section id="about" background="muted">
      <SectionHeader
        subtitle="About Us"
        title="India's Trusted Recruitment Partner"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((item, i) => {
          const Icon = item.icon
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-3">{item.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 glass-card rounded-3xl p-8 md:p-12 text-center"
      >
        <p className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto leading-relaxed">
          <strong className="text-[#111827]">Asia Placements</strong> is a full-service HR consultancy 
          and recruitment agency based in <strong className="text-[#111827]">Vasai, Maharashtra</strong>. 
          We specialize in connecting businesses with exceptional talent across IT, finance, healthcare, 
          manufacturing, and more. Our <strong className="text-[#111827]">Office No. 1, 1st Floor, Opp. Papdi Church</strong>{" "}
          location serves as the hub for our pan-India recruitment operations. Whether you're a job seeker 
          looking for your next opportunity or an employer seeking top-tier talent, we're here to help.
        </p>
      </motion.div>
    </Section>
  )
}
