import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Home Buyers Guide | 1st Texas Realtors',
  description: 'Step-by-step guidance for first-time and repeat buyers in Clear Lake, TX. Our experienced realtors help you navigate offers, negotiations, and closing.',
}

export default function HomeBuyersLayout({ children }: { children: React.ReactNode }) {
  return children
}
