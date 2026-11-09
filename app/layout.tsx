import type { Metadata } from "next"
import { Geist } from "next/font/google"

import { Providers } from "@/components/providers"
import { siteConfig } from "@/lib/config/site"
import "./globals.css"

// Placeholder font until the Figma typography is extracted.
const bodyFont = Geist({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: [{ name: siteConfig.developer.name, url: siteConfig.developer.linkedin }],
  creator: siteConfig.developer.name,
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bodyFont.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
