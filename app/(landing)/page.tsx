import HeaderSection from '@/components/landing/HeaderSection'
import HeroSection from '@/components/landing/heroSection'
import ProblemSection from '@/components/landing/ProblemSection'
import ProgramSection from '@/components/landing/ProgramSection'
import ServicesSection from '@/components/landing/ServicesSection'
import HowItWorks from '@/components/landing/HowItWorks'
import CTASection from '@/components/landing/CTASection'
import Footer from '@/components/landing/Footer'
import React from 'react'

export default function page() {
  return (
    <div>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
       
        <HowItWorks />
        <ProgramSection />
        <CTASection
      badge={{
        text: "Prêt à commencer ?"
      }}
      title="Votre admission en Chine commence ici"
      description="Consultation gratuite, sans engagement discutons de votre projet et voyons ensemble comment vous accompagner, de l'admission jusqu'à votre installation sur le campus."
      action={{
        text: "Discutons de votre projet",
        href: "/#contact",
      }}
    />
    
    </div>
  )
}
