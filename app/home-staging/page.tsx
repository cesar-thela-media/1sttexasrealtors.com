import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Home Staging | 1st Texas Realtors',
  description: 'Professional home staging consultation included with every listing. Sandra\'s design background transforms how buyers see your home — and what they offer.',
}

export default function HomeStagingPage() {
  return (
    <main>
      <Navbar />

      {/* SPLIT HERO — before/after concept */}
      <section className="relative w-full h-[480px] overflow-hidden">
        <div className="absolute inset-0 flex">
          <div className="w-1/2 relative">
            <Image src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80" alt="Before staging" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-[#1C3535]/60 flex items-end p-6">
              <span className="text-white/70 text-xs uppercase tracking-[0.2em] font-semibold">Before</span>
            </div>
          </div>
          <div className="w-1/2 relative">
            <Image src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" alt="After staging" fill className="object-cover object-center" />
            <div className="absolute inset-0 bg-transparent flex items-end p-6">
              <span className="text-white text-xs uppercase tracking-[0.2em] font-semibold">After Staging</span>
            </div>
          </div>
          {/* center divider */}
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 z-10" />
        </div>
        {/* overlay text */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
          <div className="bg-white/95 px-8 py-5 text-center shadow-xl">
            <p className="text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.25em] mb-1">Home Staging</p>
            <h1 className="font-serif text-[#1C3535] text-[2rem] md:text-[2.8rem] font-bold leading-tight">
              Buyers decide in seconds.<br />Make them count.
            </h1>
          </div>
        </div>
      </section>

      {/* RUST STATS BAR */}
      <section className="bg-[#C4622D] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 divide-x divide-white/30">
          {[
            { n: '73%', l: 'of staged homes sell faster' },
            { n: '6–10%', l: 'average price increase' },
            { n: '11 days', l: 'avg. time on market vs. 90+ for unstaged' },
          ].map(s => (
            <div key={s.n} className="text-center px-6 py-2">
              <p className="font-serif text-white text-[2.8rem] font-bold leading-none mb-1">{s.n}</p>
              <p className="text-white/75 text-[11px] leading-snug">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SANDRA'S BACKGROUND */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-14">
          <div className="md:w-1/2">
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Why Ours Is Different</p>
            <h2 className="font-serif text-[#1C3535] text-[2.4rem] font-bold leading-[1.15] mb-5">
              A trained eye,<br />not a checklist.
            </h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-4">
              Sandra spent seven years as a licensed interior designer before co-founding 1st Texas Realtors.
              Her staging consultation isn&apos;t advice from a list — it&apos;s a trained design eye applied to your
              specific home, your target buyer, and the current market.
            </p>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed">
              Most Realtors tell you to declutter and light a candle. Sandra will tell you exactly which wall
              to repaint, which furniture to move, and which $40 accessory will make your living room photograph
              twice as large.
            </p>
          </div>
          <div className="md:w-1/2 relative h-80 overflow-hidden shadow-md">
            <Image src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80" alt="Staged living room" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* PHOTO GALLERY GRID */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">The Results</p>
          <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold mb-8">Rooms that sell themselves.</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80', span: 'col-span-2 row-span-2' },
              { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80', span: '' },
              { img: 'https://images.unsplash.com/photo-1560185008-b033106af5c3?w=600&q=80', span: '' },
              { img: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=600&q=80', span: '' },
              { img: 'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=600&q=80', span: '' },
            ].map((g, i) => (
              <div key={i} className={`relative overflow-hidden ${g.span} h-48`}>
                <Image src={g.img} alt="Staged room" fill className="object-cover hover:scale-105 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS — horizontal steps */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">The Process</p>
          <h2 className="font-serif text-[#1C3535] text-[2.2rem] font-bold mb-10">How we stage your home.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
            {[
              { n: '01', t: 'Consultation', b: "Sandra walks through every room and gives specific, actionable advice." },
              { n: '02', t: 'Declutter & Depersonalize', b: "We help you see your home through a buyer's eyes — ruthlessly." },
              { n: '03', t: 'Strategic Styling', b: "Furniture, lighting, accents — optimized for photos and showings." },
              { n: '04', t: 'Professional Photos', b: "Great staging without great photos is a wasted opportunity." },
            ].map((s, i) => (
              <div key={i} className={`p-6 border-t-2 border-[#C4622D] ${i < 3 ? 'md:border-r md:border-r-[#e8e0d4]' : ''}`}>
                <p className="font-serif text-[#C4622D] text-[2.5rem] font-bold leading-none mb-3">{s.n}</p>
                <h3 className="font-serif text-[#1C3535] text-base font-semibold mb-2">{s.t}</h3>
                <p className="text-[#6a6a6a] text-[13px] leading-relaxed">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCLUDED CALLOUT */}
      <section className="bg-[#1C3535] py-14">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-3">Good News</p>
          <h3 className="font-serif text-white text-[1.8rem] font-bold mb-3">Included with every listing. No extra charge.</h3>
          <p className="text-white/65 text-[15px] leading-relaxed mb-7 max-w-xl mx-auto">
            When you sell through 1st Texas Realtors, Sandra&apos;s full staging consultation is part of the package.
          </p>
          <Link href="/seller-services" className="inline-flex items-center text-white border border-white/40 px-6 py-2.5 text-xs font-bold uppercase tracking-[0.15em] gap-2 hover:border-white hover:bg-white/10 transition-colors">
            See Full Seller Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
