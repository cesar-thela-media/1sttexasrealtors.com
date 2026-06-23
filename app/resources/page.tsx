import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Real Estate Resources | 1st Texas Realtors',
  description: 'Buyer guides, seller tips, community profiles, and more — everything you need to make a smart real estate move in the Clear Lake, TX area.',
}

const featured = [
  {
    category: 'Buying',
    color: 'bg-[#C8DDE9]',
    accent: '#1C3535',
    articles: [
      { title: 'Home Buyers Guide', href: '/home-buyers', desc: 'Our step-by-step process for first-time and repeat buyers in the Clear Lake area.' },
      { title: 'New Home Construction', href: '/new-home-construction', desc: "What every buyer needs to know before visiting a model home — and why you need your own agent." },
      { title: 'Relocation Services', href: '/relocation-service', desc: 'Moving from out of state? We specialize in helping buyers who can\'t always visit before buying.' },
    ],
  },
  {
    category: 'Selling',
    color: 'bg-[#F2EDE3]',
    accent: '#C4622D',
    articles: [
      { title: 'Seller Services', href: '/seller-services', desc: 'Our full listing process — from pricing and staging through closing and beyond.' },
      { title: 'Home Staging', href: '/home-staging', desc: "Sandra's expert staging consultation, included with every listing. See what a design background really means." },
    ],
  },
  {
    category: 'Communities',
    color: 'bg-[#1C3535]',
    accent: '#C4622D',
    dark: true,
    articles: [
      { title: 'All Communities', href: '/communities', desc: 'Compare 12 neighborhoods across the Clear Lake peninsula — price, schools, vibe.' },
      { title: 'Realtors in Clear Lake City', href: '/realtors-in/clear-lake-city', desc: 'The most sought-after community in the area — here\'s what makes it special.' },
      { title: 'Realtors in Seabrook', href: '/realtors-in/seabrook', desc: 'Waterfront dining, sailboat culture, and downtown charm in one small city.' },
    ],
  },
  {
    category: 'Renting',
    color: 'bg-white',
    accent: '#1C3535',
    articles: [
      { title: 'Homes for Rent', href: '/homes-for-rent', desc: 'Browse current rental listings across Clear Lake, Seabrook, Kemah, and 18 other communities.' },
      { title: 'Commercial Property', href: '/commercial-property-realtors', desc: 'Business space, investment property, and development land in southeast Houston.' },
    ],
  },
]

export default function ResourcesPage() {
  return (
    <main>
      <Navbar />

      {/* MAGAZINE COVER HEADER — cream with bold typographic layout */}
      <section className="bg-[#F2EDE3] border-b-4 border-[#1C3535]">
        {/* Masthead strip */}
        <div className="bg-[#1C3535] py-2 px-6">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-semibold">1st Texas Realtors · Resource Guide</p>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.25em] font-semibold">Clear Lake, TX · Vol. 20</p>
          </div>
        </div>
        {/* Main cover layout */}
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-10">
          <div className="flex flex-col md:flex-row items-start gap-10">
            {/* Big headline */}
            <div className="md:w-3/5 border-r-0 md:border-r border-[#cfc6b8] md:pr-10">
              <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">Everything You Need</p>
              <h1 className="font-serif text-[#1C3535] text-[3.5rem] md:text-[5.5rem] font-bold leading-[0.9] mb-6">
                Make a<br />smart<br />move.
              </h1>
              <p className="text-[#4a4a4a] text-[15px] leading-relaxed max-w-sm">
                Guides, tools, and local insight from Realtors who have been in this market for over 20 years.
              </p>
            </div>
            {/* TOC sidebar */}
            <div className="md:w-2/5">
              <p className="text-[#9a9a9a] text-[10px] uppercase tracking-[0.2em] font-semibold mb-4 border-b border-[#cfc6b8] pb-2">In This Guide</p>
              <ul className="space-y-3">
                {['Home Buyers Guide','Seller Services','Home Staging','Communities','New Construction','Relocation','Homes for Rent','Commercial Property'].map((item, i) => (
                  <li key={item} className="flex items-center gap-3 text-[13px]">
                    <span className="font-serif text-[#C4622D] text-[11px] font-bold w-5 shrink-0">{String(i+1).padStart(2,'0')}</span>
                    <span className="text-[#1C3535] font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MAGAZINE GRID — alternating section colors */}
      {featured.map((section) => (
        <section key={section.category} className={`${section.color} py-16`}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[2px]" style={{ background: section.accent }} />
              <p className="text-[11px] font-bold uppercase tracking-[0.22em]" style={{ color: section.accent }}>
                {section.category}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {section.articles.map((a) => (
                <Link
                  key={a.href}
                  href={a.href}
                  className={`group p-6 border transition-all hover:shadow-md ${section.dark ? 'border-white/15 hover:border-white/30' : 'border-[#e8e0d4] bg-white hover:border-[#C4622D]'}`}
                >
                  <h3 className={`font-serif text-lg font-semibold mb-2 leading-snug group-hover:text-[#C4622D] transition-colors ${section.dark ? 'text-white' : 'text-[#1C3535]'}`}>
                    {a.title}
                  </h3>
                  <p className={`text-[13px] leading-relaxed mb-4 ${section.dark ? 'text-white/60' : 'text-[#6a6a6a]'}`}>{a.desc}</p>
                  <div className="flex items-center gap-1 text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.18em]">
                    Read More
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 16 16">
                      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CONTACT STRIP */}
      <section className="bg-[#F2EDE3] py-12 border-t border-[#cfc6b8]">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="font-serif text-[#1C3535] text-xl font-semibold">Still have questions? We&apos;re a phone call away.</p>
          <Link href="/contact" className="shrink-0 inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 rounded hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Contact Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
