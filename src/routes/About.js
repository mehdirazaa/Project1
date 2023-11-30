import React from 'react';
import HeroImage2 from '../components/HeroImage2';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="About" text="Some info about us"/>
      <Footer/>
    </div>
  )
}

export default About
