"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

const sizeMap = {
  sm: { width: 120, height: 40 },
  md: { width: 160, height: 53 },
  lg: { width: 200, height: 66 },
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
      <Image
        src="/logo-original.jpg"
        alt="Asia Placements"
        width={dims.width}
        height={dims.height}
        className="object-contain"
        priority
      />
    </motion.div>
  )
}
