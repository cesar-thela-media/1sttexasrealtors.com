import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#C4622D] mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-[#2c2c2c] mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center bg-[#C4622D] text-white font-semibold px-6 py-3 rounded hover:bg-[#A84E22] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </main>
  )
}