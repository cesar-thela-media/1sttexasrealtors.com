import Link from 'next/link'
import Image from 'next/image'

const footerNav = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Buying', href: '/home-buyers' },
  { label: 'Selling', href: '/seller-services' },
  { label: 'Communities', href: '/communities' },
  { label: 'Reviews', href: '/realtor-reviews' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/contact' },
]

const communities = [
  'Clear Lake City', 'Seabrook', 'Kemah', 'El Lago', 'Nassau Bay',
  'Taylor Lake Village', 'Webster', 'League City', 'Friendswood', 'Bacliff',
  'Santa Fe', 'Dickinson', 'La Marque', 'Hitchcock', 'Shoreacres',
  'Bayou Vista', 'San Leon', 'Texas City', 'Alvin', 'Manvel', 'Pearland',
]

export default function Footer() {
  return (
    <footer className="bg-[#1C3535] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Top row: Logo + Nav + Social */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logo.png"
              alt="1st Texas Realtors"
              width={120}
              height={40}
              className="object-contain"
            />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            {footerNav.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/80 text-xs font-medium hover:text-white transition-colors uppercase tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social icons */}
          <div className="flex items-center gap-3 shrink-0">
            <SocialLink href="https://www.facebook.com/1stTexasRealtors/" aria="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </SocialLink>
            <SocialLink href="#" aria="Instagram">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
            </SocialLink>
            <SocialLink href="mailto:info@1sttexasrealtors.com" aria="Email">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </SocialLink>
          </div>
        </div>

        {/* Legal links */}
        <div className="flex flex-wrap gap-x-5 gap-y-1 mb-4">
          {[
            { label: 'TREC Information About Brokerage Services', href: 'https://1sttexasrealtors.com/wp-content/uploads/David-Karstedt-IABS.pdf' },
            { label: 'TREC Consumer Protection Notice', href: 'https://1sttexasrealtors.com/wp-content/uploads/TREC-CN-1-4-1_1.pdf' },
            { label: 'Privacy Policy', href: '/privacy-policy' },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="text-white/50 text-[11px] hover:text-white/80 transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Communities */}
        <div className="border-t border-white/10 pt-5">
          <p className="text-white/50 text-[11px] leading-relaxed">
            <span className="font-semibold text-white/70">Communities We Serve: </span>
            {communities.join(' • ')}
          </p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, aria, children }: { href: string; aria: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      aria-label={aria}
      className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:text-white hover:border-white transition-colors"
    >
      {children}
    </a>
  )
}
