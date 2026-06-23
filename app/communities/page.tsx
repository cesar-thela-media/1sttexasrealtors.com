import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Communities | 1st Texas Realtors – Clear Lake Area',
  description: 'Compare 12 communities across the Clear Lake peninsula — prices, schools, lifestyle, and what makes each neighborhood unique. Find where you belong.',
}

const communities = [
  { name: 'Clear Lake City',      slug: 'clear-lake-city',      tag: 'Most Popular',      price: '$280K–$650K', school: 'CCISD', vibe: 'Established · NASA proximity · Top schools' },
  { name: 'Seabrook',             slug: 'seabrook',             tag: 'Waterfront',         price: '$250K–$1.2M', school: 'CCISD', vibe: 'Waterfront dining · Small town feel' },
  { name: 'Kemah',                slug: 'kemah',                tag: 'Bay Views',          price: '$200K–$1.5M', school: 'CCISD', vibe: 'Boardwalk · Boating · Investment potential' },
  { name: 'El Lago',              slug: 'el-lago',              tag: 'Exclusive',          price: '$300K–$600K', school: 'CCISD', vibe: 'Quiet streets · NASA heritage · Low density' },
  { name: 'Nassau Bay',           slug: 'nassau-bay',           tag: 'Iconic',             price: '$280K–$700K', school: 'CCISD', vibe: 'Astronaut neighborhood · Waterfront access' },
  { name: 'Taylor Lake Village',  slug: 'taylor-lake-village',  tag: 'Best Value',         price: '$250K–$500K', school: 'CCISD', vibe: 'Lake access · Friendly · Underrated' },
  { name: 'Webster',              slug: 'webster',              tag: 'Commuter Friendly',  price: '$200K–$450K', school: 'CCISD', vibe: 'I-45 access · Affordable · Central location' },
  { name: 'League City',          slug: 'league-city',          tag: 'Fastest Growing',    price: '$280K–$800K', school: 'CCISD/LCISD', vibe: 'Master-planned · New construction · Top schools' },
  { name: 'Friendswood',          slug: 'friendswood',          tag: 'Family Favorite',    price: '$300K–$750K', school: 'FISD', vibe: 'Historic roots · Top schools · Safe & quiet' },
  { name: 'Pearland',             slug: 'pearland',             tag: 'Suburban Hub',       price: '$260K–$650K', school: 'PISD', vibe: 'Master-planned · Great retail · 288 corridor' },
  { name: 'Galveston',            slug: 'galveston',            tag: 'Island Life',        price: '$180K–$1M+',  school: 'GISD', vibe: 'Beach access · Historic homes · Vacation rentals' },
  { name: 'Dickinson',            slug: 'dickinson',            tag: 'Affordable',         price: '$180K–$380K', school: 'DISD', vibe: 'Great value · Bay proximity · Growing area' },
]

