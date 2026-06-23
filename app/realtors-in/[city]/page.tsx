import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { CITY_SLUGS } from '@/lib/constants'
import type { CityData } from '@/lib/types'

const cityData: Record<string, CityData> = {
  'clear-lake-city': {
    name: 'Clear Lake City',
    tagline: "Houston's Hidden Waterfront Gem",
    intro: "Clear Lake City is one of the most sought-after communities in southeast Houston — and for good reason.",
    detail: "Established in the 1960s alongside NASA's Johnson Space Center, Clear Lake City offers mature tree-lined streets, excellent schools, and a strong sense of community. Its proximity to the bay gives it a coastal feel without the island price tag.",
    highlights: ['NASA/JSC proximity', 'Top-rated CCISD schools', 'Waterfront access', 'Mature neighborhoods', 'Easy I-45 access'],
    localTips: ['Saturday farmers market at Clear Lake Park', 'Best coffee: Agora on Bay Area Blvd', 'Avoid Egret Bay Blvd at 5pm', 'El Dorado Park has the best trail system'],
    priceRange: '$280,000 – $650,000',
    schoolDistrict: 'Clear Creek ISD',
    commute: '~25 min to Medical Center, ~35 min to Downtown',
    image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85',
    testimonial: { quote: "Mark knew every street in Clear Lake City. He warned us about a flood-prone cul-de-sac that looked perfect online. That saved us.", author: "Daniel & Priya R., Clear Lake City" },
  },
  'seabrook': {
    name: 'Seabrook',
    tagline: 'Waterfront Living with Small-Town Charm',
    intro: "Seabrook sits right on the edge of Galveston Bay and Clear Lake — a waterfront lifestyle with genuine small-town character.",
    detail: "Downtown Seabrook is lined with restaurants, art galleries, and local shops. Neighborhoods range from modest starter homes to waterfront estates with private docks. It's a community where people stay for decades — and it shows.",
    highlights: ['Waterfront dining & culture', 'Sailboat & fishing access', 'Walkable downtown', 'Strong local identity', 'Diverse price range'],
    localTips: ['Waterfront dining: Tookie\'s Burgers is a local legend', 'Marina del Sol has the best sunrise views', 'Red Bluff Rd floods — ask us which streets', 'Seabrook Jazz Festival each October'],
    priceRange: '$250,000 – $1.2M+',
    schoolDistrict: 'Clear Creek ISD',
    commute: '~35 min to Medical Center, ~45 min to Downtown',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=85',
    testimonial: { quote: "Sandra showed us a waterfront lot most buyers never knew existed. We built our dream home. Two years later, we still can't believe we live here.", author: "Jim & Carol H., Seabrook" },
  },
  'kemah': {
    name: 'Kemah',
    tagline: 'Bay Views, Boardwalk Life, and Beautiful Homes',
    intro: "Kemah is famous for its boardwalk, but the residential areas offer something just as compelling — stunning water views and a vibrant coastal lifestyle.",
    detail: "From waterfront estates along the bay to investment-friendly properties near the entertainment district, Kemah offers real variety. It's one of the few markets where vacation rental income and primary residence quality overlap this naturally.",
    highlights: ['Kemah Boardwalk access', 'Bay & marina views', 'Vacation rental potential', 'Boating community', 'Tourism-driven economy'],
    localTips: ['Weekends near the boardwalk get busy — we\'ll show you which streets stay quiet', 'Some flood zone areas require special insurance', 'Boat storage is abundant and affordable', 'Best seafood: Jimmy G\'s on Bradford Ave'],
    priceRange: '$200,000 – $1.5M+',
    schoolDistrict: 'Clear Creek ISD / Dickinson ISD',
    commute: '~40 min to Medical Center, ~50 min to Downtown',
    image: 'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=85',
    testimonial: { quote: "We wanted a waterfront property for vacation rental income. Mark ran the numbers, found us the right lot, and helped us understand the Kemah market before we invested.", author: "The Navarro Family, Kemah" },
  },
  'el-lago': {
    name: 'El Lago',
    tagline: 'Quiet, Exclusive, and Deeply Underrated',
    intro: "El Lago is one of the smallest incorporated cities in Texas — and one of the most carefully preserved.",
    detail: "With only about 2,700 residents, El Lago has a quiet exclusivity that's hard to find near a major metro. Originally developed for NASA families, it retains incredible character — wide lots, mature trees, no through traffic, and neighbors who know each other.",
    highlights: ['Small city feel', 'NASA heritage', 'Low traffic & density', 'Spacious lots', 'Strong community'],
    localTips: ['Homes rarely come to market — we have off-market contacts here', 'Most streets are dead-ends by design — extremely quiet', 'HOA is active and keeps the area immaculate', 'El Lago Waterfront Park is a hidden gem'],
    priceRange: '$300,000 – $600,000',
    schoolDistrict: 'Clear Creek ISD',
    commute: '~25 min to Medical Center, ~35 min to Downtown',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1600&q=85',
    testimonial: { quote: "El Lago was on our radar but we couldn't find listings. Sandra knew two homeowners considering selling and made the introduction. We're in our dream home.", author: "Robert & Lynn D., El Lago" },
  },
  'nassau-bay': {
    name: 'Nassau Bay',
    tagline: "The Astronaut Neighborhood",
    intro: "Nassau Bay was literally built for the people who went to the moon — and its character reflects that legacy.",
    detail: "Developed in the 1960s alongside JSC, Nassau Bay is a small, tight-knit waterfront community with outstanding civic pride. Properties here often feature water access, and the neighborhood sits right next to the Space Center Houston campus.",
    highlights: ['NASA/JSC adjacency', 'Waterfront access', 'Historic character', 'Strong HOA community', 'Space Center campus nearby'],
    localTips: ['Nassau Bay Hilton is a local landmark — great for out-of-town guests', 'Many properties have private boat docks', 'The neighborhood has its own city services — very responsive', 'Bay Trail runs along the entire waterfront'],
    priceRange: '$280,000 – $700,000',
    schoolDistrict: 'Clear Creek ISD',
    commute: '~25 min to Medical Center, ~35 min to Downtown',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&q=85',
    testimonial: { quote: "Mark found us a home here with a boat dock and sold our old house in 12 days. Two for two. We'll never use another Realtor.", author: "Tom & Susan K., Nassau Bay" },
  },
  'league-city': {
    name: 'League City',
    tagline: "One of Texas's Fastest Growing Cities",
    intro: "League City has transformed into one of the most desirable suburbs in the Houston metro — and the growth shows no sign of slowing.",
    detail: "Master-planned communities, excellent CCISD and LCISD schools, and a strong retail corridor along FM 518 and I-45 make League City a top destination for families. New construction is abundant but established neighborhoods offer great value too.",
    highlights: ['Master-planned communities', 'Top-rated schools', 'New construction available', 'Strong retail corridor', 'Major growth area'],
    localTips: ['Demand from Friendswood and Pearland buyers is driving prices up quickly', 'South Shore Harbour is a favorite with boat access', 'LCISD vs CCISD boundary matters — ask us which side your street is on', 'FM 518 weekend farmer\'s market is excellent'],
    priceRange: '$280,000 – $800,000',
    schoolDistrict: 'Clear Creek ISD / LCISD',
    commute: '~30 min to Medical Center, ~40 min to Downtown',
    image: 'https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=1600&q=85',
    testimonial: { quote: "We needed to know which school zone we'd be in before we bought. Sandra knew every district boundary by heart. That level of detail is rare.", author: "Marcus & Angela T., League City" },
  },
}

