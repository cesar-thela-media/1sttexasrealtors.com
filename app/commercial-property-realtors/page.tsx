import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Commercial Property Realtors | 1st Texas Realtors',
  description: 'Buy, sell, or lease commercial property in southeast Houston. Retail, office, industrial, and development land along I-45, Bay Area Blvd, and FM 518.',
}

const propertyTypes = [
  { label: 'Retail & Restaurant', icon: '🏪', desc: 'Strip centers, end caps, standalone retail along I-45, Bay Area Blvd, and FM 518 corridors.' },
  { label: 'Office Buildings', icon: '🏢', desc: 'Class A and B office space near JSC, the medical district, and the Nasa Road 1 corridor.' },
  { label: 'Industrial & Warehouse', icon: '🏭', desc: 'Flex space, distribution, and light industrial near major freight corridors in the southeast market.' },
  { label: 'Mixed-Use & Land', icon: '🌐', desc: 'Development-ready parcels and mixed-use properties across the Clear Lake / League City growth corridor.' },
]

const whyUs = [
  {
    title: 'Local Market Intelligence',
    body: "We know which corridors are growing, which landlords are flexible on terms, and which properties have hidden issues before they show up in due diligence. Twenty years of transactions in this market.",
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80',
  },
  {
    title: 'Investment Property Analysis',
    body: "We run the numbers with you — cap rates, cash-on-cash return, vacancy assumptions, and exit strategies. We don't just help you find the property; we help you evaluate whether it makes sense.",
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&q=80',
  },
  {
    title: 'Lease & Purchase Negotiation',
    body: "Whether you're buying, selling, or leasing commercial space, lease terms and purchase contracts in commercial real estate are far more complex than residential. We negotiate both.",
    img: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=700&q=80',
  },
]

export default function CommercialPropertyPage() {
  return (
    <main>
      <Navbar />

      {/* FULL-WIDTH DARK HERO with mega stats */}
      <section className="bg-[#0F1F1F] py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=70" alt="Commercial building" fill className="object-cover object-center opacity-20" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-6">Commercial Real Estate</p>
          <h1 className="font-serif text-white text-[3rem] md:text-[5.5rem] font-bold leading-[0.9] mb-12 max-w-3xl">
            Southeast Houston&apos;s<br />commercial market<br />is moving fast.
          </h1>
          {/* Mega stats */}
          <div className="grid grid-cols-3 gap-0 max-w-2xl border-t border-white/15 pt-8">
            {[
              { n: '$14B+', l: 'SE Houston commercial market' },
              { n: '20+', l: 'Years of commercial transactions' },
              { n: 'Top 3%', l: 'Texas Realtors since 2010' },
            ].map((s) => (
              <div key={s.n} className="pr-8 mr-8 border-r border-white/15 last:border-0 last:mr-0 last:pr-0">
                <p className="font-serif text-white text-[3rem] font-bold leading-none mb-1">{s.n}</p>
                <p className="text-white/50 text-[11px] uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-8 py-4 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Discuss Your Property Needs
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* PROPERTY TYPES — 4-column icon cards */}
      <section className="bg-[#F2EDE3] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">What We Handle</p>
            <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold">Property types we specialize in</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {propertyTypes.map((t) => (
              <div key={t.label} className="bg-white p-6 flex flex-col gap-4">
                <span className="text-4xl">{t.icon}</span>
                <div className="w-6 h-[2px] bg-[#C4622D]" />
                <h3 className="font-serif text-[#1C3535] text-base font-semibold leading-snug">{t.label}</h3>
                <p className="text-[#6a6a6a] text-[12px] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US — alternating image + text blocks */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Our Approach</p>
            <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold">Why clients trust us with commercial deals</h2>
          </div>
          <div className="space-y-12">
            {whyUs.map((w, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-10 items-center`}>
                <div className="md:w-2/5 relative h-56 w-full overflow-hidden shadow-sm shrink-0">
                  <Image src={w.img} alt={w.title} fill className="object-cover" />
                </div>
                <div className="md:w-3/5">
                  <span className="font-serif text-[#C4622D] text-[3rem] font-bold leading-none">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-serif text-[#1C3535] text-[1.4rem] font-semibold mt-1 mb-3">{w.title}</h3>
                  <p className="text-[#4a4a4a] text-[15px] leading-relaxed">{w.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORRIDOR HIGHLIGHTS */}
      <section className="bg-[#1C3535] py-14">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.2em] mb-5">Key Growth Corridors</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'I-45 Corridor', desc: 'From Webster to Texas City — the spine of southeast Houston commercial development.' },
              { name: 'Bay Area Blvd', desc: 'Dense retail and office development serving the NASA and Clear Lake City employment base.' },
              { name: 'FM 518 / League City', desc: 'Fastest-growing commercial corridor in the region — new construction, land opportunities.' },
            ].map((c) => (
              <div key={c.name} className="border-t-2 border-[#C4622D] pt-4">
                <h3 className="font-serif text-white text-base font-semibold mb-2">{c.name}</h3>
                <p className="text-white/55 text-[13px] leading-relaxed">{c.desc}</p>
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
