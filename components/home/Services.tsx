import Link from 'next/link'

const services = [
  {
    icon: <HeartHouseIcon />,
    title: 'Contact a Realtor',
    description: "We're here to help with your real estate questions.",
    link: '#contact',
    cta: 'Get in Touch',
  },
  {
    icon: <SearchHouseIcon />,
    title: 'Buying a Home',
    description: 'Find the right home in the right neighborhood for you.',
    link: '/home-buyers',
    cta: 'Start Your Search',
  },
  {
    icon: <SaleHouseIcon />,
    title: 'Selling a Home',
    description: 'Get a smart plan and local expertise to sell with confidence.',
    link: '/seller-services',
    cta: 'Get Your Home Value',
  },
]

export default function Services() {
  return (
    <section className="bg-white py-14">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`flex flex-col items-center text-center px-8 py-8 ${
              i < services.length - 1 ? 'md:border-r md:border-[#e8e0d4]' : ''
            }`}
          >
            {/* Full-width orange rule at top */}
            <div className="w-full h-[2px] bg-[#C4622D] mb-9" />
            {/* Large icon */}
            <div className="mb-6 text-[#C4622D]">{s.icon}</div>
            <h3 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">{s.title}</h3>
            <p className="text-[#6a6a6a] text-sm leading-relaxed mb-7 max-w-[200px]">{s.description}</p>
            <Link
              href={s.link}
              className="text-[#C4622D] text-[10px] font-bold uppercase tracking-[0.18em] flex items-center gap-2 hover:gap-3 transition-all mt-auto"
            >
              {s.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

/* House with a heart inside — Contact */
function HeartHouseIcon() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Roof */}
      <polyline points="10,52 50,16 90,52" />
      {/* Walls */}
      <polyline points="22,42 22,84 40,84 40,64 60,64 60,84 78,84 78,42" />
      {/* Heart */}
      <path d="M50 44 C50 44 40 36 40 29 C40 24.5 43.5 21 48 21 C49.5 21 50.8 21.9 50 24 C49.2 21.9 50.5 21 52 21 C56.5 21 60 24.5 60 29 C60 36 50 44 50 44Z" strokeWidth="1.8"/>
    </svg>
  )
}

/* House with magnifier overlay — Buying */
function SearchHouseIcon() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* House */}
      <polyline points="8,52 38,20 68,52" />
      <polyline points="18,44 18,82 36,82 36,62 44,62 44,82 58,82 58,44" />
      {/* Magnifier */}
      <circle cx="72" cy="44" r="16" />
      <line x1="84" y1="56" x2="95" y2="67" strokeWidth="3" />
    </svg>
  )
}

/* For-sale sign post — Selling */
function SaleHouseIcon() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Post */}
      <line x1="68" y1="14" x2="68" y2="88" />
      {/* Sign board */}
      <rect x="42" y="14" width="36" height="34" rx="2" />
      <line x1="49" y1="26" x2="71" y2="26" />
      <line x1="49" y1="34" x2="71" y2="34" />
      <line x1="49" y1="42" x2="62" y2="42" />
      {/* House on the left */}
      <polyline points="8,60 28,38 48,60" />
      <polyline points="16,52 16,78 40,78 40,52" />
      <rect x="24" y="64" width="10" height="14" />
    </svg>
  )
}
