import React from 'react'
import FeaturedServices from '../components/home/FeaturedServices'
import Hero from '../components/home/Hero'

const Home = () => {
  return (
    <div className="home h-full">
      <div className="bg-[#0A192F] min-h-screen">
      <Hero />
</div>
     
      <FeaturedServices />
    </div>
  )
}

export default Home
