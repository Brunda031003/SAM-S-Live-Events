import React from "react";
import { motion } from "framer-motion";

const PhotographyBridge = () => {
  return (
    <section
      id="photography-bridge"
      className="relative isolate w-full overflow-hidden mt-24 md:mt-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://plus.unsplash.com/premium_photo-1674235766088-80d8410f9523?q=80&w=1169&auto=format&fit=crop"
          alt="Wedding photography"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-[60vh] md:min-h-[70vh] max-w-7xl items-center px-5 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center md:mx-0 md:text-left"
        >
          {/* Label */}
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] md:text-sm">
            Beyond Corporate Events
          </p>

          {/* Heading */}
          <h2 className="mb-5 font-heading text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl">
            Every Great Event Tells a Story.
            <br />
            <span className="text-[var(--color-primary)]">
              Some Stories Are Personal.
            </span>
          </h2>

          {/* Text */}
          <p className="mb-8 text-base leading-relaxed text-gray-200 sm:text-lg">
            While we specialize in delivering high-impact corporate events,
            our creative team also captures life’s most intimate and emotional
            moments through wedding photography. From raw emotions to timeless
            celebrations, we believe every story deserves to be told beautifully.
          </p>

          {/* CTA */}
          <a
            href="/photography"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-primary)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-[#3B3B3B] transition hover:scale-105 hover:bg-[#ffad3d] sm:px-8 sm:py-4 sm:text-sm"
          >
            Explore Wedding Photography
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotographyBridge;
