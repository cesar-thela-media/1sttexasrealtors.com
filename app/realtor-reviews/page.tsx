import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Client Reviews | 1st Texas Realtors',
  description: 'Real reviews from real clients. See why buyers and sellers across Clear Lake, Seabrook, and League City trust 1st Texas Realtors time and again.',
}

const featured = {
  text: "Mark and Sandra made our first home purchase feel effortless. They knew every neighborhood, every street, and exactly what to watch out for. We couldn't have done it without them.",
  name: 'Brian & Michelle R.',
  location: 'Clear Lake, TX',
}

const reviews = [
  { name: 'Patricia K.', location: 'Seabrook', rating: 5, text: "I've used a lot of Realtors over the years. These two are the real deal. Honest, hardworking, and they actually pick up the phone. Sold my house in 9 days.", date: 'Jan 2024', size: 'large' },
  { name: 'David & Lisa T.', location: 'Nassau Bay', rating: 5, text: "We relocated from out of state and had no idea where to start. Mark walked us through every community with the patience of someone who truly loves where he lives.", date: 'Nov 2023', size: 'small' },
  { name: 'James H.', location: 'El Lago', rating: 5, text: "Sandra helped me sell my parents' home after my father passed. She handled everything with such care and professionalism during a really hard time. I'll never forget that.", date: 'Oct 2023', size: 'small' },
  { name: 'Carla & Mike O.', location: 'Taylor Lake Village', rating: 5, text: "Third time we've used 1st Texas. There's a reason we keep coming back — they're just the best in the area. Period.", date: 'Aug 2023', size: 'small' },
  { name: 'Tony F.', location: 'Kemah', rating: 5, text: "Listed with another agent first — big mistake. Switched to Mark and Sandra and it was a completely different experience. Under contract in two weeks at full ask.", date: 'Jun 2023', size: 'large' },
  { name: 'Jennifer & Paul A.', location: 'Webster', rating: 5, text: "As first-time buyers we had a million questions. They answered every single one with patience and zero judgment. They made us feel like we were their only clients.", date: 'May 2023', size: 'small' },
  { name: 'Robert N.', location: 'League City', rating: 5, text: "I've referred four people to them. That says everything. Genuinely trustworthy people who know the Clear Lake market inside and out.", date: 'Apr 2023', size: 'small' },
  { name: 'Shannon M.', location: 'Friendswood', rating: 5, text: "Sandra staged my house beautifully and their marketing photos were stunning. We had multiple offers the first weekend. Couldn't be happier.", date: 'Feb 2023', size: 'small' },
]

function Stars({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: n }).map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 text-[#C4622D]" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 1l1.8 5.4H15l-4.6 3.4 1.8 5.5L8 12.1l-4.2 3.2 1.8-5.5L1 6.4h5.2z"/>
        </svg>
      ))}
    </div>
  )
}

export default function ReviewsPage() {
  return (
    <main>
      <Navbar />

      {/* DARK HERO — mega quote, stars, no image */}
      <section className="bg-[#1C3535] py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-[#C4622D]" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 1l1.8 5.4H15l-4.6 3.4 1.8 5.5L8 12.1l-4.2 3.2 1.8-5.5L1 6.4h5.2z"/>
              </svg>
            ))}
          </div>
          <p className="font-serif text-white/40 text-[6rem] leading-none mb-0 select-none">&ldquo;</p>
          <blockquote className="font-serif text-white text-[1.6rem] md:text-[2.2rem] font-medium leading-[1.3] -mt-8 mb-6 max-w-3xl mx-auto">
            {featured.text}
          </blockquote>
          <p className="text-[#C4622D] text-sm font-semibold">— {featured.name}, {featured.location}</p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="font-serif text-white text-[3.5rem] font-bold leading-none">5.0</p>
              <p className="text-white/50 text-xs mt-1">Average Rating</p>
            </div>
            <div className="w-px h-16 bg-white/20" />
            <div className="text-center">
              <p className="font-serif text-white text-[3.5rem] font-bold leading-none">200+</p>
              <p className="text-white/50 text-xs mt-1">Client Reviews</p>
            </div>
            <div className="w-px h-16 bg-white/20" />
            <div className="text-center">
              <p className="font-serif text-white text-[3.5rem] font-bold leading-none">Top 3%</p>
              <p className="text-white/50 text-xs mt-1">Texas Realtors</p>
            </div>
          </div>
        </div>
      </section>

      {/* RATING BARS */}
      <section className="bg-white py-12 border-b border-[#f0ece4]">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-6 text-center">Rating Breakdown</p>
          <div className="space-y-2">
            {[
              { stars: 5, pct: 97 },
              { stars: 4, pct: 2 },
              { stars: 3, pct: 1 },
            ].map(({ stars, pct }) => (
              <div key={stars} className="flex items-center gap-3">
                <span className="text-[#6a6a6a] text-xs w-12 text-right">{stars} star</span>
                <div className="flex-1 h-2 bg-[#f0ece4] rounded-full overflow-hidden">
                  <div className="h-2 bg-[#C4622D] rounded-full" style={{ width: `${pct}%` }} />
                </div>
                <span className="text-[#9a9a9a] text-xs w-8">{pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEW GRID — varied card sizes */}
      <section className="bg-[#F2EDE3] py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-2">All Reviews</p>
          <h2 className="font-serif text-[#1C3535] text-[2rem] font-bold mb-10">What our clients say</h2>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
            {reviews.map((r, i) => (
              <div key={i} className="break-inside-avoid bg-white p-6 shadow-sm">
                <Stars n={r.rating} />
                <blockquote className={`font-serif text-[#2c2c2c] italic mt-3 mb-4 leading-relaxed ${r.size === 'large' ? 'text-[16px]' : 'text-[14px]'}`}>
                  &ldquo;{r.text}&rdquo;
                </blockquote>
                <div className="flex items-center justify-between border-t border-[#f0ece4] pt-3 mt-auto">
                  <div>
                    <p className="text-[#1C3535] text-[12px] font-semibold">{r.name}</p>
                    <p className="text-[#C4622D] text-[11px]">{r.location}</p>
                  </div>
                  <p className="text-[#b0a89e] text-[10px]">{r.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEAVE A REVIEW CTA */}
      <section className="bg-white py-16 border-t border-[#f0ece4]">
        <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h3 className="font-serif text-[#1C3535] text-2xl font-bold mb-2">Did we help you find your home?</h3>
            <p className="text-[#4a4a4a] text-[14px] leading-relaxed">Your story helps future clients know what to expect. Share your experience.</p>
          </div>
          <Link href="/contact" className="shrink-0 inline-flex items-center bg-[#1C3535] text-white font-semibold px-7 py-3 rounded hover:bg-[#142828] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Share Your Story
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
