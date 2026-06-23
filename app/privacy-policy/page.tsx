import type { Metadata } from 'next'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | 1st Texas Realtors',
  description: 'Privacy policy for 1sttexasrealtors.com — how we collect, use, and protect your information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />

      {/* On-brand header with teal left accent */}
      <section className="bg-[#1C3535] py-14">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row items-end justify-between gap-6">
          <div>
            <p className="text-[#C4622D] text-[11px] font-bold uppercase tracking-[0.25em] mb-3">Legal</p>
            <h1 className="font-serif text-white text-[3rem] font-bold leading-none">Privacy Policy</h1>
          </div>
          <p className="text-white/40 text-[13px]">Last updated: January 1, 2024</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6 prose prose-sm max-w-none">
          <div className="space-y-8 text-[#4a4a4a] text-[15px] leading-relaxed">

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">1. Information We Collect</h2>
              <p>
                1st Texas Realtors (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects information you voluntarily provide when you contact us,
                fill out a form, or request information about our services. This may include your name, email address,
                phone number, and details about your real estate needs.
              </p>
              <p className="mt-3">
                We may also automatically collect certain information when you visit our website, including your IP address,
                browser type, and pages visited, through standard web server logs and analytics tools.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Respond to your inquiries and provide real estate services</li>
                <li>Send you relevant property listings and market updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">3. Information Sharing</h2>
              <p>
                We may share your information with trusted service providers who assist us in operating our website
                and conducting our business, as long as those parties agree to keep this information confidential.
                We may also disclose your information when required by law or to protect our rights.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">4. MLS Data</h2>
              <p>
                Property listing data is provided by the Houston Association of Realtors (HAR) and the Houston MLS.
                This data is subject to HAR&apos;s terms of use and may not be used for any commercial purpose without
                prior written authorization. Listing information is provided for consumers&apos; personal, non-commercial use.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">5. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies
                through your browser settings, though this may affect some functionality of our website.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">6. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                is 100% secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">7. Your Rights</h2>
              <p>
                You may request to access, correct, or delete the personal information we hold about you at any time
                by contacting us at the information below. We will respond to your request within 30 days.
              </p>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">8. Texas Real Estate Commission</h2>
              <p>
                1st Texas Realtors is licensed by the Texas Real Estate Commission (TREC).
                For information about brokerage services and consumer protections, please review:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>TREC Information About Brokerage Services</li>
                <li>TREC Consumer Protection Notice</li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-[#1C3535] text-xl font-semibold mb-3">9. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="mt-3 bg-[#F2EDE3] p-5 border-l-4 border-[#C4622D]">
                <p className="font-semibold text-[#1C3535]">1st Texas Realtors</p>
                <p>Clear Lake City, TX 77062</p>
                <p>Phone: (281) 333-0034</p>
                <p>Email: info@1sttexasrealtors.com</p>
              </div>
            </div>

            <div className="border-t border-[#f0ece4] pt-6">
              <p className="text-[#9a9a9a] text-sm">
                This Privacy Policy is effective as of January 1, 2024, and will remain in effect except with
                respect to any changes in its provisions in the future, which will be in effect immediately after
                being posted on this page. We reserve the right to update or change our Privacy Policy at any time.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
