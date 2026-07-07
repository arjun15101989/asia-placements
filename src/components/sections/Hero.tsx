"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Briefcase, Users, Phone } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { FloatingShapes } from "@/components/ui/FloatingShapes"
import { useState } from "react"
import { RequestCallback } from "@/components/forms/RequestCallback"

export function Hero() {
  const [callbackOpen, setCallbackOpen] = useState(false)

  return (
    <>
      <section
        id="hero"
        className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F8FAFC] via-white to-[#EFF6FF]"
      >
        <FloatingShapes />

        <div className="container-wide px-5 md:px-8 pt-28 pb-20 md:pt-36 md:pb-28 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#DBEAFE] text-[#2563EB] text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#2563EB] animate-pulse" />
                Trusted Recruitment Partner Since 2015
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#0F172A] leading-[1.1]"
              >
                Connecting{" "}
                <span className="gradient-text">Talent</span>
                <br />
                with{" "}
                <span className="gradient-text">Opportunity</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-6 text-lg md:text-xl text-[#6B7280] leading-relaxed max-w-xl"
              >
                Asia Placements is your trusted HR consultancy and recruitment agency in Vasai, Mumbai. 
                We help businesses build exceptional teams and professionals find their dream careers.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <a
                  href="#apply"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 hover:scale-105"
                >
                  <Briefcase className="w-5 h-5" />
                  Apply for Jobs
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="#hire"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#0F172A] text-white font-semibold rounded-xl hover:bg-[#1E293B] transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <Users className="w-5 h-5" />
                  Hire Talent
                </a>
                <button
                  onClick={() => setCallbackOpen(true)}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white border border-[#E5E7EB] text-[#111827] font-semibold rounded-xl hover:bg-[#F8FAFC] hover:border-[#2563EB] transition-all shadow-sm hover:shadow-md"
                >
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                  Request Callback
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-12 flex flex-wrap gap-8 md:gap-12"
              >
                {[
                  { label: "Happy Clients", value: "500+" },
                  { label: "Placements Made", value: "5000+" },
                  { label: "Corporate Partners", value: "200+" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl md:text-3xl font-bold text-[#2563EB]">{stat.value}</div>
                    <div className="text-sm text-[#6B7280] mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
              className="relative hidden lg:block"
            >
              <div className="relative">
                <div className="glass-card rounded-3xl p-8 shadow-xl">
                  <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-[#2563EB]/5 to-[#14B8A6]/5 flex items-center justify-center border border-[#E5E7EB]">
                    <div className="text-center p-8">
                      <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#14B8A6] flex items-center justify-center shadow-lg mb-6">
                        <Users className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-2">Your Growth Partner</h3>
                      <p className="text-[#6B7280] text-sm">
                        End-to-end recruitment & HR solutions
                      </p>
                      <div className="mt-6 flex items-center justify-center gap-4">
                        <div className="flex -space-x-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div
                              key={i}
                              className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563EB] to-[#14B8A6] border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                            >
                              {String.fromCharCode(64 + i)}
                            </div>
                          ))}
                        </div>
                        <span className="text-sm text-[#6B7280]">
                          <strong className="text-[#111827]">200+</strong> companies trust us
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <RequestCallback open={callbackOpen} onClose={() => setCallbackOpen(false)} />
    </>
  )
}
