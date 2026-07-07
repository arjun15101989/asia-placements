import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  type: z.enum(["candidate", "employer", "general"]),
})

export const applySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  position: z.string().min(2, "Please enter the position you're applying for"),
  experience: z.string().min(1, "Please enter your years of experience"),
  message: z.string().optional(),
})

export const callbackSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  preferredTime: z.string().min(1, "Please select a preferred time"),
})

export type ContactFormValues = z.infer<typeof contactSchema>
export type ApplyFormValues = z.infer<typeof applySchema>
export type CallbackFormValues = z.infer<typeof callbackSchema>
