import React from 'react'
import Hero from './Hero'
import Stats from './Stats'
import Pricing from './Pricing'
import Education from './Education'
import Awards from './Awards'
import SingUpSuggestion from '../../SingUpSuggestion'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <Stats/>
        <Pricing/>
         <Awards/>
        <Education/>
        <SingUpSuggestion/>
       
    </div>
  )
}

export default HomePage