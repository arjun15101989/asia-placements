export interface Service {
  title: string
  description: string
  icon: string
}

export interface Industry {
  name: string
  icon: string
  description: string
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  type: "candidate" | "employer"
}

export interface FAQItem {
  question: string
  answer: string
}

export interface ContactFormData {
  name: string
  email: string
  phone: string
  company?: string
  message: string
  type: "candidate" | "employer" | "general"
}

export interface ApplyFormData {
  name: string
  email: string
  phone: string
  position: string
  experience: string
  message?: string
}

export interface CallbackRequest {
  name: string
  phone: string
  preferredTime: string
}
