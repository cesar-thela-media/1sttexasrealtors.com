import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative w-full h-[580px] md:h-[660px] overflow-hidden">
      {/* Suburban craftsman house — bright daytime, right-weighted composition */}
      <Image
        src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=1600&q=85"
        alt="Beautiful suburban home in Clear Lake"
        fill
        className="object-cover object-right"
        priority
      />
      {/* Cream gradient — lighter so house is visible; still readable for dark teal text */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/75 via-white/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-10 h-full flex flex-col justify-center">
        <div className="max-w-[520px]">
          <h1 className="font-serif text-[#1C3535] text-[3rem] md:text-[4rem] lg:text-[5.5rem] font-bold leading-[1.0] mb-5">
            Family Owned<br />Since 2004
          </h1>
          <p className="text-[#1C3535] text-[15px] leading-loose mb-9" style={{ opacity: 0.9 }}>
            Your neighbors. Your Realtors.<br />
            Proudly serving Clear Lake<br />
            and the communities we call home.
          </p>
          <Link
            href="#contact"
            className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-8 py-3.5 rounded hover:bg-[#A84E22] transition-colors text-xs uppercase tracking-[0.15em]"
          >
            Contact a Realtor
          </Link>
        </div>
      </div>
    </section>
  )
}
