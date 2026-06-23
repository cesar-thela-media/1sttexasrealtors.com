'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NAV_LINKS } from '@/lib/constants'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center">
          <Image
            src="/logo.png"
            alt="1st Texas Realtors"
            width={130}
            height={43}
            className="object-contain"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#2c2c2c] text-sm font-medium hover:text-[#C4622D] transition-colors flex items-center gap-1"
            >
              {link.label}
              <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 12 12">
                <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hidden lg:inline-flex items-center bg-[#C4622D] text-white text-sm font-semibold px-5 py-2.5 rounded hover:bg-[#A84E22] transition-colors"
        >
          Contact a Realtor
        </Link>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-[#1C3535]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-[#2c2c2c] font-medium hover:text-[#C4622D] transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#C4622D] text-white font-semibold px-5 py-2.5 rounded hover:bg-[#A84E22] transition-colors"
            onClick={() => setOpen(false)}
          >
            Contact a Realtor
          </Link>
        </div>
      )}
    </header>
  )
}
