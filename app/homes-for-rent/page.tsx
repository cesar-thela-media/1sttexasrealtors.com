import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Homes for Rent | 1st Texas Realtors – Southeast Houston',
  description: 'Quality rental homes across Clear Lake, Seabrook, Kemah, League City, and 17 more southeast Houston communities. Let a local Realtor find yours.',
}

const rentalListings = [
  { image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80', address: '1508 Marina View Ct', city: 'Seabrook, TX 77586', price: '$1,950/mo', beds: 3, baths: 2, sqft: '1,680', available: 'Available Now', type: 'Single Family' },
  { image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80', address: '3302 Bay Oaks Ln', city: 'Clear Lake City, TX 77062', price: '$2,400/mo', beds: 4, baths: 2.5, sqft: '2,280', available: 'Available Aug 1', type: 'Single Family' },
  { image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80', address: '610 Kemah Cove Dr', city: 'Kemah, TX 77565', price: '$1,750/mo', beds: 2, baths: 2, sqft: '1,200', available: 'Available Now', type: 'Townhome' },
  { image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80', address: '822 El Lago Dr', city: 'El Lago, TX 77586', price: '$2,100/mo', beds: 3, baths: 2, sqft: '1,850', available: 'Available Jul 15', type: 'Single Family' },
  { image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80', address: '2715 Nassau Shores Blvd', city: 'Nassau Bay, TX 77058', price: '$2,650/mo', beds: 4, baths: 3, sqft: '2,600', available: 'Available Now', type: 'Waterfront' },
  { image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=600&q=80', address: '414 League City Pkwy', city: 'League City, TX 77573', price: '$1,850/mo', beds: 3, baths: 2, sqft: '1,550', available: 'Available Aug 15', type: 'Single Family' },
]

const rentalCities = [
  { name: 'Clear Lake City', slug: 'clear-lake-city', count: '14' },
  { name: 'Seabrook', slug: 'seabrook', count: '9' },
  { name: 'Kemah', slug: 'kemah', count: '7' },
  { name: 'Nassau Bay', slug: 'nassau-bay', count: '5' },
  { name: 'El Lago', slug: 'el-lago', count: '4' },
  { name: 'Taylor Lake Village', slug: 'taylor-lake-village', count: '6' },
  { name: 'League City', slug: 'league-city', count: '18' },
  { name: 'Webster', slug: 'webster', count: '11' },
  { name: 'Friendswood', slug: 'friendswood', count: '8' },
  { name: 'Pearland', slug: 'pearland', count: '22' },
  { name: 'Galveston', slug: 'galveston', count: '13' },
  { name: 'Dickinson', slug: 'dickinson', count: '7' },
]

export default function HomesForRentPage() {
  return (
    <main>
      <Navbar />

      {/* SPLIT HERO — left dark teal text / right full-bleed image */}
      <section className="flex flex-col md:flex-row min-h-[420px]">
        <div className="md:w-1/2 bg-[#1C3535] flex items-center py-16 md:py-0">
          <div className="px-10 md:px-16 max-w-lg">
            <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">Homes for Rent</p>
            <h1 className="font-serif text-white text-[2.8rem] md:text-[3.6rem] font-bold leading-[1.0] mb-5">
              Rent with a Realtor<br />who lives here too.
            </h1>
            <p className="text-white/65 text-[15px] leading-relaxed mb-8">
              Quality rental homes across southeast Houston — and the local expertise to help you
              pick the right neighborhood before you commit.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3.5 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Tell Us What You Need
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 relative h-64 md:h-auto">
          <Image src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=900&q=85" alt="Rental home" fill className="object-cover" />
        </div>
      </section>

      {/* QUICK STATS STRIP */}
      <section className="bg-[#C8DDE9] py-8 border-b border-[#a8bcc9]">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 divide-x divide-[#1C3535]/20">
          {[
            { n: '125+', l: 'Active rentals in our network' },
            { n: '$1,750', l: 'Average monthly rent' },
            { n: '21 cities', l: 'Southeast Houston coverage' },
          ].map((s) => (
            <div key={s.n} className="text-center px-6">
              <p className="font-serif text-[#1C3535] text-[2.4rem] font-bold leading-none mb-0.5">{s.n}</p>
              <p className="text-[#2a4a4a] text-[11px] uppercase tracking-wider">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RENTAL LISTINGS — horizontal card rows */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-1">Featured Rentals</p>
              <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold">Currently Available</h2>
            </div>
            <Link href="/contact" className="inline-flex items-center text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.18em] gap-1.5 hover:gap-2.5 transition-all">
              Get Full Access
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className="space-y-4">
            {rentalListings.map((l, i) => (
              <div key={i} className="bg-white shadow-sm overflow-hidden group flex flex-col md:flex-row">
                <div className="md:w-64 relative h-48 md:h-auto shrink-0 overflow-hidden">
                  <Image src={l.image} alt={l.address} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${l.available === 'Available Now' ? 'bg-[#3a7040]' : 'bg-[#1C3535]'}`}>
                    {l.available}
                  </span>
                </div>
                <div className="flex-1 p-6 flex flex-col md:flex-row items-start md:items-center gap-4 justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] text-[#9a9a9a] uppercase tracking-wider font-semibold">{l.type}</span>
                    </div>
                    <h3 className="font-serif text-[#1C3535] text-lg font-semibold leading-snug">{l.address}</h3>
                    <p className="text-[#9a9a9a] text-[12px]">{l.city}</p>
                    <div className="flex items-center gap-4 text-[#6a6a6a] text-[12px] mt-2">
                      <span>{l.beds} bd</span>
                      <span className="text-[#ccc]">|</span>
                      <span>{l.baths} ba</span>
                      <span className="text-[#ccc]">|</span>
                      <span>{l.sqft} sqft</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-serif text-[#C4622D] text-2xl font-bold">{l.price}</p>
                    <Link href="/contact" className="inline-flex items-center mt-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1C3535] gap-1 hover:text-[#C4622D] transition-colors">
                      Inquire
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW RENTING WITH US WORKS */}
      <section className="bg-white py-16 border-y border-[#f0ece4]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">The Process</p>
          <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold mb-8">How renting with us works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e8e0d4]">
            {[
              { n: '01', t: 'Tell us what you need', b: 'Size, location, price, pets, timeline. We listen and match — no generic searches.' },
              { n: '02', t: 'We find your options', b: 'We access listings not on Zillow, contact our landlord network, and filter to what fits.' },
              { n: '03', t: 'We handle the details', b: 'Lease review, negotiation, move-in walkthrough. Our service costs you nothing.' },
            ].map((s, i) => (
              <div key={i} className={`p-7 ${i < 2 ? 'md:border-r border-[#e8e0d4]' : ''} ${i > 0 ? 'border-t md:border-t-0 border-[#e8e0d4]' : ''}`}>
                <p className="font-serif text-[#C4622D] text-[2.5rem] font-bold leading-none mb-3">{s.n}</p>
                <h3 className="font-serif text-[#1C3535] text-base font-semibold mb-2">{s.t}</h3>
                <p className="text-[#6a6a6a] text-[13px] leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BROWSE BY CITY */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Browse by Area</p>
            <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold">Rentals by Community</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {rentalCities.map((c) => (
              <Link key={c.slug} href={`/homes-for-rent/${c.slug}`}
                className="flex items-center justify-between border border-[#e8e0d4] bg-white px-4 py-3.5 hover:border-[#C4622D] hover:bg-[#fff8f5] transition-colors group">
                <span className="text-[#1C3535] text-[13px] font-medium group-hover:text-[#C4622D] transition-colors">{c.name}</span>
                <span className="text-[#9a9a9a] text-[11px] font-semibold">{c.count}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C3535] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-white text-[2rem] font-bold mb-4">Don&apos;t see what you need?</h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
            Tell us what you&apos;re looking for — size, location, price range, available date — and we&apos;ll reach out
            to our network on your behalf.
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Tell Us What You Need
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
