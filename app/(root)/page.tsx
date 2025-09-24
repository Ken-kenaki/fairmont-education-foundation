import ConnectWithUs from '@/Components/ConnectWithUs'
import ContactSection from '@/Components/ContactSection'
import CareerChoicesSection from '@/Components/Countries'
import Cta from '@/Components/Cta'
import FindUsSection from '@/Components/FindUs'
import HeroSection from '@/Components/Hero'
import { main } from 'framer-motion/client'
import React from 'react'

const page = () => {
  return (
    <main className='overflow-x-hidden'>
      <HeroSection />
      <Cta />
      <CareerChoicesSection />
      <ConnectWithUs />
      <ContactSection />
      <FindUsSection />
    </main>
  )
}

export default page