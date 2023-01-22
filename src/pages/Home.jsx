import React from 'react'
import LandingPage from '../components/LandingPage'
import Service from '../components/Service'
import '../style/home_style.css'


const Home = () => {
  return (
    <section className='home' id='home'>
      <LandingPage/>
      <Service/>
    </section>
  )
}

export default Home