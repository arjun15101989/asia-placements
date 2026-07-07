"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Send, Loader2 } from "lucide-react"
import { contactSchema, type ContactFormValues } from "@/lib/schemas"
import { useState } from "react"
import { toast } from "sonner"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { type: "general" },
  })

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error("Failed to submit")
      toast.success("Thank you! We'll get back to you within 24 hours.")
      reset()
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5">Full Name *</label>
          <input
            {...register("name")}
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5">Email Address *</label>
          <input
            {...register("email")}
            type="email"
            placeholder="your@email.com"
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5">Phone Number *</label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+91 98765 43210"
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5">Company (Optional)</label>
          <input
            {...register("company")}
            placeholder="Your company name"
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#111827] mb-1.5">I am a *</label>
        <select
          {...register("type")}
          className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
        >
          <option value="general">General Enquiry</option>
          <option value="candidate">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#111827] mb-1.5">Message *</label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your requirements..."
          className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all resize-none"
        />
        {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] disabled:opacity-60 transition-all shadow-lg shadow-blue-500/20 hover:shadow-xl"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Send className="w-5 h-5" />
        )}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </motion.form>
  )
}
