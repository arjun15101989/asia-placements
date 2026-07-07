"use client"

import { motion } from "framer-motion"
import { Briefcase, Users, FileText } from "lucide-react"

export function StickyCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
    >
      <div className="flex items-stretch bg-white border-t border-[#E5E7EB] shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-2 py-2 gap-1">
        <a
          href="#apply"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-2 rounded-xl bg-[#2563EB] text-white"
        >
          <Briefcase className="w-4 h-4" />
          <span className="text-[10px] font-semibold leading-tight">Apply for Jobs</span>
        </a>
        <a
          href="#hire"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-2 rounded-xl bg-[#0F172A] text-white"
        >
          <Users className="w-4 h-4" />
          <span className="text-[10px] font-semibold leading-tight">Hire Talent</span>
        </a>
        <a
          href="#contact"
          className="flex-1 flex flex-col items-center justify-center gap-0.5 py-2 px-2 rounded-xl bg-white border border-[#E5E7EB] text-[#111827]"
        >
          <FileText className="w-4 h-4" />
          <span className="text-[10px] font-semibold leading-tight">Enquire Now</span>
        </a>
      </div>
    </motion.div>
  )
}
