import './globals.css'
import { Inter } from 'next/font/google'
import { contactInfo } from './data'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: contactInfo.name,
  description: contactInfo.description,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
