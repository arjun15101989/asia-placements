"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function GlassCard({ children, className, hover = true, delay = 0 }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : {}}
      className={cn(
        "glass-card rounded-2xl p-6 md:p-8 shadow-sm",
        "hover:shadow-xl hover:shadow-black/5",
        "transition-all duration-300",
        className
      )}
    >
      {children}
    </motion.div>
  )
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-[#E5E7EB] p-6 md:p-8",
        "shadow-sm hover:shadow-lg transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  )
}