const defaultCity: CityData = {
  name: 'This Community',
  tagline: 'Southeast Houston Living',
  intro: "This community is one of the many great places to live in the southeast Houston area — and we know it well.",
  detail: "We've helped buyers and sellers in this neighborhood for over 20 years. Whether you're looking for your first home or your forever home, we can help you navigate the local market with confidence.",
  highlights: ['Local expertise', 'Strong community', 'Great value', 'Access to amenities', 'Quality schools nearby'],
  localTips: ['Contact us for insider tips on this community', 'We know which streets to avoid and why', 'Off-market opportunities available', 'Ask about upcoming listings'],
  priceRange: 'Contact us for current pricing',
  schoolDistrict: 'Contact us for details',
  commute: 'Contact us for details',
  image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85',
  testimonial: { quote: "Mark and Sandra were exactly what we needed — local experts who told us the truth about the neighborhood before we committed.", author: "Recent Client" },
}

export const dynamicParams = false

export function generateStaticParams() {
  return CITY_SLUGS.map((city) => ({ city }))
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const name = params.city.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  return {
    title: `Realtors in ${name} TX | 1st Texas Realtors`,
    description: `Find a local realtor in ${name}, TX. Insider neighborhood knowledge, school districts, price trends, and 20+ years of experience in this community.`,
  }
}

