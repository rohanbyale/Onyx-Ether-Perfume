import React from 'react'

import AboutHero from '../components/AboutHero'
import Philosopy from '../components/Philosopy'
import Social from '../components/Social'
import Story from '../components/Story'
import Note from '../components/Note'
import Location from '../components/Location'
const AboutUs = () => {
  return (
    <div>

<AboutHero />
{/* <Note /> */}
<Philosopy />

<Story />
<Location />
<Social />

    
    </div>
  )
}

export default AboutUs