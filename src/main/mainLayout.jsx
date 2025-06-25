import { useState } from 'react'
import HeroSection from './components/Hero';
import About from './components/About';
import Service from './components/Sevice';
import Projects from './components/Project';
import Testimonial from './components/Testimoni';


function MainLayout() {
  return (
    <>
      <div>
        <HeroSection />
        <About />
        <Service />
        <Projects />
        <Testimonial />
      </div>
    </>
  )
}

export default MainLayout;
