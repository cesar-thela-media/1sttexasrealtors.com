import Image from 'next/image'

interface PageHeroProps {
  title: string
  subtitle?: string
  imageUrl: string
  imageAlt: string
  breadcrumb?: string
}

export default function PageHero({ title, subtitle, imageUrl, imageAlt, breadcrumb }: PageHeroProps) {
  return (
    <section className="relative w-full h-[320px] md:h-[400px] overflow-hidden">
      <Image
        src={imageUrl}
        alt={imageAlt}
        fill
        className="object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C3535]/85 via-[#1C3535]/60 to-[#1C3535]/30" />
      <div className="relative z-10 max-w-7xl mx-auto px-10 h-full flex flex-col justify-center">
        {breadcrumb && (
          <p className="text-white/60 text-xs uppercase tracking-[0.2em] mb-3 font-medium">{breadcrumb}</p>
        )}
        <h1 className="font-serif text-white text-[2.4rem] md:text-[3.5rem] font-bold leading-[1.1] mb-3 max-w-[560px]">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/80 text-base leading-relaxed max-w-[460px]">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
