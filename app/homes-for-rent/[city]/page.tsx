import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { CITY_SLUGS } from '@/lib/constants'
import type { RentalCityMeta } from '@/lib/types'

const cityMeta: Record<string, RentalCityMeta> = {
  'clear-lake-city':     { name: 'Clear Lake City',     image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85', intro: 'Clear Lake City is one of the most popular rental markets in southeast Houston — mature neighborhoods, top schools, and easy access to JSC and the Medical Center.', priceRange: '$1,600 – $3,200/mo', petPolicy: 'Most owners allow pets with deposit', leaseTerms: '12-month standard' },
  'seabrook':            { name: 'Seabrook',             image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85', intro: 'Seabrook rentals range from waterfront properties with bay views to cozy cottages in the historic downtown area. A perfect base for exploring the best of Clear Lake.', priceRange: '$1,400 – $3,500/mo', petPolicy: 'Varies by property', leaseTerms: '6 or 12 months available' },
  'kemah':               { name: 'Kemah',                image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=85', intro: "Kemah is a high-demand rental market thanks to its boardwalk, bay views, and vacation appeal. Whether you're a long-term renter or short-term, we have connections here.", priceRange: '$1,500 – $4,000/mo', petPolicy: 'Select properties only', leaseTerms: 'Flexible — call us' },
  'nassau-bay':          { name: 'Nassau Bay',            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85', intro: 'Nassau Bay rentals are sought after for their proximity to NASA and the quiet, character-filled streets that make this small city special.', priceRange: '$1,700 – $3,000/mo', petPolicy: 'Generally pet-friendly', leaseTerms: '12-month preferred' },
  'el-lago':             { name: 'El Lago',               image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=85', intro: "El Lago is one of the smallest cities in Texas — which means rental inventory is limited and in demand. If you find one, don't wait.", priceRange: '$1,600 – $2,800/mo', petPolicy: 'Case by case', leaseTerms: '12-month standard' },
  'taylor-lake-village': { name: 'Taylor Lake Village',  image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85', intro: 'Taylor Lake Village offers lake access and a strong community feel at relatively affordable rental prices compared to neighboring Clear Lake City.', priceRange: '$1,500 – $2,600/mo', petPolicy: 'Most allow pets', leaseTerms: '6 or 12 months' },
  'league-city':         { name: 'League City',           image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=1600&q=85', intro: "League City is the largest and fastest-growing rental market in the area — master-planned communities, great schools, and lots of options across every price point.", priceRange: '$1,400 – $3,200/mo', petPolicy: 'Pet-friendly options widely available', leaseTerms: '12-month standard' },
  'webster':             { name: 'Webster',               image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85', intro: "Webster is centrally located with great I-45 access — a commuter favorite and one of the more affordable rental markets in the Clear Lake corridor.", priceRange: '$1,300 – $2,500/mo', petPolicy: 'Generally pet-friendly', leaseTerms: 'Flexible lease terms common' },
  'friendswood':         { name: 'Friendswood',           image: 'https://images.unsplash.com/photo-1609220136736-443140cfeaa8?w=1600&q=85', intro: "Friendswood rentals are in high demand from families seeking top-rated FISD schools and quiet, established neighborhoods.", priceRange: '$1,600 – $3,000/mo', petPolicy: 'Varies by property', leaseTerms: '12-month standard' },
  'pearland':            { name: 'Pearland',              image: 'https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=1600&q=85', intro: "Pearland is one of the largest and most active rental markets in south Houston — great value, master-planned communities, and easy 288 access.", priceRange: '$1,400 – $3,000/mo', petPolicy: 'Many pet-friendly options', leaseTerms: '12-month standard' },
  'galveston':           { name: 'Galveston',             image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85', intro: "Galveston island rentals range from affordable bungalows in historic neighborhoods to beachfront properties and vacation rental investments.", priceRange: '$1,200 – $5,000+/mo', petPolicy: 'Varies widely', leaseTerms: 'Short and long-term available' },
  'dickinson':           { name: 'Dickinson',             image: 'https://images.unsplash.com/photo-1519643382945-40941c9670b7?w=1600&q=85', intro: "Dickinson offers affordable rental options with good access to Galveston Bay and major employment corridors — a practical choice for budget-conscious renters.", priceRange: '$1,100 – $2,200/mo', petPolicy: 'Most allow pets', leaseTerms: '12-month standard' },
  'baytown':             { name: 'Baytown',               image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85', intro: "Baytown's rental market is anchored by the industrial and refining sector — affordable options with good access to the Houston Ship Channel corridor.", priceRange: '$1,000 – $2,400/mo', petPolicy: 'Generally pet-friendly', leaseTerms: 'Flexible' },
  'la-porte':            { name: 'La Porte',              image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=85', intro: "La Porte sits on the south shore of Galveston Bay — waterfront access, a small-town feel, and competitive rental prices.", priceRange: '$1,200 – $2,600/mo', petPolicy: 'Varies by property', leaseTerms: '12-month standard' },
  'pasadena':            { name: 'Pasadena',              image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85', intro: "Pasadena is a large, affordable city with strong rental inventory and easy access to the Houston Ship Channel employment corridor.", priceRange: '$1,000 – $2,200/mo', petPolicy: 'Most allow pets', leaseTerms: '12-month standard' },
  'san-leon':            { name: 'San Leon',              image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=85', intro: "San Leon is a hidden gem on Galveston Bay — fishing culture, waterfront lots, and one of the most affordable waterfront rental markets in the area.", priceRange: '$1,100 – $2,500/mo', petPolicy: 'Generally pet-friendly', leaseTerms: 'Flexible' },
  'shoreacres':          { name: 'Shoreacres',            image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1600&q=85', intro: "Shoreacres is a small waterfront city between La Porte and Seabrook — limited inventory but strong community character and bay access.", priceRange: '$1,300 – $2,800/mo', petPolicy: 'Case by case', leaseTerms: '12-month standard' },
  'tiki-island':         { name: 'Tiki Island',           image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=85', intro: "Tiki Island is a unique canal community on Galveston Bay — most properties have boat access and the island lifestyle is unlike anything else in the market.", priceRange: '$1,800 – $5,000+/mo', petPolicy: 'Varies by owner', leaseTerms: 'Short and long-term available' },
  'texas-city':          { name: 'Texas City',            image: 'https://images.unsplash.com/photo-1519643382945-40941c9670b7?w=1600&q=85', intro: "Texas City offers affordable bay-area living with a strong industrial job base and improving residential neighborhoods.", priceRange: '$1,000 – $2,000/mo', petPolicy: 'Most allow pets', leaseTerms: '12-month standard' },
  'clear-lake-shores':   { name: 'Clear Lake Shores',    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=85', intro: "Clear Lake Shores is a tiny island city on Clear Lake — most homes have boat docks, and the community atmosphere is incredibly close-knit.", priceRange: '$1,800 – $4,000/mo', petPolicy: 'Generally pet-friendly', leaseTerms: '12-month preferred' },
  'deer-park':           { name: 'Deer Park',             image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85', intro: "Deer Park is a family-friendly city east of Pasadena with an excellent school district and affordable rental inventory.", priceRange: '$1,100 – $2,400/mo', petPolicy: 'Most allow pets', leaseTerms: '12-month standard' },
}

const sampleListings = [
  { image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&q=80', beds: 3, baths: 2, sqft: '1,680', status: 'Available Now' },
  { image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=600&q=80', beds: 4, baths: 2.5, sqft: '2,280', status: 'Available Soon' },
  { image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&q=80', beds: 2, baths: 2, sqft: '1,200', status: 'Available Now' },
]

export const dynamicParams = false

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const name = params.city.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  return {
    title: `Homes for Rent in ${name} TX | 1st Texas Realtors`,
    description: `Browse rental homes in ${name}, TX. Pet policies, lease terms, price ranges, and local expertise from realtors who know this community.`,
  }
}

export default function RentalCityPage({ params }: { params: { city: string } }) {
  const slug = params.city ?? ''
  const displayName = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const meta = cityMeta[slug] ?? {
    name: displayName,
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85',
    intro: `We help tenants find quality rental homes in ${displayName} and surrounding communities. Contact us to see current availability.`,
    priceRange: 'Contact us for current pricing',
    petPolicy: 'Varies by property',
    leaseTerms: 'Contact us for details',
  }

  return (
    <main>
      <Navbar />

      {/* BLUE TEAL HERO — distinct from realtors-in (no photo background) */}
      <section className="bg-[#C8DDE9] py-20 relative overflow-hidden">
        <div className="absolute right-0 top-0 h-full w-1/3 opacity-20">
          <Image src={meta.image} alt={meta.name} fill className="object-cover object-left" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-3/5">
            <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-4">Homes for Rent → {meta.name}</p>
            <h1 className="font-serif text-[#1C3535] text-[2.8rem] md:text-[4rem] font-bold leading-[1.0] mb-4">
              Renting in<br />{meta.name}
            </h1>
            <p className="text-[#2a4a4a] text-[15px] leading-relaxed mb-6 max-w-md">
              {meta.intro}
            </p>
            <Link href="/contact" className="inline-flex items-center bg-[#1C3535] text-white font-semibold px-7 py-3.5 hover:bg-[#142828] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              See Current Rentals
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* RENTAL INFO STRIP — horizontal */}
      <section className="bg-[#1C3535] py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 divide-x divide-white/10">
          {[
            { label: 'Typical Rent Range', value: meta.priceRange },
            { label: 'Pet Policy', value: meta.petPolicy },
            { label: 'Lease Terms', value: meta.leaseTerms },
          ].map((f) => (
            <div key={f.label} className="px-6 first:pl-0">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.18em] font-semibold mb-0.5">{f.label}</p>
              <p className="text-white text-[13px] font-medium leading-snug">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SAMPLE LISTINGS — horizontal card rows */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Sample Listings</p>
            <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold">Typical Rentals in {meta.name}</h2>
          </div>
          <div className="space-y-4">
            {sampleListings.map((l, i) => (
              <div key={i} className="bg-white flex flex-col md:flex-row overflow-hidden shadow-sm group">
                <div className="md:w-56 relative h-44 md:h-auto shrink-0 overflow-hidden">
                  <Image src={l.image} alt="Rental home" fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className={`absolute top-3 left-3 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${l.status === 'Available Now' ? 'bg-[#3a7040]' : 'bg-[#1C3535]'}`}>
                    {l.status}
                  </span>
                </div>
                <div className="flex-1 p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <p className="text-[#9a9a9a] text-[11px] uppercase tracking-wider font-semibold mb-1">{meta.name}, TX</p>
                    <div className="flex items-center gap-4 text-[#4a4a4a] text-[14px]">
                      <span><strong className="text-[#1C3535]">{l.beds}</strong> Bedrooms</span>
                      <span className="text-[#ccc]">|</span>
                      <span><strong className="text-[#1C3535]">{l.baths}</strong> Baths</span>
                      <span className="text-[#ccc]">|</span>
                      <span><strong className="text-[#1C3535]">{l.sqft}</strong> Sq Ft</span>
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="text-[#9a9a9a] text-[11px] uppercase tracking-wider mb-1">Starting at</p>
                    <p className="font-serif text-[#C4622D] text-xl font-bold">Call for Pricing</p>
                    <Link href="/contact" className="inline-flex items-center mt-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#1C3535] gap-1 hover:text-[#C4622D] transition-colors">
                      Inquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[#9a9a9a] text-[13px] text-center mt-6">Contact us for actual current availability and pricing in {meta.name}.</p>
        </div>
      </section>

      {/* WHY RENT WITH US */}
      <section className="bg-white py-16 border-y border-[#f0ece4]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Tenant Representation</p>
              <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold leading-[1.15] mb-4">
                We represent tenants,<br />not just landlords.
              </h2>
              <p className="text-[#4a4a4a] text-[14px] leading-relaxed mb-4">
                Most people don&apos;t realize they can have a Realtor help them find a rental — and it costs nothing out of pocket.
                In most cases, the landlord covers our fee.
              </p>
              <p className="text-[#4a4a4a] text-[14px] leading-relaxed">
                We review the lease, negotiate terms, and make sure you know exactly what you&apos;re signing.
                Especially useful if you&apos;re relocating and can&apos;t visit in person.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 gap-3">
              {[
                { label: 'Lease review included', sub: 'We read every clause before you sign' },
                { label: 'Off-market inventory', sub: 'Properties not listed publicly' },
                { label: 'No cost to renters', sub: 'Landlord typically covers our fee' },
                { label: 'Remote support available', sub: 'Perfect for relocation buyers' },
              ].map((f) => (
                <div key={f.label} className="flex items-center gap-4 bg-[#F2EDE3] px-5 py-4">
                  <div className="w-2 h-2 rounded-full bg-[#C4622D] shrink-0" />
                  <div>
                    <p className="text-[#1C3535] text-[14px] font-semibold">{f.label}</p>
                    <p className="text-[#9a9a9a] text-[12px]">{f.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C3535] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-white text-[2rem] font-bold mb-4">
            Ready to rent in {meta.name}?
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
            Tell us your timeline, budget, and must-haves — we&apos;ll match you with available rentals and handle the legwork.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/homes-for-rent" className="text-white/70 text-xs font-semibold uppercase tracking-[0.15em] hover:text-white transition-colors">
              ← All Rental Areas
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
