import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/img-1.jpg';

const Services = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title='Look at this service' desc='Can you belive this?'/>
    </div>
  )
}

export default Services
