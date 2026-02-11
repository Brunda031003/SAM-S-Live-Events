import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Services from "./components/Services";
import EventsPreview from "./components/EventsPreview";
import EventGallery from "./pages/EventGallery";
import FilmsPreview from "./components/FilmsPreview";
import TestimonialsCollage from "./components/TestimonialsCollage";
import Contact from "./components/Contact";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";

const PhotographyApp = () => {
  useEffect(() => {
    // Force immediate scroll to top when component mounts
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1600&q=80')",
        }}
      ></div>

      {/* Overlay */}
      <div className="fixed inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <Routes>
          {/* Photography Home */}
          <Route
            path="/"
            element={
              <>
                <Landing />
                <About />
                <Services />
                <EventsPreview />
                <FilmsPreview />
                <TestimonialsCollage />
                <Contact />
              </>
            }
          />

          {/* Event Gallery */}
          <Route path="events/:slug" element={<EventGallery />} />
        </Routes>
      </div>
    </div>
  );
};

export default PhotographyApp;
