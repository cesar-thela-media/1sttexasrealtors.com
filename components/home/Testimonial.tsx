export default function Testimonial() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex gap-4 items-start">
          {/* Large quotation mark */}
          <div className="font-serif text-[#1C3535] text-8xl leading-none select-none mt-[-10px] shrink-0">
            &ldquo;
          </div>
          <div>
            <p className="font-serif text-[#1C3535] text-xl md:text-2xl leading-relaxed italic mb-4">
              Simone and David are a fantastic team to work with. They know the area, they&apos;re
              responsive, and they truly care. We felt supported every step of the way!
            </p>
            <p className="text-[#C4622D] font-semibold text-sm tracking-wide">
              &mdash; Brian &amp; Michelle R., Clear Lake
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
