import React from 'https://cdn.skypack.dev/react'; 
import Header from './Header';
import HeroHome from './HeroHome';
import FeaturesHome from './Features';
import FeaturesBlocks from './FeaturesBlocks';
import Testimonials from './Testimonials';
import Newsletter from './Newsletter';
import Footer from './Footer';

function Homes() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        {/*  Page sections */}
        <HeroHome />
        <FeaturesHome />
        <FeaturesBlocks />
        <Testimonials />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Homes;