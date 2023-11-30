import React from 'react';
import HeroImage2 from '../components/HeroImage2';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Work from '../components/Work';

const Sorting = () => {
  return (
    <div>
      <Navbar/>
      <HeroImage2 heading="Do you know what are sorting algorithms?" text="Kindly scroll down to view multiple sorting algorithms"/>
      <Work/>
      <Footer/>
    </div>
  )
}

export default Sorting;
