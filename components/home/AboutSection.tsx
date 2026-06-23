export default function AboutSection() {
  return (
    <section className="bg-[#F2EDE3] py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Polaroid placeholder */}
        <div className="md:w-2/5 shrink-0 flex justify-center">
          <div className="relative">
            {/* Tape strip at top */}
            <div
              className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-5 z-10 rotate-[-1deg]"
              style={{ background: 'rgba(210,195,160,0.65)' }}
            />
            {/* Polaroid frame */}
            <div className="bg-white p-3 pb-6 shadow-md rotate-[-2deg]">
              {/* Gray placeholder image area */}
              <div
                className="w-64 h-64"
                style={{ background: '#c8c2ba' }}
              />
              {/* "Our photo goes here!" annotation */}
              <div className="relative mt-4 flex items-start gap-1 px-2">
                {/* Arrow */}
                <svg
                  className="shrink-0 mt-1 text-[#8a7060]"
                  width="22"
                  height="22"
                  viewBox="0 0 28 28"
                  fill="none"
                >
                  <path
                    d="M22 6 C18 8, 10 10, 6 20"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path
                    d="M4 22 L6 16 L10 20 Z"
                    fill="currentColor"
                  />
                </svg>
                <p
                  className="text-[#8a7060] text-sm leading-snug"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: 'italic' }}
                >
                  Our photo<br />goes here!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="md:w-3/5">
          <h2 className="font-serif text-[#1C3535] text-[2rem] md:text-[2.6rem] font-bold leading-[1.15] mb-6">
            We&apos;re a local husband-and-wife team, and we&apos;ve never left.
          </h2>
          <div className="space-y-4 text-[#4a4a4a] text-[15px] leading-relaxed">
            <p>
              We grew up on the Clear Lake peninsula and chose to raise our family here.
              We love this community and are passionate about helping our neighbors make smart moves.
            </p>
            <p>
              Whether you&apos;re buying, selling, or just exploring your options, we&apos;re here
              for you&mdash;no pressure, just honest guidance.
            </p>
          </div>
          <p className="mt-6 font-serif text-[#C4622D] text-lg font-medium italic">
            Let&apos;s make your next move a great one.
          </p>
        </div>
      </div>
    </section>
  )
}
