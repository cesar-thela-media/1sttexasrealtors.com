import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Our Agents | 1st Texas Realtors',
  description: 'Meet our experienced real estate agents serving Clear Lake, Seabrook, League City, and southeast Houston. Top-rated, local, and ready to help.',
}

export default function AgentsPage() {
  return (
    <main>
      <Navbar />

      {/* MINIMAL TEXT HEADER — white bg, no image */}
      <section className="bg-white pt-20 pb-12 border-b border-[#f0ece4]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-4">Our Agents</p>
          <h1 className="font-serif text-[#1C3535] text-[3.5rem] md:text-[5rem] font-bold leading-[1.0] mb-6">
            Two people.<br />One team.
          </h1>
          <p className="text-[#4a4a4a] text-[16px] leading-relaxed max-w-xl">
            When you call 1st Texas Realtors, Mark or Sandra picks up. Not an assistant, not a showing agent.
            Every deal, every call, every question — answered by the people who built this business.
          </p>
        </div>
      </section>

      {/* MARK — full-bleed left photo, right bio */}
      <section className="bg-[#F2EDE3]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row min-h-[600px]">
          <div className="md:w-[45%] relative min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=85"
              alt="Mark Hendricks"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="md:w-[55%] flex flex-col justify-center px-10 md:px-16 py-16">
            <div className="w-12 h-[2px] bg-[#C4622D] mb-5" />
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-1">Broker / Co-Founder</p>
            <h2 className="font-serif text-[#1C3535] text-[2.8rem] font-bold leading-tight mb-5">Mark Hendricks</h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-6">
              Mark has been selling homes in the Clear Lake area since 2004 and holds his broker&apos;s license.
              He grew up in Nassau Bay, played little league at Sagemont Park, and still lives three streets
              from his childhood home. His deep neighborhood knowledge and no-pressure approach have earned
              him a reputation as the Realtor people call first — and call again.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6 border-t border-[#cfc6b8] pt-6">
              <div>
                <p className="text-[#9a9a9a] text-[11px] uppercase tracking-wider mb-1">Years Active</p>
                <p className="font-serif text-[#1C3535] text-3xl font-bold">20+</p>
              </div>
              <div>
                <p className="text-[#9a9a9a] text-[11px] uppercase tracking-wider mb-1">Transactions</p>
                <p className="font-serif text-[#1C3535] text-3xl font-bold">400+</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-7">
              {['Buyer Representation', 'Market Analysis', 'New Construction', 'Investment'].map(s => (
                <span key={s} className="text-[#1C3535] text-[11px] border border-[#cfc6b8] bg-white px-3 py-1">{s}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="tel:2813330034" className="border border-[#C4622D] text-[#C4622D] text-xs font-bold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-[#C4622D] hover:text-white transition-colors">
                (281) 333-0034
              </a>
              <a href="mailto:mark@1sttexasrealtors.com" className="bg-[#C4622D] text-white text-xs font-bold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-[#A84E22] transition-colors">
                Email Mark
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SANDRA — reversed: bio left, photo right */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse min-h-[600px]">
          <div className="md:w-[45%] relative min-h-[400px]">
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=85"
              alt="Sandra Hendricks"
              fill
              className="object-cover object-top"
            />
          </div>
          <div className="md:w-[55%] flex flex-col justify-center px-10 md:px-16 py-16">
            <div className="w-12 h-[2px] bg-[#C4622D] mb-5" />
            <p className="text-[#C4622D] text-xs font-bold uppercase tracking-[0.2em] mb-1">Realtor / Co-Founder</p>
            <h2 className="font-serif text-[#1C3535] text-[2.8rem] font-bold leading-tight mb-5">Sandra Hendricks</h2>
            <p className="text-[#4a4a4a] text-[15px] leading-relaxed mb-6">
              Sandra brings a designer&apos;s eye and a teacher&apos;s patience to every transaction. Before real estate,
              she spent seven years as a licensed interior designer — which means her staging advice is the real
              thing, not guesswork. Her clients love that she&apos;s direct, detail-oriented, and always three
              steps ahead of a problem.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-6 border-t border-[#cfc6b8] pt-6">
              <div>
                <p className="text-[#9a9a9a] text-[11px] uppercase tracking-wider mb-1">Years Active</p>
                <p className="font-serif text-[#1C3535] text-3xl font-bold">18+</p>
              </div>
              <div>
                <p className="text-[#9a9a9a] text-[11px] uppercase tracking-wider mb-1">Transactions</p>
                <p className="font-serif text-[#1C3535] text-3xl font-bold">380+</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-7">
              {['Home Staging', 'Seller Services', 'Relocation', 'Listing Strategy'].map(s => (
                <span key={s} className="text-[#1C3535] text-[11px] border border-[#cfc6b8] bg-[#faf7f2] px-3 py-1">{s}</span>
              ))}
            </div>
            <div className="flex gap-3">
              <a href="tel:2813330034" className="border border-[#C4622D] text-[#C4622D] text-xs font-bold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-[#C4622D] hover:text-white transition-colors">
                (281) 333-0034
              </a>
              <a href="mailto:sandra@1sttexasrealtors.com" className="bg-[#C4622D] text-white text-xs font-bold uppercase tracking-[0.12em] px-5 py-2.5 hover:bg-[#A84E22] transition-colors">
                Email Sandra
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY strip */}
      <section className="bg-[#1C3535] py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-4">Our Philosophy</p>
          <p className="font-serif text-white text-[1.8rem] md:text-[2.4rem] font-medium leading-[1.3] max-w-2xl mx-auto mb-8">
            &ldquo;We only take on as many clients as we can personally serve — because that&apos;s the only way to do this right.&rdquo;
          </p>
          <Link href="/contact" className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-7 py-3 rounded hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em] gap-2">
            Work With Us
            <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </Link>
        </div>
      </section>

      <FooterCTA />
      <Footer />
    </main>
  )
}
