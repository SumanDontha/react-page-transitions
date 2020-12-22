import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/img-2.jpg';

const About = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title='Beautiful View' desc='Never seen before.'/>
    </div>
  )
}

export default About
