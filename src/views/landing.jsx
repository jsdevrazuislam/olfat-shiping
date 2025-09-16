import About from '@/components/pages/landing/about'
import CarListings from '@/components/pages/landing/car-listings'
import Contact from '@/components/pages/landing/contact'
import FAQ from '@/components/pages/landing/faq'
import Hero from '@/components/pages/landing/hero'
import Services from '@/components/pages/landing/services'
import Testimonials from '@/components/pages/landing/testimonial'
import TrustedPartnersSection from '@/components/pages/landing/trusted-partners-section'
import Seo from '@/components/seo'
import React from 'react'

const LandingPage = () => {
  return (
    <>
      <Seo
        title="Home Page Title"
        description="A detailed description of the Home page."
        canonical="https://yourdomain.com/"
        schemaMarkup={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Your Site',
          url: 'https://yourdomain.com/',
        }}
      />
      <Hero />
      <CarListings />
      <Services />
      <About />
      <FAQ />
      <Testimonials />
      <TrustedPartnersSection />
      <Contact />
    </>
  )
}

export default LandingPage