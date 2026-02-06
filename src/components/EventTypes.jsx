import React from "react";
import { motion } from "framer-motion";

const eventTypes = [
  {
    title: "Conferences",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200",
  },
  {
    title: "Product Launches",
    image:
      "https://images.unsplash.com/photo-1759496434742-771c92e66103?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Corporate Offsites",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200",
  },
  {
    title: "Award Ceremonies",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200",
  },
  {
    title: "Brand Activations",
    image:
      "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=1200",
  },
  {
    title: "Corporate Films",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200",
  },
];

const EventTypes = () => {
  return (
    <section id="event-types" className="bg-[var(--color-bg)] py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Our Expertise
          </p>
          <h2 className="font-heading text-3xl font-bold md:text-4xl">
            Event Types We Specialize In
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-3">
  {eventTypes.map((event, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative h-56 sm:h-64 lg:h-72 cursor-pointer overflow-hidden"
    >
      <img
        src={event.image}
        alt={event.title}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-black/60 transition group-hover:bg-black/70"></div>

      <div className="absolute inset-0 flex items-center justify-center px-2 text-center">
        <h3 className="text-sm sm:text-base lg:text-xl font-semibold tracking-wide text-white">
          {event.title}
        </h3>
      </div>

      <span className="absolute inset-x-0 bottom-0 h-1 bg-[var(--color-primary)] opacity-0 transition group-hover:opacity-100"></span>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default EventTypes;
