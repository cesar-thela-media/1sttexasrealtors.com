import Link from 'next/link'

const items = [
  {
    icon: <RegisterIcon />,
    title: 'Meet the Team',
    description: 'Learn about Mark and Sandra — your neighbors and your Realtors.',
    cta: 'Our Agents',
    href: '/agents',
  },
  {
    icon: <SearchIcon />,
    title: 'Search Homes',
    description: 'Explore homes for sale in Clear Lake and nearby communities.',
    cta: 'Search Now',
    href: '/clear-lake-tx-homes-for-sale',
  },
  {
    icon: <PhoneIcon />,
    title: 'Contact Us',
    description: "We're just a call or message away. Let's talk!",
    cta: 'Get In Touch',
    href: '/contact',
  },
]

export default function FooterCTA() {
  return (
    <section id="contact" className="bg-[#1C3535] py-14">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center px-8 py-8 md:py-0">
            <div className="text-white mb-4">{item.icon}</div>
            <h3 className="text-white font-serif text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed mb-5">{item.description}</p>
            <Link
              href={item.href}
              className="text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:text-[#C4622D] transition-colors"
            >
              {item.cta}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 16 16">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

function RegisterIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect x="6" y="4" width="22" height="30" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 12h14M10 18h14M10 24h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M25 26l3 3 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SearchIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <circle cx="18" cy="18" r="11" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M27 27l8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <path d="M8 8c0-1.1.9-2 2-2h5l3 8-3.5 2c1.5 3.5 4 6 7.5 7.5L24 20l8 3v5c0 1.1-.9 2-2 2C14 30 8 14 8 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}
