import ConnectWithUs from '@/Components/ConnectWithUs'
import ContactSection from '@/Components/ContactSection'
import CareerChoicesSection from '@/Components/Countries'
import Cta from '@/Components/Cta'
import FindUsSection from '@/Components/FindUs'
import HeroSection from '@/Components/Hero'
import React from 'react'

const page = () => {
  return (
    <>
      <HeroSection />
      <Cta />
      <CareerChoicesSection />
      <ConnectWithUs />
      <ContactSection />
      <FindUsSection />
    </>
  )
}

export default page