import React from 'react'
import LandingPage from '../components/LandingPage'
import Service from '../components/Service'
import Skills from '../components/Skills'
import '../style/home_style.css'


const Home = () => {
  return (
    <section className='home' id='home'>
      <LandingPage/>
      <Service/>
      <Skills/>
    </section>
  )
}

export default Home