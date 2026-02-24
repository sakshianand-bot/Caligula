import { lazy, Suspense } from 'react'
import TopBar from './components/TopBar'
import Navigation from './components/Navigation'
import Hero from './components/Hero'

// Lazy load below-fold components for better initial load performance
const TrustBadges = lazy(() => import('./components/TrustBadges'))
const UrgencySection = lazy(() => import('./components/UrgencySection'))
const Services = lazy(() => import('./components/Services'))
const About = lazy(() => import('./components/About'))
const Guarantee = lazy(() => import('./components/Guarantee'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const ContactCTA = lazy(() => import('./components/ContactCTA'))
const Footer = lazy(() => import('./components/Footer'))
const FloatingCTA = lazy(() => import('./components/FloatingCTA'))

// Lightweight loading fallback
const SectionFallback = () => (
  <div className="min-h-[200px] bg-slate-50 animate-pulse" />
)

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <TopBar />
      <Navigation />
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <TrustBadges />
        <UrgencySection />
        <Services />
        <About />
        <Guarantee />
        <Testimonials />
        <ContactCTA />
        <Footer />
        <FloatingCTA />
      </Suspense>
    </div>
  )
}

export default App
