import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | 1st Texas Realtors',
  description: 'Get in touch with Mark & Sandra at 1st Texas Realtors. We serve Clear Lake, Seabrook, League City, and all of southeast Houston.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