export default function CommunitiesPage() {
  return (
    <main>
      <Navbar />

      {/* HEADER — dark teal, typographic community names as texture */}
      <section className="bg-[#1C3535] py-20 relative overflow-hidden">
        {/* Community names as background texture */}
        <div className="absolute inset-0 flex flex-wrap gap-x-8 gap-y-4 items-center justify-center opacity-[0.06] px-4 pointer-events-none select-none overflow-hidden">
          {['Clear Lake City','Seabrook','Kemah','El Lago','Nassau Bay','Taylor Lake Village','Webster','League City','Friendswood','Pearland','Galveston','Dickinson','Clear Lake City','Seabrook','Kemah','El Lago','Nassau Bay','Taylor Lake Village','Webster','League City','Friendswood','Pearland','Galveston','Dickinson'].map((n, i) => (
            <span key={i} className="font-serif text-white text-[1.4rem] font-bold whitespace-nowrap">{n}</span>
          ))}
        </div>
        <div className="relative max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-end justify-between gap-8">
          <div>
            <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">Southeast Houston</p>
            <h1 className="font-serif text-white text-[3rem] md:text-[5rem] font-bold leading-[1.0]">
              12 communities.<br />One trusted team.
            </h1>
          </div>
          <div className="max-w-xs">
            <p className="text-white/55 text-[15px] leading-relaxed mb-6">
              We don&apos;t just sell homes here — we live here, coach here, and shop here. Each community
              has its own character. We&apos;ll help you find the one that fits your life.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              {[{ n:'12', l:'Communities' },{ n:'20+', l:'Years local' },{ n:'400+', l:'Homes sold' }].map(s => (
                <div key={s.n}>
                  <p className="font-serif text-white text-[2rem] font-bold leading-none">{s.n}</p>
                  <p className="text-white/40 text-[10px] uppercase tracking-wider">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-white py-16 overflow-x-auto">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-6">Quick Comparison</p>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-[#1C3535]">
                <th className="font-serif text-[#1C3535] text-[13px] pb-3 pr-4 font-semibold w-40">Community</th>
                <th className="font-serif text-[#1C3535] text-[13px] pb-3 pr-4 font-semibold w-28">Price Range</th>
                <th className="font-serif text-[#1C3535] text-[13px] pb-3 pr-4 font-semibold w-24">Schools</th>
                <th className="font-serif text-[#1C3535] text-[13px] pb-3 font-semibold">Vibe</th>
              </tr>
            </thead>
            <tbody>
              {communities.map((c, i) => (
                <tr key={c.slug} className={`border-b border-[#f0ece4] ${i % 2 === 0 ? 'bg-white' : 'bg-[#faf7f2]'} hover:bg-[#fff3ed] transition-colors group`}>
                  <td className="py-3 pr-4">
                    <Link href={`/realtors-in/${c.slug}`} className="flex flex-col">
                      <span className="font-semibold text-[#1C3535] text-[13px] group-hover:text-[#C4622D] transition-colors">{c.name}</span>
                      <span className="text-[10px] text-[#C4622D] font-bold uppercase tracking-wider">{c.tag}</span>
                    </Link>
                  </td>
                  <td className="py-3 pr-4 text-[#4a4a4a] text-[13px] whitespace-nowrap">{c.price}</td>
                  <td className="py-3 pr-4 text-[#4a4a4a] text-[12px]">{c.school}</td>
                  <td className="py-3 text-[#6a6a6a] text-[12px]">{c.vibe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CARD GRID */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Explore Each Area</p>
          <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold mb-10">Find your neighborhood.</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {communities.map((c) => (
              <Link key={c.slug} href={`/realtors-in/${c.slug}`} className="bg-white p-6 shadow-sm hover:shadow-md transition-all group flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="font-serif text-[#1C3535] text-lg font-semibold group-hover:text-[#C4622D] transition-colors">{c.name}</h3>
                  <span className="text-[10px] text-[#C4622D] font-bold uppercase tracking-wider bg-[#fff3ed] px-2 py-0.5 shrink-0 ml-2">{c.tag}</span>
                </div>
                <div className="w-full h-[1px] bg-[#f0ece4]" />
                <div className="grid grid-cols-2 gap-3 text-[12px]">
                  <div>
                    <p className="text-[#9a9a9a] uppercase tracking-wider text-[10px] font-semibold mb-0.5">Price Range</p>
                    <p className="text-[#1C3535] font-medium">{c.price}</p>
                  </div>
                  <div>
                    <p className="text-[#9a9a9a] uppercase tracking-wider text-[10px] font-semibold mb-0.5">Schools</p>
                    <p className="text-[#1C3535] font-medium">{c.school}</p>
                  </div>
                </div>
                <p className="text-[#6a6a6a] text-[12px]">{c.vibe}</p>
                <div className="mt-auto flex items-center gap-1 text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.15em]">
                  View Community
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NOT SURE CTA */}
      <section className="bg-[#C8DDE9] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold mb-3">Not sure which area is right for you?</h2>
          <p className="text-[#2a3a3a] text-[15px] leading-relaxed mb-7 max-w-md mx-auto">
            Tell us what matters most — schools, commute, price range, waterfront access — and we&apos;ll point you in the right direction.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#1C3535] text-white font-semibold px-8 py-3.5 rounded hover:bg-[#142828] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Talk to a Local Realtor
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
