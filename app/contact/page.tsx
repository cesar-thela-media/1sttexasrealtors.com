'use client'

import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { useState } from 'react'

const contactMethods = [
  {
    label: 'Phone',
    value: '(281) 333-0034',
    href: 'tel:2813330034',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4c0-.6.5-1 1-1h2.5l1.5 4L7.5 8.5c.7 1.8 2.2 3.3 4 4L13 11l4 1.5V15c0 .5-.4 1-1 1C7 16 4 7 4 4Z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@1sttexasrealtors.com',
    href: 'mailto:info@1sttexasrealtors.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="18" height="14" rx="2"/>
        <path d="m2 7 8.9 5.3a1.8 1.8 0 0 0 2.2 0L22 7"/>
      </svg>
    ),
  },
  {
    label: 'Office',
    value: 'Clear Lake City, TX 77062',
    href: 'https://maps.google.com/?q=Clear+Lake+City+TX',
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 2C7.7 2 5 4.7 5 8c0 5.5 6 10 6 10s6-4.5 6-10c0-3.3-2.7-6-6-6Z"/>
        <circle cx="11" cy="8" r="2"/>
      </svg>
    ),
  },
]

const quickTopics = ['Buying a Home', 'Selling a Home', 'Home Valuation', 'Relocation', 'Renting', 'Just Exploring']

type FormState = { name: string; email: string; phone: string; message: string; interest: string }
type Status = 'idle' | 'loading' | 'success' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', phone: '', message: '', interest: 'Buying a Home' })
  const [activeTopic, setActiveTopic] = useState('Buying a Home')
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    const webhookUrl = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL

    if (!webhookUrl) {
      setStatus('error')
      setErrorMsg('Webhook not configured. Please contact us directly by phone or email.')
      return
    }

    try {
      const res = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          message: form.message || null,
          interest: form.interest,
          source: 'website-contact-form',
          submittedAt: new Date().toISOString(),
        }),
      })

      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMsg('Something went wrong. Please try again or call us directly.')
    }
  }

  return (
    <main>
      <Navbar />

      <section className="flex flex-col md:flex-row" style={{ minHeight: 'calc(100vh - 64px)' }}>

        {/* LEFT — dark teal, contact details */}
        <div className="md:w-5/12 bg-[#1C3535] flex flex-col justify-between py-16 px-10 md:px-14 relative overflow-hidden">
          <div className="absolute top-0 right-0 font-serif text-[22rem] font-bold text-white/[0.03] leading-none pointer-events-none select-none -mt-8 -mr-8">1</div>

          <div className="relative">
            <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-6">Contact Us</p>
            <h1 className="font-serif text-white text-[3.5rem] md:text-[4.5rem] font-bold leading-[0.95] mb-6">
              Let&apos;s<br />talk.
            </h1>
            <p className="text-white/60 text-[16px] leading-relaxed mb-12 max-w-xs">
              No pressure, no obligation. Just honest guidance from neighbors who have been doing this since 2004.
            </p>

            <div className="space-y-6">
              {contactMethods.map((m) => (
                <a key={m.label} href={m.href} className="flex items-center gap-4 group">
                  <div className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:border-[#C4622D] group-hover:text-[#C4622D] transition-colors shrink-0">
                    {m.icon}
                  </div>
                  <div>
                    <p className="text-white/35 text-[10px] uppercase tracking-[0.18em] font-semibold">{m.label}</p>
                    <p className="text-white text-[14px] font-medium group-hover:text-[#C4622D] transition-colors">{m.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative border-t border-white/10 pt-8 mt-12">
            <p className="text-white/35 text-[10px] uppercase tracking-wider font-semibold mb-2">Office Hours</p>
            <p className="text-white/55 text-[13px] leading-relaxed">
              Mon–Fri: 8am – 6pm &nbsp;·&nbsp; Sat: 9am – 4pm &nbsp;·&nbsp; Sun: By appointment
            </p>
            <div className="mt-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3a7040]" />
              <span className="text-white/40 text-[12px]">Usually respond within a few hours</span>
            </div>
          </div>
        </div>

        {/* RIGHT — cream, form */}
        <div className="md:w-7/12 bg-[#F2EDE3] flex items-center justify-center py-16 px-8 md:px-14">
          {status === 'success' ? (
            <div className="w-full max-w-lg text-center">
              <div className="w-20 h-20 rounded-full border-2 border-[#C4622D] flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#C4622D]" fill="none" viewBox="0 0 32 32" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 16l5 5 11-11" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold mb-3">Message received.</h2>
              <p className="text-[#6a6a6a] text-[15px] leading-relaxed max-w-sm mx-auto">
                Thanks for reaching out. We&apos;ll get back to you within a few hours — usually much sooner.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold mb-1">Send us a message</h2>
              <p className="text-[#9a9a9a] text-[13px] mb-8">We&apos;ll respond within one business day.</p>

              {/* Quick topic toggle */}
              <div className="mb-7">
                <p className="text-[#4a4a4a] text-[11px] font-semibold uppercase tracking-wider mb-3">I&apos;m interested in</p>
                <div className="flex flex-wrap gap-2">
                  {quickTopics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => { setActiveTopic(t); setForm({ ...form, interest: t }) }}
                      className={`px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-wider transition-colors border ${activeTopic === t ? 'bg-[#1C3535] text-white border-[#1C3535]' : 'bg-white text-[#4a4a4a] border-[#ddd8d0] hover:border-[#1C3535]'}`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[#4a4a4a] text-[11px] font-semibold uppercase tracking-wider mb-1.5">Name *</label>
                  <input
                    type="text" required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full border border-[#ddd8d0] bg-white px-3.5 py-2.5 text-[14px] text-[#2c2c2c] placeholder:text-[#c0b8ae] focus:outline-none focus:border-[#C4622D] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[#4a4a4a] text-[11px] font-semibold uppercase tracking-wider mb-1.5">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={e => setForm({ ...form, phone: e.target.value })}
                    placeholder="(optional)"
                    className="w-full border border-[#ddd8d0] bg-white px-3.5 py-2.5 text-[14px] text-[#2c2c2c] placeholder:text-[#c0b8ae] focus:outline-none focus:border-[#C4622D] transition-colors"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[#4a4a4a] text-[11px] font-semibold uppercase tracking-wider mb-1.5">Email *</label>
                <input
                  type="email" required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full border border-[#ddd8d0] bg-white px-3.5 py-2.5 text-[14px] text-[#2c2c2c] placeholder:text-[#c0b8ae] focus:outline-none focus:border-[#C4622D] transition-colors"
                />
              </div>

              <div className="mb-6">
                <label className="block text-[#4a4a4a] text-[11px] font-semibold uppercase tracking-wider mb-1.5">Message</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us what you&apos;re looking for..."
                  className="w-full border border-[#ddd8d0] bg-white px-3.5 py-2.5 text-[14px] text-[#2c2c2c] placeholder:text-[#c0b8ae] focus:outline-none focus:border-[#C4622D] transition-colors resize-none"
                />
              </div>

              {status === 'error' && (
                <p className="text-red-600 text-[13px] mb-4">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#C4622D] text-white font-semibold py-4 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Sending…' : 'Send Message →'}
              </button>

              <p className="text-[#9a9a9a] text-[11px] text-center mt-4">
                By submitting you agree to our{' '}
                <a href="/privacy-policy" className="underline hover:text-[#C4622D] transition-colors">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
