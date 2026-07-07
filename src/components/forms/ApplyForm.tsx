"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { Upload, Loader2 } from "lucide-react"
import { applySchema, type ApplyFormValues } from "@/lib/schemas"
import { useState } from "react"
import { toast } from "sonner"

export function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ApplyFormValues>({
    resolver: zodResolver(applySchema),
  })

  const onSubmit = async (data: ApplyFormValues) => {
    if (!resumeFile) {
      toast.error("Please upload your resume")
      return
    }
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => formData.append(key, value))
      formData.append("resume", resumeFile)

      const res = await fetch("/api/apply", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Failed to submit application")
      toast.success("Application submitted! We'll review your profile and contact you.")
      reset()
      setResumeFile(null)
    } catch {
      toast.error("Submission failed. Please try again or email your resume to hr@asiaplacements.com")
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
          <label className="block text-sm font-medium text-[#111827] mb-1.5">Position Applying For *</label>
          <input
            {...register("position")}
            placeholder="e.g. Software Engineer"
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          />
          {errors.position && <p className="mt-1 text-sm text-red-500">{errors.position.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5">Years of Experience *</label>
          <select
            {...register("experience")}
            className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all"
          >
            <option value="">Select experience</option>
            {["0-1", "1-2", "2-4", "4-6", "6-8", "8-10", "10+"].map((y) => (
              <option key={y} value={y}>{y} years</option>
            ))}
          </select>
          {errors.experience && <p className="mt-1 text-sm text-red-500">{errors.experience.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-[#111827] mb-1.5">Upload Resume *</label>
          <label className="flex items-center gap-3 w-full px-4 py-3 rounded-xl border border-dashed border-[#2563EB] bg-[#DBEAFE]/30 text-[#2563EB] cursor-pointer hover:bg-[#DBEAFE]/50 transition-colors">
            <Upload className="w-5 h-5" />
            <span className="text-sm font-medium">
              {resumeFile ? resumeFile.name : "Upload PDF/DOC"}
            </span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResumeFile(e.target.files?.[0] || null)}
              className="hidden"
            />
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#111827] mb-1.5">Cover Note (Optional)</label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Briefly tell us about yourself..."
          className="w-full px-4 py-3 rounded-xl border border-[#E5E7EB] bg-white text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/20 focus:border-[#2563EB] transition-all resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#0F172A] text-white font-semibold rounded-xl hover:bg-[#1E293B] disabled:opacity-60 transition-all shadow-lg shadow-navy-500/10 hover:shadow-xl"
      >
        {isSubmitting ? (
          <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
          <Upload className="w-5 h-5" />
        )}
        {isSubmitting ? "Submitting..." : "Submit Application"}
      </button>
    </motion.form>
  )
}
