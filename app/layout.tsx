import './globals.css'
import type { Metadata } from 'next'

import {inter} from "./fonts"

export const metadata: Metadata = {
  title: 'Finn Guha',
  description: 'Official homepage, portfolio and shop of Finn Guha.',
  keywords: 'finn guha, codingnotes, web development , learn to code, learn to learn, learn2learn community, studying, freelancing, website maker, notion templates',
  
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
