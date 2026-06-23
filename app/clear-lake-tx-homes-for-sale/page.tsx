import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Clear Lake TX Homes for Sale | 1st Texas Realtors',
  description: 'Browse homes for sale in Clear Lake, TX. Waterfront properties, established neighborhoods, top-rated schools, and NASA proximity. Let\'s find yours.',
}

const listings = [
  { image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&q=80', address: '2214 Lakeside Terrace Dr', city: 'Clear Lake City, TX 77062', price: '$389,000', beds: 4, baths: 3, sqft: '2,480', tag: 'Just Listed', featured: true },
  { image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=600&q=80', address: '903 Nassau Bay Blvd', city: 'Nassau Bay, TX 77058', price: '$524,000', beds: 4, baths: 2.5, sqft: '3,100', tag: 'Waterfront', featured: false },
  { image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80', address: '1804 El Lago Ct', city: 'El Lago, TX 77586', price: '$445,000', beds: 3, baths: 2, sqft: '2,200', tag: 'Corner Lot', featured: false },
  { image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80', address: '512 Seabrook Landing', city: 'Seabrook, TX 77586', price: '$618,000', beds: 5, baths: 4, sqft: '3,850', tag: 'Pool', featured: false },
  { image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80', address: '4420 Taylor Lake Cir', city: 'Taylor Lake Village, TX 77586', price: '$375,500', beds: 3, baths: 2, sqft: '2,050', tag: 'Updated Kitchen', featured: false },
  { image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=600&q=80', address: '1118 Bay Oaks Dr', city: 'Clear Lake City, TX 77062', price: '$299,000', beds: 3, baths: 2, sqft: '1,780', tag: 'Great Value', featured: false },
]

const filters = ['All Listings', 'Under $400K', '$400K–$600K', 'Waterfront', 'New Listings']

export default function HomesForSalePage() {
  return (
    <main>
      <Navbar />

      {/* SEARCH-BAR HERO — cream, large serif + fake search input */}
      <section className="bg-[#F2EDE3] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">Clear Lake TX Homes for Sale</p>
          <h1 className="font-serif text-[#1C3535] text-[3rem] md:text-[5rem] font-bold leading-[1.0] mb-4">
            Find your home<br />in Clear Lake.
          </h1>
          <p className="text-[#6a6a6a] text-[16px] leading-relaxed mb-10 max-w-lg mx-auto">
            Browse current listings in Clear Lake, Seabrook, El Lago, Nassau Bay, Taylor Lake Village,
            and surrounding communities.
          </p>
          {/* Fake search bar UI */}
          <div className="flex items-stretch bg-white shadow-lg max-w-2xl mx-auto border border-[#e8e0d4]">
            <div className="flex items-center px-5 border-r border-[#e8e0d4] shrink-0">
              <svg className="w-5 h-5 text-[#9a9a9a]" fill="none" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="flex-1 px-4 py-4 text-left">
              <p className="text-[#9a9a9a] text-[14px]">Search by city, zip, or neighborhood...</p>
            </div>
            <Link href="/contact" className="bg-[#C4622D] text-white font-semibold px-6 py-4 text-xs uppercase tracking-[0.15em] hover:bg-[#A84E22] transition-colors shrink-0 flex items-center gap-2">
              Search
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          {/* Filter chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
            {filters.map((f, i) => (
              <span key={f} className={`px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider cursor-pointer transition-colors ${i === 0 ? 'bg-[#1C3535] text-white' : 'bg-white text-[#4a4a4a] border border-[#e8e0d4] hover:border-[#1C3535]'}`}>
                {f}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* MARKET STATS — dark teal bar */}
      <section className="bg-[#1C3535] py-8">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 divide-x divide-white/20">
          {[
            { stat: '180+', label: 'Active listings in the area' },
            { stat: '$320K', label: 'Median home price' },
            { stat: '28 days', label: 'Average days on market' },
          ].map((h) => (
            <div key={h.stat} className="flex flex-col items-center text-center px-6 py-1">
              <span className="font-serif text-white text-[2.4rem] font-bold leading-none mb-1">{h.stat}</span>
              <span className="text-white/55 text-[11px] uppercase tracking-wider">{h.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED LISTING — wide hero card */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-1">Editor&apos;s Pick</p>
              <h2 className="font-serif text-[#1C3535] text-[1.8rem] font-bold">Featured Listing</h2>
            </div>
          </div>
          {listings.filter(l => l.featured).map((l, i) => (
            <div key={i} className="flex flex-col md:flex-row overflow-hidden shadow-md bg-[#F2EDE3] group">
              <div className="md:w-3/5 relative h-72 md:h-auto overflow-hidden">
                <Image src={l.image} alt={l.address} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                <span className="absolute top-4 left-4 bg-[#C4622D] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5">{l.tag}</span>
              </div>
              <div className="md:w-2/5 p-8 flex flex-col justify-center">
                <p className="font-serif text-[#C4622D] text-[3rem] font-bold leading-none mb-2">{l.price}</p>
                <h3 className="font-serif text-[#1C3535] text-xl font-semibold mb-1">{l.address}</h3>
                <p className="text-[#9a9a9a] text-[13px] mb-6">{l.city}</p>
                <div className="grid grid-cols-3 gap-3 mb-6 text-center">
                  {[{ n: l.beds, u: 'Beds' }, { n: l.baths, u: 'Baths' }, { n: l.sqft, u: 'Sq Ft' }].map(s => (
                    <div key={s.u} className="bg-white p-3">
                      <p className="font-serif text-[#1C3535] text-lg font-bold leading-none">{s.n}</p>
                      <p className="text-[#9a9a9a] text-[10px] uppercase tracking-wider mt-0.5">{s.u}</p>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center bg-[#1C3535] text-white font-semibold px-6 py-3 hover:bg-[#142828] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
                  Schedule a Showing
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MORE LISTINGS GRID */}
      <section className="bg-[#F2EDE3] py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-1">More Homes</p>
              <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold">Current Listings</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.18em] gap-1.5 hover:gap-2.5 transition-all">
              See All Listings
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {listings.filter(l => !l.featured).map((l, i) => (
              <div key={i} className="bg-white shadow-sm overflow-hidden group">
                <div className="relative h-48 overflow-hidden">
                  <Image src={l.image} alt={l.address} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-3 left-3 bg-[#C4622D] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">{l.tag}</span>
                </div>
                <div className="p-5">
                  <p className="font-serif text-[#C4622D] text-xl font-bold mb-1">{l.price}</p>
                  <p className="text-[#1C3535] text-[14px] font-semibold leading-snug">{l.address}</p>
                  <p className="text-[#9a9a9a] text-[12px] mb-3">{l.city}</p>
                  <div className="flex items-center gap-4 text-[#6a6a6a] text-[12px] border-t border-[#f0ece4] pt-3">
                    <span>{l.beds} bd</span>
                    <span className="text-[#ccc]">|</span>
                    <span>{l.baths} ba</span>
                    <span className="text-[#ccc]">|</span>
                    <span>{l.sqft} sqft</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-[#9a9a9a] text-sm mb-4">Listings updated daily from the Houston MLS</p>
            <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Get Full Listing Access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* AREA OVERVIEW */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/2 relative h-72 overflow-hidden shadow-md">
            <Image src="https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80" alt="Clear Lake waterfront" fill className="object-cover" />
          </div>
          <div className="md:w-1/2">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Why Clear Lake</p>
            <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold leading-[1.15] mb-5">
              A real community,<br />not just a zip code.
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">
              Clear Lake sits at the intersection of space exploration, coastal living, and authentic Texas community.
              NASA&apos;s Johnson Space Center anchors the economy, while the shores of Galveston Bay give it a
              character unlike anywhere else in Houston.
            </p>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-6">
              Homes here hold their value. The community invests in itself. And the people who move here tend to stay for decades.
            </p>
            <Link href="/communities" className="inline-flex items-center text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.18em] gap-2 hover:gap-3 transition-all">
              Explore All Communities
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
