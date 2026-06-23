'use client'

import Navbar from '@/components/shared/Navbar'
import PageHero from '@/components/shared/PageHero'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const steps = [
  { num: '01', title: 'Tell Us What You Need', body: "We start with a real conversation — budget, timeline, must-haves, deal-breakers. No forms, no algorithms." },
  { num: '02', title: 'We Search the Full Market', body: "MLS, off-market, and coming-soon properties most buyers never see. We filter to only what's worth your time." },
  { num: '03', title: 'Tour With Local Eyes', body: "Flood history, school zones, weekend noise, commute reality — we cover what online listings can't tell you." },
  { num: '04', title: 'Negotiate Hard for You', body: "We know what homes are really worth here. We'll write a strong offer and fight for every dollar." },
  { num: '05', title: 'Close With Confidence', body: "We coordinate inspections, title, lender, survey. After closing, we're still your neighbors." },
]

const faqs = [
  { q: "Do I need pre-approval before we start?", a: "Not required, but we recommend it. A pre-approval shows sellers you're serious and helps us target the right price range. We can refer you to local lenders we trust." },
  { q: "How long does it take from search to close?", a: "Typically 30–90 days to find the right home, plus 30–45 days to close once you're under contract. We'll build your timeline around your actual needs." },
  { q: "Does it cost me anything to use a buyer's agent?", a: "In most cases, the seller pays our commission — so our buyer representation costs you nothing out of pocket. We'll always be transparent about compensation." },
  { q: "What areas do you specialize in?", a: "Clear Lake, Seabrook, El Lago, Nassau Bay, Taylor Lake Village, Kemah, Webster, League City, Friendswood, and surrounding communities in southeast Houston." },
  { q: "Can you help with new construction too?", a: "Absolutely — and you'll want us there. The builder's agent represents the builder. We represent you. It doesn't cost extra and can save you thousands." },
]

export default function HomeBuyersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <main>
      <Navbar />
      <PageHero
        title="Buying a Home in Clear Lake?"
        subtitle="We'll find you the right home in the right neighborhood — with local knowledge you simply can't Google."
        imageUrl="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1600&q=85"
        imageAlt="Beautiful Texas home"
        breadcrumb="Home Buyers"
      />

      {/* ICON BENEFIT ROW */}
      <section className="bg-white py-12 border-b border-[#f0ece4]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: '🏡', label: 'Off-Market Access', desc: 'Listings before they hit Zillow' },
            { icon: '📍', label: 'True Local Expert', desc: '20+ years in this market' },
            { icon: '💬', label: 'Direct Access', desc: 'No assistants, no hand-offs' },
            { icon: '💰', label: 'Free to Buyers', desc: 'Seller covers our commission' },
          ].map(b => (
            <div key={b.label} className="text-center py-4">
              <div className="text-3xl mb-2">{b.icon}</div>
              <p className="text-[#1C3535] text-[13px] font-semibold mb-0.5">{b.label}</p>
              <p className="text-[#9a9a9a] text-[11px]">{b.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO — image left */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/2 relative h-80 overflow-hidden shadow-md">
            <Image src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80" alt="Beautiful home interior" fill className="object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Why It Matters</p>
            <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold leading-[1.15] mb-5">
              Local knowledge<br />you can&apos;t Google.
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">
              Online listings show you what&apos;s available. We show you what&apos;s worth buying. After 20+ years
              in this market, we know which streets get noisy on weekends, which HOAs are well-managed,
              and which homes are priced to move.
            </p>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed">
              We work with a limited number of buyers at a time so every client gets our full attention —
              not a hand-off to an assistant after the first showing.
            </p>
          </div>
        </div>
      </section>

      {/* VISUAL TIMELINE — circles connected by vertical line */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">How It Works</p>
          <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold mb-12">Our buying process.</h2>
          <div className="relative">
            <div className="absolute left-5 top-5 bottom-5 w-[2px] bg-[#e8e0d4] hidden md:block" />
            <div className="space-y-8">
              {steps.map((s, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-[#C4622D] flex items-center justify-center z-10">
                    <span className="text-white text-[11px] font-bold">{s.num}</span>
                  </div>
                  <div className="flex-1 pt-1.5 pb-4">
                    <h3 className="font-serif text-[#1C3535] text-lg font-semibold mb-1.5">{s.title}</h3>
                    <p className="text-[#4a4a4a] text-[14px] leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDION FAQ */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Common Questions</p>
          <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold mb-10">Buyer FAQ</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                >
                  <span className="font-serif text-[#1C3535] text-[15px] font-semibold pr-4">{faq.q}</span>
                  <svg className={`w-4 h-4 text-[#C4622D] shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
                    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 border-t border-[#f0ece4]">
                    <p className="text-[#4a4a4a] text-[14px] leading-relaxed pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLUE CTA */}
      <section className="bg-[#C8DDE9] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold mb-4">Ready to find your home?</h2>
          <p className="text-[#2a3a3a] text-[15px] mb-8 max-w-md mx-auto">No commitment, no paperwork — just your questions and our honest answers.</p>
          <Link href="/contact" className="inline-flex items-center bg-[#1C3535] text-white font-semibold px-8 py-3.5 rounded hover:bg-[#142828] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Contact a Realtor
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
