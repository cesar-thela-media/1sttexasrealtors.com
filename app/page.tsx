import Navbar from '@/components/shared/Navbar'
import Hero from '@/components/home/Hero'
import StatsBar from '@/components/home/StatsBar'
import Services from '@/components/home/Services'
import MapSection from '@/components/home/MapSection'
import AboutSection from '@/components/home/AboutSection'
import Testimonial from '@/components/home/Testimonial'
import Badges from '@/components/home/Badges'
import FooterCTA from '@/components/shared/FooterCTA'
import Footer from '@/components/shared/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <Services />
      <MapSection />
      <AboutSection />
      <Testimonial />
      <Badges />
      <FooterCTA />
      <Footer />
    </main>
  )
}
