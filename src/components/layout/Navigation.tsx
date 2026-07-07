"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Menu, X, Mail } from "lucide-react"
import { Logo } from "@/components/branding/Logo"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
]

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        )}
      >
        <nav className="max-w-6xl mx-auto flex items-center justify-between px-5 py-3">
          <a href="#hero">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hr@asiaplacements.org"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#DC2626] text-white rounded-xl hover:bg-[#B91C1C] transition-all shadow-lg shadow-red-500/20"
            >
              <Mail className="w-4 h-4" />
              Connect with HR
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-[#6B7280]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-40 bg-white pt-20 px-5"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="py-3 text-lg font-medium text-[#111827] border-b border-[#E5E7EB]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="mailto:hr@asiaplacements.org"
              onClick={() => setMobileOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 py-3 bg-[#DC2626] text-white font-semibold rounded-xl"
            >
              <Mail className="w-4 h-4" /> Connect with HR
            </a>
          </div>
        </motion.div>
      )}
    </>
  )
}
