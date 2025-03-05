import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'helfy.io',
  description: 'An app to help you achieve your fitness goals',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
