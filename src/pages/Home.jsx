import React from 'react'
import CinematicHero from '../components/Hero'
import HeroProductFeature from '../components/Feature'
import HeritageSection from '../components/Heritage'
import IngredientsExperience from '../components/Ing'

import CraftsmanshipStory from '../components/Craftman'
import Cta from '../components/Cta'
import ScentFinder from '../components/ScentFinder'
import SignatureScents from '../components/Signature'

import Testimonial from '../components/Testimonial'
import LandingPage from '../components/LandingPage'
const Home = () => {
  return (
    <div>
      <CinematicHero />
      <LandingPage />
      <SignatureScents />
      <ScentFinder />


      <CraftsmanshipStory />
      <HeroProductFeature />
      <Cta />


      <HeritageSection />
      <IngredientsExperience />
      <Testimonial />

    </div>
  )
}

export default Home