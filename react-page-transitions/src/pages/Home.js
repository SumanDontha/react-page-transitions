import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Image from '../images/img-4.jpg';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero image={Image} title='Experience Nature' desc='Once in a Lifetime'/>
    </div>
  )
}

export default Home
