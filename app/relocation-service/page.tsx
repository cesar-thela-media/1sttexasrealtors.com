import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Relocation Services | 1st Texas Realtors – Clear Lake, TX',
  description: 'Moving to Houston? We help out-of-state buyers find the right home in the right neighborhood — virtual tours, honest advice, and boots on the ground since 2004.',
}

const journey = [
  {
    step: '01',
    phase: 'Before You Arrive',
    title: 'We become your eyes on the ground',
    items: ['Virtual home tours via live video', 'Honest neighborhood commentary', 'School zone deep-dives', 'Price range guidance'],
  },
  {
    step: '02',
    phase: 'Finding Your Home',
    title: 'We search the full market for you',
    items: ['MLS + off-market inventory', 'Video walkthroughs of top candidates', 'Offer strategy from a distance', 'Negotiation with your deadline in mind'],
  },
  {
    step: '03',
    phase: 'After You Land',
    title: 'We help you settle in',
    items: ['Vendor referrals (movers, AC, plumber)', 'Rental bridge options if needed', 'School enrollment guidance', 'Community introductions'],
  },
]

const employers = [
  { name: 'NASA / JSC', area: 'Nassau Bay · El Lago · Clear Lake City' },
  { name: 'Texas Medical Center', area: 'League City · Webster · Friendswood' },
  { name: 'Oil & Gas', area: 'Pasadena · La Porte · Deer Park' },
  { name: 'Military / BRAC', area: 'Seabrook · Dickinson · Texas City' },
]

const faqs = [
  { q: "Can you help me before I've even visited Clear Lake?", a: "Absolutely. We start many relocation relationships over the phone or video call, months before the client arrives. We can help you understand the market, compare neighborhoods, and even preview homes for you virtually." },
  { q: "What areas do people relocating to Clear Lake typically end up in?", a: "It depends on the employer and lifestyle. NASA/JSC folks often love Nassau Bay, El Lago, and Clear Lake City. Medical center commuters tend to prefer League City or Webster for I-45 access. Families with school-age kids often gravitate toward Friendswood or Pearland." },
  { q: "Do you charge extra for relocation clients?", a: "No. Our fee structure is the same for relocation clients as for locals. In most cases, the seller pays our commission — so our buyer representation costs you nothing out of pocket." },
]

export default function RelocationServicePage() {
  return (
    <main>
      <Navbar />

      {/* BLUE HORIZON HERO — light blue, text-centered, no image */}
      <section className="bg-[#C8DDE9] py-24 relative overflow-hidden">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-[#1C3535]/5" />
        <div className="absolute -left-20 -bottom-20 w-[300px] h-[300px] rounded-full bg-[#C4622D]/5" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-5">Relocation Services</p>
          <h1 className="font-serif text-[#1C3535] text-[3rem] md:text-[5rem] font-bold leading-[1.0] mb-6 max-w-3xl mx-auto">
            You&apos;re moving to Texas.<br />We&apos;ll make it easy.
          </h1>
          <p className="text-[#2a4a4a] text-[17px] leading-relaxed max-w-lg mx-auto mb-10">
            We help out-of-state buyers find the right home in the right neighborhood — without the guesswork
            of buying from a distance.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center bg-[#1C3535] text-white font-semibold px-8 py-4 hover:bg-[#142828] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Start the Conversation
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            <Link href="/communities" className="text-[#1C3535] text-[11px] font-bold uppercase tracking-[0.15em] hover:text-[#C4622D] transition-colors">
              Explore Communities →
            </Link>
          </div>
        </div>
      </section>

      {/* 3-COLUMN JOURNEY CARDS */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Your Relocation Journey</p>
            <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold">How we guide you through every phase.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-[#e8e0d4]">
            {journey.map((j, i) => (
              <div key={i} className={`p-8 flex flex-col gap-4 ${i < 2 ? 'md:border-r border-[#e8e0d4]' : ''} ${i > 0 ? 'border-t md:border-t-0 border-[#e8e0d4]' : ''}`}>
                <div className="flex items-center gap-3">
                  <span className="font-serif text-[#C4622D] text-[3rem] font-bold leading-none">{j.step}</span>
                  <div>
                    <p className="text-[#9a9a9a] text-[10px] uppercase tracking-wider font-semibold">{j.phase}</p>
                    <h3 className="font-serif text-[#1C3535] text-base font-semibold leading-snug">{j.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2 mt-2">
                  {j.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-[#4a4a4a] text-[13px]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C4622D] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMPLOYER SECTION — who typically relocates here */}
      <section className="bg-[#1C3535] py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-10">
            <div>
              <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.2em] mb-2">Who We Help</p>
              <h2 className="font-serif text-white text-[2rem] font-bold leading-[1.15]">
                We regularly work with professionals<br />relocating for these employers.
              </h2>
            </div>
            <p className="text-white/60 text-[14px] leading-relaxed max-w-xs">
              Each employer cluster has a different ideal neighborhood. We know exactly where each type of commuter thrives.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-white/10">
            {employers.map((e) => (
              <div key={e.name} className="bg-[#1C3535] p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="shrink-0 w-2 h-2 rounded-full bg-[#C4622D] mt-1.5 md:mt-0" />
                <div>
                  <p className="font-serif text-white text-base font-semibold">{e.name}</p>
                  <p className="text-white/50 text-[12px]">Best neighborhoods: {e.area}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE + TEXT — visual context */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/2">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Hundreds of Relocation Clients</p>
            <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold leading-[1.15] mb-5">
              We&apos;ve been the boots<br />on the ground since 2004.
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">
              The Clear Lake area draws people from across the country — NASA scientists, medical professionals,
              oil & gas executives, and military families. Many buy a home here before they&apos;ve ever visited.
            </p>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-6">
              We&apos;ve done this long enough to know what out-of-state buyers need most: honesty, context,
              and someone who will tell them when a home isn&apos;t right for them — not just push them toward a closing.
            </p>
            <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
              Talk to Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
          <div className="md:w-1/2 relative h-80 overflow-hidden shadow-md">
            <Image src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80" alt="Video call home tour" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">Common Questions</p>
          <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold mb-10">Relocation FAQ</h2>
          <div className="divide-y divide-[#f0ece4]">
            {faqs.map((faq, i) => (
              <div key={i} className="py-7 flex gap-8">
                <span className="font-serif text-[#C4622D] text-[2.5rem] font-bold leading-none shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3 className="font-serif text-[#1C3535] text-lg font-semibold mb-3">{faq.q}</h3>
                  <p className="text-[#4a4a4a] text-[14px] leading-relaxed">{faq.a}</p>
                </div>
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
