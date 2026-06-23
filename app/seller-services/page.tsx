import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Seller Services | 1st Texas Realtors',
  description: 'Sell your home in Clear Lake, Seabrook, or League City with expert pricing, professional staging, and an agent who puts $$ in your pocket at closing.',
}

const steps = [
  { num: '01', title: 'Free Home Consultation', body: "We visit your home, walk through every room, and give you an honest assessment — what it's worth, what it needs, and a realistic timeline.", img: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=700&q=80' },
  { num: '02', title: 'Prepare & Stage', body: "Sandra's interior design background means this goes beyond decluttering. We prioritize improvements that actually move the needle on price.", img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=700&q=80' },
  { num: '03', title: 'Professional Marketing', body: "Drone shots, virtual tours, targeted social campaigns, email to our buyer network, and full MLS exposure from day one.", img: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=700&q=80' },
  { num: '04', title: 'Negotiate Hard for You', body: "We review every offer, advise on terms and contingencies, and push back on anything that isn't in your best interest.", img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80' },
  { num: '05', title: 'Close Smoothly', body: "Inspections, appraisal, title, survey — we coordinate everything. Our job isn't done until you have the check in hand.", img: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=700&q=80' },
]

export default function SellerServicesPage() {
  return (
    <main>
      <Navbar />

      {/* DARK FULL-WIDTH HERO — no image, text only */}
      <section className="bg-[#1C3535] py-24 md:py-32">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-5">Seller Services</p>
          <h1 className="font-serif text-white text-[3.2rem] md:text-[5rem] font-bold leading-[1.0] mb-6 max-w-3xl">
            Sell your home for what it&apos;s worth.
          </h1>
          <p className="text-white/70 text-[17px] leading-relaxed max-w-xl mb-10">
            Smart pricing, professional marketing, and skilled negotiation — from neighbors who know this market cold.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-8 py-4 rounded hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Get a Free Home Valuation
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      {/* HORIZONTAL STATS — white bg */}
      <section className="bg-white py-10 border-b border-[#f0ece4]">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: '98.7%', l: 'Average list-to-sale price ratio' },
            { n: '18 days', l: 'Average days on market' },
            { n: '400+', l: 'Homes sold since 2004' },
            { n: 'Top 3%', l: 'Texas Realtors every year since 2010' },
          ].map(s => (
            <div key={s.n} className="text-center">
              <p className="font-serif text-[#C4622D] text-[2.4rem] font-bold leading-none mb-1">{s.n}</p>
              <p className="text-[#6a6a6a] text-[12px] leading-snug">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ALTERNATING STEPS — image + text in rows */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">How We Sell Your Home</p>
          <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold mb-14">Our proven 5-step process.</h2>
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}>
                <div className="md:w-2/5 relative h-56 w-full overflow-hidden shadow-md shrink-0">
                  <Image src={s.img} alt={s.title} fill className="object-cover" />
                </div>
                <div className="md:w-3/5">
                  <span className="font-serif text-[#C4622D] text-[3rem] font-bold leading-none">{s.num}</span>
                  <h3 className="font-serif text-[#1C3535] text-[1.4rem] font-semibold mt-1 mb-3">{s.title}</h3>
                  <p className="text-[#4a4a4a] text-[15px] leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED — rust-accent callout box */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="border border-[#C4622D] p-10 flex flex-col md:flex-row items-start gap-8">
            <div className="shrink-0">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="#C4622D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="24" cy="24" r="20"/>
                <path d="M16 24l6 6 10-12"/>
              </svg>
            </div>
            <div>
              <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Included With Every Listing</p>
              <h3 className="font-serif text-[#1C3535] text-2xl font-bold mb-3">Professional staging, photos, and marketing — at no extra charge.</h3>
              <p className="text-[#4a4a4a] text-[14px] leading-relaxed">
                When you list with us, Sandra&apos;s in-home staging consultation, professional photography,
                drone shots, and virtual tour are all included. No à la carte fees, no surprise line items.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DARK CTA */}
      <section className="bg-[#1C3535] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-white text-[2rem] font-bold mb-4">What&apos;s your home worth?</h2>
          <p className="text-white/70 text-[15px] mb-8 max-w-md mx-auto">Free, no-obligation market analysis from agents who actually know your neighborhood.</p>
          <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 rounded hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Request Free Analysis
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
