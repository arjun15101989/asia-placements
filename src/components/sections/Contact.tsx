"use client"

import { Section, SectionHeader } from "@/components/ui/Section"
import { ContactForm } from "@/components/forms/ContactForm"
import { GlassCard } from "@/components/ui/GlassCard"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 95618 14547",
    href: "tel:+919561814547",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "hr@asiaplacements.com",
    href: "mailto:hr@asiaplacements.com",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Flat no 5, C Wing, Ground Floor, Mahavir Complex, Vasai West, Maharashtra – 401202",
    href: "https://www.google.com/maps/search/Mahavir+Complex+Vasai+West",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon – Sat: 9:30 AM – 6:30 PM",
  },
]

export function Contact() {
  return (
    <Section id="contact">
      <SectionHeader
        subtitle="Contact Us"
        title="Get in Touch"
      />

      <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >
          {contactInfo.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center flex-shrink-0 group-hover:bg-[#2563EB] transition-colors">
                      <Icon className="w-5 h-5 text-[#2563EB] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">{item.label}</div>
                      <div className="font-semibold text-[#111827] group-hover:text-[#2563EB] transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#2563EB]" />
                    </div>
                    <div>
                      <div className="text-sm text-[#6B7280]">{item.label}</div>
                      <div className="font-semibold text-[#111827]">{item.value}</div>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}

          {/* Map */}
          <div className="rounded-2xl overflow-hidden border border-[#E5E7EB] h-48 shadow-sm mt-4">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.8%2C19.3%2C72.9%2C19.4&layer=mapnik&marker=19.35%2C72.85"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              title="Asia Placements Location"
              loading="lazy"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3"
        >
          <GlassCard>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">Send Us a Message</h3>
            <p className="text-[#6B7280] text-sm mb-6">
              Fill out the form and we'll get back to you within 24 hours.
            </p>
            <ContactForm />
          </GlassCard>
        </motion.div>
      </div>
    </Section>
  )
}
