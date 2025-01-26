import React from 'react'
import FeaturedServices from '../components/home/FeaturedServices'
import Hero from '../components/home/Hero'

const Home = () => {
  return (
    <div className="home h-full">
      <Hero />
      <FeaturedServices />
    </div>
  )
}

export default Home
