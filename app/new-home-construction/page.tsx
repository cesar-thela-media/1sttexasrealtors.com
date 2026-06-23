import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'New Home Construction | 1st Texas Realtors',
  description: 'Buying new construction in Clear Lake? We represent YOU — not the builder. Know which builders to trust, which upgrades to skip, and what to negotiate.',
}

const advantages = [
  { icon: '⚖️', title: "We Represent You, Not the Builder", body: "The on-site sales agent works for the builder. We work for you. That means we read every contract line, push back on inflated upgrades, and make sure you're not leaving money on the table." },
  { icon: '🏗️', title: "We Know Which Builders to Trust", body: "After 20 years, we've seen how each builder in this market performs — quality of materials, responsiveness on warranty claims, on-time delivery. We'll steer you toward the ones who follow through." },
  { icon: '💬', title: "Negotiation Doesn't Stop at Price", body: "Builders often won't move on price but will include free upgrades, cover closing costs, or upgrade your lot. We know what to ask for and when to ask for it." },
  { icon: '🔍', title: "Inspection at Every Phase", body: "We recommend a third-party inspector at foundation, framing, and final walkthrough — not just at closing. We'll coordinate this and make sure punch list items get fixed before you close." },
]

const builders = [
  'Perry Homes', 'David Weekley', 'Meritage Homes', 'Taylor Morrison',
  'Chesmar Homes', 'Princeton Classic Homes', 'K. Hovnanian', 'Beazer Homes',
]

const warnings = [
  "Once you register at a model home without an agent, you may lose your right to representation.",
  "Builder contracts are written to protect the builder — not you. Every clause needs review.",
  "Upgrade packages are often marked up 40–60% above what the same item costs after closing.",
  "Builder financing incentives often come with strings that cost you more in the long run.",
]

export default function NewHomeConstructionPage() {
  return (
    <main>
      <Navbar />

      {/* ALERT-STYLE HERO — urgent dark warning feel */}
      <section className="bg-[#1C2B1C] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #C4622D 0, #C4622D 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#C4622D] px-4 py-2 mb-6">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
            </svg>
            <span className="text-white text-[11px] font-bold uppercase tracking-[0.2em]">Read This Before You Visit a Model Home</span>
          </div>
          <h1 className="font-serif text-white text-[3rem] md:text-[5rem] font-bold leading-[0.95] mb-6 max-w-3xl">
            New doesn&apos;t mean<br />no surprises.
          </h1>
          <p className="text-white/70 text-[17px] leading-relaxed max-w-xl mb-10">
            Builder contracts are written to protect the builder. The salesperson on site is the builder&apos;s employee.
            You need an advocate in your corner — and it doesn&apos;t cost you extra.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-8 py-4 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Talk to Us Before You Go
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      {/* WARNING CHECKLIST STRIP */}
      <section className="bg-[#FFF8F5] border-y border-[#f0d0c0] py-10">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.2em] mb-5">What Most New Construction Buyers Don&apos;t Know Until It&apos;s Too Late</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {warnings.map((w, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="shrink-0 mt-0.5 w-5 h-5 bg-[#C4622D] flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12"><path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="text-[#4a4a4a] text-[14px] leading-relaxed">{w}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + INTRO */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/2 relative h-80 overflow-hidden shadow-md">
            <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="New home construction" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-[#1C3535] py-3 px-5">
              <p className="text-white text-[12px] font-semibold">We&apos;ve helped dozens of buyers through new construction — we know every builder in this market.</p>
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">20 Years of Local Knowledge</p>
            <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold leading-[1.15] mb-5">
              We know the builders,<br />the traps, and the leverage.
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">
              We&apos;ve been navigating new construction deals in the Clear Lake area for over 20 years.
              We know which builders deliver quality, which ones have the best warranty programs, and
              which upgrade packages are pure profit margin.
            </p>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed">
              Most buyers think buying new means buying simple. Then they get to closing and realize they
              over-paid on upgrades, missed better lot options, or signed a contract clause that cost them.
              We prevent all of that.
            </p>
          </div>
        </div>
      </section>

      {/* ADVANTAGES — icon grid */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">How We Help</p>
            <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold">What we do for new construction buyers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((a, i) => (
              <div key={i} className="bg-white p-7 flex gap-5 items-start">
                <div className="shrink-0 text-3xl">{a.icon}</div>
                <div>
                  <h3 className="font-serif text-[#1C3535] text-base font-semibold mb-2">{a.title}</h3>
                  <p className="text-[#4a4a4a] text-[13px] leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BUILDERS WE KNOW — horizontal name strip */}
      <section className="bg-[#1C3535] py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.2em] mb-1">Builders Active in Our Market</p>
              <h2 className="font-serif text-white text-[1.6rem] font-bold">We have firsthand experience with all of them.</h2>
            </div>
            <Link href="/contact" className="shrink-0 inline-flex items-center text-white border border-white/30 px-5 py-2.5 text-[10px] font-bold uppercase tracking-[0.15em] gap-2 hover:border-white hover:bg-white/10 transition-colors">
              Ask About a Builder
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[1px] bg-white/10">
            {builders.map((b) => (
              <div key={b} className="bg-[#1C3535] px-5 py-4 text-center">
                <p className="font-serif text-white/90 text-[14px] font-semibold">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F2EDE3] py-16 border-t border-[#cfc6b8]">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold mb-2">About to visit a model home?</h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed max-w-md">
              Call us first. Register with a builder without an agent and you could lose the right to representation permanently.
            </p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center bg-[#C4622D] text-white font-semibold px-8 py-4 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Call Us First
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
