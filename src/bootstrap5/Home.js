import React from 'react';
import HomeNavigation from './HomeNavigation';
import Carasoul from './Carasoul';

import About from './About';
import Services from './Services';
import Gallery from './Gallery';
import LastSec from './LastSec';
import Contact from './Contact';
import Footer from './Footer';


const Boots = () => {
  return (
    <div>
     
     <HomeNavigation/>
  <Carasoul/>
  <About/>
  <Services/>
  <Gallery/>
  <LastSec/>
  <Contact/>
  <Footer/>

  </div>
  )
}

export default Boots;