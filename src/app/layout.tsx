import type { Metadata } from 'next'
import './globals.css'
import { inter } from './font'
import { Header } from '@/components/header'

export const metadata: Metadata = {
  title: 'Jesus',
  description: 'Landing page for business',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={` ${inter.className}`}>
        <div id="inicio"></div>
        <Header />
        {children}
      </body>
    </html>
  )
}
