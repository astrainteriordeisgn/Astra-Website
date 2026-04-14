import React from 'react';

import Hero from './Hero';
import Services1 from './pages/services1';
import About from './About';
import Work from './Work';
import Process from './Process';
import Blogsec from './Blog1';
import FAQ from './FAQ';
import Testimonials from './Testimonials';
import Contact from './Contact';

export default function Home() {
  return (
    <div className="bg-slate-900 text-white">
     
      <Hero />
      <Services1 />
      <About />
      <Work />
      <Process />
      <Blogsec />
      <FAQ />
      <Testimonials />
      <Contact />
     
    </div>
  );
}
