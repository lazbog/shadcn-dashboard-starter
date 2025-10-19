import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'shadcn-dashboard-starter',
  description: 'A Next.js 14 dashboard starter with shadcn/ui',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}