"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion, AnimatePresence } from "framer-motion"
import { Phone, X, Loader2 } from "lucide-react"
import { callbackSchema, type CallbackFormValues } from "@/lib/schemas"
import { useState } from "react"
import { toast } from "sonner"

interface RequestCallbackProps {
  open: boolean
  onClose: () => void
}

export function RequestCallback({ open, onClose }: RequestCallbackProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CallbackFormValues>({
    resolver: zodResolver(callbackSchema),
  })

  const onSubmit = async (data: CallbackFormValues) => {
    setIsSubmitting(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, type: "general", email: "callback@asiaplacements.org", message: `Callback requested for ${data.preferredTime}` }),
      })
      if (!res.ok) throw new Error("Failed")
      toast.success("We'll call you back shortly!")
      reset()
      onClose()
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-md shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DBEAFE] flex items-center justify-center">
                  <Phone className="w-5 h-5 text-[#2563EB]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#0F172A]">Request a Callback</h3>
                  <p className="text-sm text-[#6B7280]">We'll call you within 24 hours</p>
                </div>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-[#F3F4F6] rounded-xl transition-colors">
                <X className="w-5 h-5 text-[#6B7280]" />
              </button>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#111827] mb-1.5">Your Name *</label>
                <input
                  {...register("name")}
                  placeholder="Full name"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>

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
                <label className="block text-sm font-medium text-[#111827] mb-1.5">Preferred Time *</label>
                <select
                  {...register("preferredTime")}
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
                >
                  <option value="">Select time</option>
                  <option value="9AM-12PM">Morning (9 AM - 12 PM)</option>
                  <option value="12PM-3PM">Afternoon (12 PM - 3 PM)</option>
                  <option value="3PM-6PM">Evening (3 PM - 6 PM)</option>
                  <option value="Anytime">Anytime</option>
                </select>
                {errors.preferredTime && <p className="mt-1 text-sm text-red-500">{errors.preferredTime.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#2563EB] text-white font-semibold rounded-xl hover:bg-[#1D4ED8] disabled:opacity-60 transition-all shadow-lg"
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Phone className="w-5 h-5" />
                )}
                {isSubmitting ? "Requesting..." : "Request Callback"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
