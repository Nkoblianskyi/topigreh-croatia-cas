import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { CookieBanner } from "@/components/cookie-banner"
import PromotionalModal from "@/components/promotional-modal"
import "./globals.css"

export const metadata: Metadata = {
  title: "Top Igre u Hrvatskoj | TopIgreHR.com",
  description:
    "Stručne recenzije vrhunskih hrvatskih online kasina. Otkrijte licencirane i sigurne kasine s najboljim bonusima za hrvatske igrače 2025.",
  keywords: [
    "top igre",
    "online kasina hrvatska",
    "najbolja kasina",
    "casino recenzije",
    "bonus dobrodošlice",
    "sigurno kockanje",
    "licencirana kasina",
    "vrhunska kasina 2025",
    "hrvatski igrači",
    "online igre",
  ],
  authors: [{ name: "TopIgreHR", url: "https://topigrehr.com" }],
  creator: "TopIgreHR",
  publisher: "TopIgreHR",
  applicationName: "TopIgreHR",
  metadataBase: new URL("https://topigrehr.com"),
  openGraph: {
    title: "Top Igre u Hrvatskoj 2025 | Vrhunski Online Kasina",
    description: "Stručne recenzije i detaljne analize najboljih hrvatskih online kasina",
    url: "https://topigrehr.com",
    siteName: "TopIgreHR",
    locale: "hr_HR",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <CookieBanner />
        <PromotionalModal />
        <Analytics />
      </body>
    </html>
  )
}
