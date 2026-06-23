const stats = [
  { value: '100+', label: 'Years Combined Experience' },
  { value: '2004', label: 'Family-Owned Since 2004' },
  { value: '3%', label: 'Top 3% Realtors\nEvery Year Since 2010' },
]

export default function StatsBar() {
  return (
    <section className="bg-[#F2EDE3] py-12">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 divide-x divide-[#cfc6b8]">
        {stats.map((stat) => (
          <div key={stat.value} className="flex flex-col items-center text-center px-8 py-2">
            <span className="font-serif text-[#1C3535] text-[3.5rem] md:text-[4.5rem] font-bold leading-none mb-3">
              {stat.value}
            </span>
            <span className="text-[#6a6a6a] text-xs md:text-sm leading-snug whitespace-pre-line tracking-wide">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
