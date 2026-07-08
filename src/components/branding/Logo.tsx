"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: { width: 120, height: 75 },
  md: { width: 160, height: 100 },
  lg: { width: 200, height: 125 },
}

export function Logo({ className, size = "md" }: LogoProps) {
  const dims = sizeMap[size]

  return (
    <motion.div
      className={cn("flex items-center", className)}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img
        src="/logo-original.jpg"
        alt="Asia Placements"
        width={dims.width}
        height={dims.height}
        className="object-contain"
      />
    </motion.div>
  )
}
