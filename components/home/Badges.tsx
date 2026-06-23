const badges = [
  {
    icon: <StarBadgeIcon />,
    line1: 'TEXAS MONTHLY',
    line2: '5-STAR',
    line3: 'REAL ESTATE AGENT',
  },
  {
    icon: <RealtorBadgeIcon />,
    line1: 'LOCAL',
    line2: 'REALTOR®',
    line3: 'ASSOCIATION',
  },
  {
    icon: <MLSBadgeIcon />,
    line1: 'MULTIPLE LISTING',
    line2: 'SERVICE',
    line3: '',
  },
  {
    icon: <EHOBadgeIcon />,
    line1: 'EQUAL HOUSING',
    line2: 'OPPORTUNITY',
    line3: '',
  },
]

export default function Badges() {
  return (
    <section className="bg-white border-t border-[#e8e0d8] py-10">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
        {badges.map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="text-[#1C3535] shrink-0">{b.icon}</div>
            <div className="text-[#3a3a3a] leading-tight">
              <p className="text-[10px] font-bold tracking-wider">{b.line1}</p>
              <p className="text-[10px] font-bold tracking-wider">{b.line2}</p>
              {b.line3 && <p className="text-[10px] font-bold tracking-wider">{b.line3}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function StarBadgeIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <polygon points="21,4 24.5,14.5 35.5,14.5 27,21.5 30.5,32 21,25.5 11.5,32 15,21.5 6.5,14.5 17.5,14.5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
    </svg>
  )
}

function RealtorBadgeIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <circle cx="21" cy="21" r="18" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <polygon points="21,10 23.5,17.5 31.5,17.5 25,22 27.5,29.5 21,25 14.5,29.5 17,22 10.5,17.5 18.5,17.5" stroke="currentColor" strokeWidth="1.2" fill="none"/>
    </svg>
  )
}

function MLSBadgeIcon() {
  return (
    <svg width="52" height="32" viewBox="0 0 52 32" fill="none">
      <rect x="1" y="1" width="50" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <text x="26" y="22" textAnchor="middle" fontSize="14" fontWeight="800" fill="currentColor" fontFamily="Inter, sans-serif">MLS</text>
    </svg>
  )
}

function EHOBadgeIcon() {
  return (
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
      <rect x="1" y="1" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M8 22L21 10L34 22V35H26V27H16V35H8V22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  )
}
