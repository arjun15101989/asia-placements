"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Send, Loader2 } from "lucide-react"
import { Logo } from "@/components/branding/Logo"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useState } from "react"
import { toast } from "sonner"

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  message: z.string().min(5, "Message is required"),
})

type FormData = z.infer<typeof contactSchema>

const services = [
  "Permanent Recruitment", "Contract Staffing", "Executive Search",
  "Bulk Hiring", "Campus Recruitment", "IT & Non-IT Recruitment",
  "Payroll Support", "HR Consulting",
]

const industries = [
  "IT", "Banking", "Finance", "Healthcare", "Retail",
  "Manufacturing", "Engineering", "Education", "Automobile", "Logistics",
]

export default function Home() {
  const [submitting, setSubmitting] = useState(false)

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: FormData) => {
    setSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "general" }),
      })
      if (!res.ok) throw new Error()
      toast.success("Thanks! We'll get back to you within 24 hours.")
      reset()
    } catch {
      toast.error("Something went wrong. Email us at hr@asiaplacements.org")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      {/* HERO */}
      <section id="hero" className="min-h-[90vh] flex items-center bg-gradient-to-br from-[#F8FAFC] via-white to-[#FEF2F2] pt-20">
        <div className="max-w-6xl mx-auto px-5 w-full">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEE2E2] text-[#DC2626] text-xs font-semibold mb-5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#DC2626]" />
              Trusted Since 2015
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#0F172A] leading-tight"
            >
              Connecting <span className="text-[#DC2626]">Talent</span> with <span className="text-[#DC2626]">Opportunity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-5 text-lg text-[#6B7280] max-w-xl"
            >
              Asia Placements — trusted HR consultancy and recruitment agency in Vasai, Mumbai. We help businesses find great talent and professionals find great careers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 flex flex-wrap gap-8"
            >
              <div><div className="text-2xl font-bold text-[#DC2626]">500+</div><div className="text-xs text-[#6B7280]">Clients</div></div>
              <div><div className="text-2xl font-bold text-[#DC2626]">5000+</div><div className="text-xs text-[#6B7280]">Placements</div></div>
              <div><div className="text-2xl font-bold text-[#DC2626]">200+</div><div className="text-xs text-[#6B7280]">Corporate Partners</div></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-5 bg-[#F8FAFC]">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#DC2626]">Our Services</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-2">What We Do</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="bg-white rounded-xl border border-[#E5E7EB] px-5 py-4 text-sm font-medium text-[#111827] hover:border-[#DC2626]/30 hover:shadow-sm transition-all"
              >
                {s}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#DC2626]">Industries</span>
            <div className="flex flex-wrap justify-center gap-2 mt-3">
              {industries.map((ind) => (
                <span key={ind} className="px-3 py-1.5 bg-white rounded-lg border border-[#E5E7EB] text-xs font-medium text-[#6B7280]">
                  {ind}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs font-semibold tracking-widest uppercase text-[#DC2626]">Contact</span>
            <h2 className="text-3xl font-bold text-[#0F172A] mt-2">Get in Touch</h2>
            <p className="text-[#6B7280] mt-2">Email us for recruitment or career opportunities</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-5"
            >
              <a href="mailto:hr@asiaplacements.org" className="flex items-center gap-4 p-4 rounded-xl bg-[#F8FAFC] hover:bg-[#FEE2E2] transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-[#FEE2E2] flex items-center justify-center group-hover:bg-white transition-colors">
                  <Mail className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280]">Email Us</div>
                  <div className="font-semibold text-[#111827]">hr@asiaplacements.org</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-[#F8FAFC]">
                <div className="w-10 h-10 rounded-lg bg-[#FEE2E2] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#DC2626]" />
                </div>
                <div>
                  <div className="text-xs text-[#6B7280]">Visit Us</div>
                  <div className="font-semibold text-[#111827] text-sm">
                    Office No.1, 1st Floor, Opp. Papdi Church,<br />
                    Above Royal Décor, Papdi, Vasai West,<br />
                    Maharashtra – 401207
                  </div>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border border-[#E5E7EB] h-44">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=72.8%2C19.3%2C72.9%2C19.4&layer=mapnik&marker=19.35%2C72.85"
                  width="100%" height="100%" style={{ border: 0 }} title="Map" loading="lazy"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-[#E5E7EB] p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-[#0F172A] mb-5">Send a Message</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <input {...register("name")} placeholder="Your Name" className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]" />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <input {...register("email")} placeholder="Email Address" className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626]" />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <textarea {...register("message")} rows={4} placeholder="Your Message" className="w-full px-4 py-2.5 rounded-xl border border-[#E5E7EB] text-sm focus:outline-none focus:ring-2 focus:ring-[#DC2626]/20 focus:border-[#DC2626] resize-none" />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-[#DC2626] text-white font-semibold rounded-xl hover:bg-[#B91C1C] disabled:opacity-60 transition-all shadow-lg"
                >
                  {submitting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0F172A] py-8 px-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo />
          <p className="text-sm text-[#64748B]">
            &copy; {new Date().getFullYear()} Asia Placements. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
