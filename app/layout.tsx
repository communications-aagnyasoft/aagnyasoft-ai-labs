import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AagnyaSoft AI Labs",
  description:
    "Experience the future of technology with Aagnya's AR and AI solutions, including our Ajna navigation app.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <style>{`
          .text-primary { color: #ad6aea; }
          .bg-primary { background-color: #ad6aea; }
          .text-secondary { color: #8a2be2; }
          .bg-secondary { background-color: #8a2be2; }
        `}</style>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

