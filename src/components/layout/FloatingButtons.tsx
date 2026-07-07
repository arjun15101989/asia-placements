"use client"

import { motion } from "framer-motion"
import { Phone, Mail, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-20 lg:bottom-8 z-40 flex flex-col gap-3">
      <motion.a
        href="tel:+919561814547"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#2563EB] text-white shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-shadow"
        title="Call HR"
      >
        <Phone className="w-5 h-5" />
      </motion.a>

      <motion.a
        href="mailto:hr@asiaplacements.com"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        className="flex items-center justify-center w-12 h-12 rounded-full bg-[#14B8A6] text-white shadow-lg shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-500/40 transition-shadow"
        title="Email HR"
      >
        <Mail className="w-5 h-5" />
      </motion.a>

      {showScrollTop && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          whileHover={{ scale: 1.1 }}
          className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-[#E5E7EB] text-[#6B7280] shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  )
}
