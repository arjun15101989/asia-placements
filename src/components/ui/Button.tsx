"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { forwardRef } from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "accent"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  href?: string
  loading?: boolean
}

const variants = {
  primary:
    "bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30",
  secondary:
    "bg-[#0F172A] text-white hover:bg-[#1E293B] shadow-lg shadow-navy-500/10",
  outline:
    "border-2 border-[#2563EB] text-[#2563EB] hover:bg-[#2563EB] hover:text-white",
  accent:
    "bg-[#14B8A6] text-white hover:bg-[#0D9488] shadow-lg shadow-teal-500/20",
  ghost: "text-[#6B7280] hover:text-[#111827] hover:bg-[#F3F4F6]",
}

const sizes = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-base rounded-xl",
  lg: "px-8 py-4 text-lg rounded-xl",
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, icon, iconPosition = "left", href, loading, disabled, ...props }, ref) => {
    const content = (
      <motion.span
        className={cn(
          "relative inline-flex items-center justify-center gap-2 font-semibold transition-all duration-300",
          variants[variant],
          sizes[size],
          loading && "opacity-70 cursor-not-allowed",
          disabled && "opacity-50 cursor-not-allowed",
          className
        )}
        whileHover={!disabled && !loading ? { scale: 1.02 } : {}}
        whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
        ref={ref}
        {...(props as any)}
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        {!loading && icon && iconPosition === "left" && icon}
        {children}
        {!loading && icon && iconPosition === "right" && icon}
      </motion.span>
    )

    if (href) {
      return (
        <a href={href} className="inline-block">
          {content}
        </a>
      )
    }

    return content
  }
)

Button.displayName = "Button"
