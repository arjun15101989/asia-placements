import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/layout/Navigation"
import { LoadingScreen } from "@/components/layout/LoadingScreen"
import { Toaster } from "sonner"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://asiaplacements.org"),
  title: "Asia Placements | Recruitment Agency & HR Consultancy in Vasai, Mumbai",
  description:
    "Asia Placements is a trusted recruitment agency and HR consultancy based in Vasai, Mumbai. We offer permanent recruitment, contract staffing, executive search, bulk hiring, and HR consulting services across India.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://asiaplacements.org",
    siteName: "Asia Placements",
    title: "Asia Placements | Recruitment Agency & HR Consultancy",
    description: "Trusted recruitment partner connecting talent with opportunity across India.",
    images: [{ url: "/og-image.svg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asia Placements | Recruitment Agency & HR Consultancy",
    description: "Trusted recruitment partner connecting talent with opportunity across India.",
    images: ["/og-image.svg"],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Asia Placements",
              url: "https://asiaplacements.org",
              email: "hr@asiaplacements.org",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Office No.1, 1st Floor, Opp. Papdi Church, Above Royal D\u00e9cor, Papdi",
                addressLocality: "Vasai West",
                addressRegion: "Maharashtra",
                postalCode: "401207",
                addressCountry: "IN",
              },
              areaServed: ["Mumbai", "Maharashtra", "India"],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-[#111827] antialiased">
        <LoadingScreen />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Toaster
          position="top-center"
          toastOptions={{
            style: {
              background: "#FFFFFF",
              color: "#111827",
              border: "1px solid #E5E7EB",
              borderRadius: "12px",
            },
          }}
        />
      </body>
    </html>
  )
}
