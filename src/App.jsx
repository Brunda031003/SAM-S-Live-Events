import React, { useEffect, useState } from 'react'
import Landing from './components/Landing.jsx'
import AboutUs from './components/AboutUs.jsx'
import Services from './components/Services.jsx'
import EventTypes from './components/EventTypes.jsx'
import DomeGallery from './components/DomeGallery.jsx'
import DynamicMasonrySection from './components/DynamicMasonrySection.jsx'
import PhotographyBridge from './components/PhotographyBridge.jsx'
import ContactUs from './components/ContactUs.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
// Masonry will be dynamically imported to avoid import-time module resolution errors

const App = () => {
  return (
    <>
      {/* Render primary site sections first to isolate rendering issues */}
      <Navbar />
      <Landing />
      <AboutUs />
      <Services />
      <EventTypes />

      {/* Temporarily disabled heavy/experimental galleries to debug blank page
          Uncomment once the app is confirmed working in the browser. */}
      
        {/* <div style={{ width: '100vw', height: '100vh' }} className="bg-[var(--color-bg)]">
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={0}
            segments={34}
            dragDampening={2}
            grayscale={false}
          />
        </div> */}
      

      {/* Dynamically load Masonry to avoid import-time errors */}
      <DynamicMasonrySection />
      <PhotographyBridge />
      <ContactUs />
      <Footer />
    </>
  )
}

export default App