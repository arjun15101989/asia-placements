"use client"

import { motion } from "framer-motion"
import { Logo } from "@/components/branding/Logo"
import { Phone, Mail, MapPin, ArrowUpRight, Heart } from "lucide-react"

const footerLinks = {
  services: [
    "Permanent Recruitment",
    "Contract Staffing",
    "Executive Search",
    "Bulk Hiring",
    "Campus Recruitment",
    "IT Recruitment",
    "HR Consulting",
  ],
  quickLinks: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Industries", href: "#industries" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  industries: [
    "Information Technology",
    "Banking & Finance",
    "Healthcare",
    "Manufacturing",
    "Engineering",
    "Education",
    "Logistics",
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="container-wide px-5 md:px-8 pt-16 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Logo size="sm" />
            <p className="mt-4 text-[#94A3B8] text-sm leading-relaxed">
              Asia Placements is your trusted recruitment partner in Vasai, Mumbai. 
              Connecting talent with opportunity across India.
            </p>
            <div className="mt-6 space-y-3">
              <a href="tel:+919561814547" className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-[#2563EB]" /> +91 95618 14547
              </a>
              <a href="mailto:hr@asiaplacements.com" className="flex items-center gap-3 text-sm text-[#94A3B8] hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-[#2563EB]" /> hr@asiaplacements.com
              </a>
              <div className="flex items-start gap-3 text-sm text-[#94A3B8]">
                <MapPin className="w-4 h-4 text-[#2563EB] mt-0.5 flex-shrink-0" />
                <span>
Flat no 5, C Wing, Ground Floor, Mahavir Complex,<br />
                    Beside Global Computer, Behind Golden Park Hospital,<br />
                    Vasai West, Maharashtra – 401202
                </span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2563EB] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#94A3B8] hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2563EB] mb-4">Our Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-[#94A3B8]">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2563EB] mb-4">Industries</h4>
            <ul className="space-y-3">
              {footerLinks.industries.map((industry) => (
                <li key={industry}>
                  <span className="text-sm text-[#94A3B8]">{industry}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-[#2563EB] mb-3">Follow Us</h4>
              <div className="flex gap-3">
                {["LI", "FB", "IG", "TW"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-[#1E293B] flex items-center justify-center text-xs font-bold text-[#94A3B8] hover:bg-[#2563EB] hover:text-white transition-all"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-[#1E293B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#64748B]">
            &copy; {new Date().getFullYear()} Asia Placements. All rights reserved.
          </p>
          <p className="text-sm text-[#64748B] flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" /> in Vasai, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  )
}
