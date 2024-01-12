import Helps from '@/components/Helps/Helps'
import WhatOurStudent from '@/components/Students/WhatOurStudent'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import PartnerSlider from '@/components/OurPartner/PartnerSlider'
import ChooseYourCareer from '@/components/Career/ChooseYourCareer'
import HighRated from '@/components/HighRated'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ChooseYourCareer />
      <Helps />
      <PartnerSlider />
      <WhatOurStudent />
      <HighRated />
      <Footer />
    </div>
  )
}
