import type { Metadata } from 'next'
import './globals.css'
import { inter } from './font'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export const metadata: Metadata = {
  title: 'TechCraft',
  description: 'Landing page for business',
  authors: [{ name: 'André', url: 'https://ae.dev.br' }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={` ${inter.className} scroll-auto`}>
        <div id="inicio"></div>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
