import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us | 1st Texas Realtors – Mark & Sandra',
  description: 'Meet Mark and Sandra, Clear Lake area realtors with 20+ years of experience. Local knowledge, honest advice, and a track record you can verify.',
}

const milestones = [
  { year: '2004', label: 'Founded', desc: 'Mark and Sandra closed their first deal in Nassau Bay and never looked back.' },
  { year: '2007', label: 'Top 10%', desc: 'Ranked in the top 10% of Houston-area Realtors within three years of launching.' },
  { year: '2010', label: 'Top 3%', desc: 'Achieved Top 3% Texas Realtors ranking — a milestone they have held every year since.' },
  { year: '2015', label: '250 Deals', desc: 'Crossed 250 closed transactions, all in the Clear Lake peninsula.' },
  { year: '2020', label: 'Virtual First', desc: 'Helped 40+ families relocate sight-unseen during COVID, pioneering live-video tours.' },
  { year: '2024', label: '400+ Deals', desc: 'Over 400 transactions and counting — all within the communities they call home.' },
]

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* SPLIT HERO — cream left / image right, no dark overlay */}
      <section className="bg-[#F2EDE3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[520px]">
          <div className="md:w-1/2 flex flex-col justify-center px-10 md:px-16 py-16 md:py-24">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-4">About 1st Texas Realtors</p>
            <h1 className="font-serif text-[#1C3535] text-[3rem] md:text-[4rem] font-bold leading-[1.05] mb-6">
              Your neighbors.<br />Since 2004.
            </h1>
            <p className="text-[#4a4a4a] text-[16px] leading-relaxed mb-8 max-w-md">
              Mark and Sandra Hendricks grew up on the Clear Lake peninsula, raised their family here,
              and chose to build their careers here. When you work with them, you&apos;re working with
              people who genuinely care about this community.
            </p>
            <Link
              href="/contact"
              className="inline-flex self-start items-center bg-[#C4622D] text-white font-semibold px-7 py-3 rounded hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2"
            >
              Meet the Team
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className="md:w-1/2 relative min-h-[340px] md:min-h-0">
            <Image
              src="https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=900&q=85"
              alt="Mark and Sandra at Clear Lake"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      {/* STAT STRIP */}
      <section className="bg-[#1C3535] py-8">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 divide-x divide-white/20">
          {[
            { n: '20+', l: 'Years in business' },
            { n: 'Top 3%', l: 'Texas Realtors since 2010' },
            { n: '400+', l: 'Closed transactions' },
          ].map((s) => (
            <div key={s.n} className="flex flex-col items-center text-center px-6 py-3">
              <span className="font-serif text-white text-[2.4rem] font-bold leading-none">{s.n}</span>
              <span className="text-white/60 text-xs mt-1 tracking-wide">{s.l}</span>
            </div>
          ))}
        </div>
      </section>

      {/* OUR STORY — white, text-heavy with side image */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-3/5">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Our Story</p>
            <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold leading-[1.15] mb-6">
              We&apos;ve been here<br />since the beginning.
            </h2>
            <div className="space-y-4 text-[#4a4a4a] text-[15px] leading-relaxed">
              <p>
                Mark and Sandra started 1st Texas Realtors in 2004 with one simple idea: be the Realtors they&apos;d want
                if they were buying or selling. No high-pressure tactics, no hand-offs to assistants, no disappearing
                after the contract.
              </p>
              <p>
                They grew up on the Clear Lake peninsula, raised their family here, and have watched the community
                grow for decades. That lived experience shapes every recommendation they make — from which streets
                have the best schools to which neighborhoods flood.
              </p>
              <p>
                Today, more than half of their business comes from past clients and personal referrals.
                That&apos;s the metric they&apos;re most proud of.
              </p>
            </div>
          </div>
          <div className="md:w-2/5 shrink-0">
            {/* Polaroid */}
            <div className="relative inline-block">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 z-10 rotate-[-1deg]" style={{ background: 'rgba(210,195,160,0.65)' }} />
              <div className="bg-white p-3 pb-6 shadow-lg rotate-[-1.5deg] border border-gray-100">
                <div className="relative w-56 h-64 overflow-hidden">
                  <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&q=80" alt="Family home" fill className="object-cover" />
                </div>
                <p className="text-center text-[#8a7060] text-[11px] mt-3 font-serif italic">Clear Lake, 2004</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE TIMELINE — horizontal scroll */}
      <section className="bg-[#F2EDE3] py-20 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Our Journey</p>
          <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold mb-12">Twenty years of milestones.</h2>
          <div className="relative">
            {/* connecting line */}
            <div className="absolute top-5 left-0 right-0 h-[2px] bg-[#cfc6b8] hidden md:block" />
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 md:gap-0 relative z-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex flex-col items-center md:px-2 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#C4622D] flex items-center justify-center mb-3 shrink-0">
                    <span className="text-white text-[10px] font-bold">{m.year}</span>
                  </div>
                  <p className="font-serif text-[#1C3535] text-[13px] font-semibold mb-1">{m.label}</p>
                  <p className="text-[#6a6a6a] text-[11px] leading-snug">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — dark teal, big */}
      <section className="bg-[#1C3535] py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="font-serif text-[#C4622D] text-[7rem] leading-none mb-2 select-none">&ldquo;</div>
          <blockquote className="font-serif text-white text-[1.6rem] md:text-[2rem] font-medium leading-[1.3] mb-6 -mt-6">
            We didn&apos;t become Realtors to sell houses.<br />We became Realtors to help neighbors.
          </blockquote>
          <p className="text-white/60 text-sm uppercase tracking-[0.2em]">— Mark &amp; Sandra Hendricks</p>
        </div>
      </section>

      {/* VALUES — 4-column icon grid */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">What We Stand For</p>
            <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold">Our values, in plain language.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: '📍', title: 'Deeply Local', body: "We live here. We coach here. We shop here. This isn't a market we cover — it's our backyard." },
              { icon: '🤝', title: 'No Pressure', body: 'We will never push you toward a deal that isn\'t right for you. Our reputation depends on your outcome.' },
              { icon: '⭐', title: 'Proven Results', body: 'Top 3% of Texas Realtors every year since 2010. Not by volume — by repeat clients and referrals.' },
              { icon: '❤️', title: 'Family First', body: 'We run our business like we run our home — with care, patience, and genuine heart.' },
            ].map((v) => (
              <div key={v.title} className="border-t-2 border-[#C4622D] pt-6">
                <div className="text-3xl mb-3">{v.icon}</div>
                <h3 className="font-serif text-[#1C3535] text-lg font-semibold mb-2">{v.title}</h3>
                <p className="text-[#6a6a6a] text-[13px] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
