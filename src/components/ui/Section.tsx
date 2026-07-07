"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { useRef } from "react"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "white" | "muted"
}

export function Section({ children, className, id, background = "white" }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "section-padding",
        background === "muted" ? "bg-[#F8FAFC]" : "bg-white",
        className
      )}
    >
      <div className="container-wide">{children}</div>
    </section>
  )
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  light = false,
}: {
  title: string
  subtitle?: string
  centered?: boolean
  light?: boolean
}) {
  const ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("mb-12 md:mb-16", centered && "text-center")}
    >
      <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-[#2563EB] mb-3">
        {subtitle}
      </span>
      <h2 className={cn(
        "text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
        light ? "text-white" : "text-[#0F172A]"
      )}>
        {title}
      </h2>
      <div className={cn(
        "mt-4 h-1 w-16 rounded-full mx-auto",
        centered ? "mx-auto" : "",
        "bg-gradient-to-r from-[#2563EB] to-[#14B8A6]"
      )} />
    </motion.div>
  )
}