export default function CityPage({ params }: { params: { city: string } }) {
  const slug = params.city ?? ''
  const displayName = slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
  const data = cityData[slug] ?? { ...defaultCity, name: displayName }

  return (
    <main>
      <Navbar />

      {/* FULL-BLEED PHOTO HERO — text at bottom, no centered overlay */}
      <section className="relative w-full h-[500px] overflow-hidden">
        <Image src={data.image} alt={`${data.name} neighborhood`} fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C3535]/90 via-[#1C3535]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-10">
          <p className="text-white/60 text-[10px] uppercase tracking-[0.25em] font-semibold mb-2">Communities → {data.name}</p>
          <h1 className="font-serif text-white text-[2.8rem] md:text-[4.2rem] font-bold leading-[1.0] mb-2">
            Realtors in {data.name}
          </h1>
          <p className="text-white/75 text-[16px] max-w-lg">{data.tagline}</p>
        </div>
      </section>

      {/* QUICK FACTS BAR — dark horizontal */}
      <section className="bg-[#0F1F1F] py-6">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-3 divide-x divide-white/10">
          {[
            { label: 'Price Range', value: data.priceRange },
            { label: 'Schools', value: data.schoolDistrict },
            { label: 'Commute', value: data.commute },
          ].map((f) => (
            <div key={f.label} className="px-6 first:pl-0">
              <p className="text-white/40 text-[10px] uppercase tracking-[0.18em] font-semibold mb-0.5">{f.label}</p>
              <p className="text-white text-[13px] font-medium leading-snug">{f.value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INTRO + TESTIMONIAL INLINE */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row gap-14 items-start">
          <div className="md:w-3/5">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Living in {data.name}</p>
            <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold leading-[1.15] mb-5">
              We know this neighborhood<br />like our own backyard.
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">{data.intro}</p>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-8">{data.detail}</p>

            {/* Inline pull quote */}
            <blockquote className="border-l-4 border-[#C4622D] pl-5 py-2 bg-[#FFF8F5]">
              <p className="font-serif text-[#1C3535] text-[15px] italic leading-relaxed mb-1">&ldquo;{data.testimonial.quote}&rdquo;</p>
              <cite className="text-[#9a9a9a] text-[11px] uppercase tracking-wider not-italic font-semibold">— {data.testimonial.author}</cite>
            </blockquote>

            <Link href="/contact" className="inline-flex items-center mt-8 bg-[#C4622D] text-white font-semibold px-7 py-3 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Contact a Local Realtor
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          {/* What makes it special */}
          <div className="md:w-2/5 shrink-0">
            <div className="bg-[#F2EDE3] p-7">
              <h3 className="font-serif text-[#1C3535] text-lg font-semibold mb-5">What makes {data.name} special</h3>
              <ul className="space-y-3">
                {data.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C4622D] shrink-0" />
                    <span className="text-[#4a4a4a] text-[14px] leading-snug">{h}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white border border-[#e8e0d4] p-7 mt-4">
              <p className="text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.2em] mb-3">Insider Tips</p>
              <ul className="space-y-3">
                {data.localTips.map((tip) => (
                  <li key={tip} className="flex items-start gap-2 text-[#4a4a4a] text-[12px] leading-relaxed">
                    <span className="shrink-0 mt-0.5 text-[#C4622D]">→</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AGENT CREDIBILITY STRIP */}
      <section className="bg-[#F2EDE3] py-14">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Why 1st Texas</p>
            <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold leading-[1.15] mb-4">
              More than listings.<br />Real local knowledge.
            </h2>
            <p className="text-[#4a4a4a] text-[14px] leading-relaxed">
              Anyone can pull up Zillow. We bring 20+ years of local expertise — we know which streets
              are quiet, which neighborhoods flood, and which listings are priced right.
              When you work with us in {data.name}, you get agents who have sold dozens of homes here.
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-2 gap-4">
            {[
              { num: '20+', label: 'Years in this market' },
              { num: '100+', label: 'Combined experience' },
              { num: 'Top 3%', label: 'Texas Realtors every year' },
              { num: '5★', label: '200+ client reviews' },
            ].map((stat) => (
              <div key={stat.num} className="bg-white p-5 text-center border-t-2 border-[#C4622D]">
                <p className="font-serif text-[#1C3535] text-[2rem] font-bold leading-none mb-1">{stat.num}</p>
                <p className="text-[#6a6a6a] text-[12px] leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1C3535] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-white text-[2rem] font-bold mb-4">
            Ready to buy or sell in {data.name}?
          </h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
            No pressure, no obligation — just real guidance from people who know this community.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Contact a Realtor
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/communities" className="text-white/70 text-xs font-semibold uppercase tracking-[0.15em] hover:text-white transition-colors">
              ← View All Communities
            </Link>
          </div>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
