import React from "react";
import { motion } from "framer-motion";

const PhotographyBridge = () => {
  return (
    <section
      id="photography-bridge"
      className="relative isolate w-full overflow-hidden mt-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?q=80&w=1600"
          alt="Wedding photography"
          className="h-full w-full object-cover"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-[70vh] max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          {/* Label */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Beyond Corporate Events
          </p>

          {/* Heading */}
          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-white md:text-4xl">
            Every Great Event Tells a Story.
            <br />
            <span className="text-[var(--color-primary)]">
              Some Stories Are Personal.
            </span>
          </h2>

          {/* Storytelling Text */}
          <p className="mb-10 text-lg leading-relaxed text-gray-200">
            While we specialize in delivering high-impact corporate events,
            our creative team also captures life’s most intimate and emotional
            moments through wedding photography. From raw emotions to timeless
            celebrations, we believe every story deserves to be told beautifully.
          </p>

          {/* CTA */}
          <a
            href="/photography"
            className="inline-block rounded-md bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#3B3B3B] transition hover:scale-105 hover:bg-[#ffad3d]"
          >
            Explore Our Wedding Photography Portfolio
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotographyBridge;
