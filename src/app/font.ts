/* eslint-disable camelcase */
import { Inter, Roboto_Mono, Caveat } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-roboto',
  style: ['normal', 'italic'],
})

export const fontLogo = Caveat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-roboto',
  style: ['normal'],
})
