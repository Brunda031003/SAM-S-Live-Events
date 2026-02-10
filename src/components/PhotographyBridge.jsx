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
          alt="Creative photography"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-[65vh] md:min-h-[70vh] max-w-7xl items-center px-5 py-12 sm:py-16 md:px-6 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center md:mx-0 md:text-left"
        >
          {/* Label */}
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--color-primary)] md:text-sm">
            Beyond Event Execution
          </p>

          {/* Heading */}
          <h2 className="mb-6 font-heading text-3xl font-bold leading-tight text-white sm:text-4xl md:text-4xl">
            We Don’t Just Manage Events.
            <br />
            <span className="text-[var(--color-primary)]">
              We Capture Stories.
            </span>
          </h2>

          {/* Updated Paragraph */}
          <p className="mb-10 text-base leading-relaxed text-gray-200 sm:text-lg">
            Alongside delivering seamless corporate events, our creative team
            brings moments to life through photography. From large-scale
            productions to candid human connections, we focus on visual
            storytelling that feels authentic, timeless, and impactful.
          </p>

          {/* CTA Button */}
          <a
            href="/photography"
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#fd9500] to-[#ffb347] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[#3B3B3B] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl"
          >
            {/* Glow */}
            <span className="absolute inset-0 -z-10 rounded-full bg-[#fd9500]/40 blur-xl transition-opacity duration-300 group-hover:opacity-80"></span>

            {/* Text */}
            <span>Explore Our Photography</span>

            {/* Arrow */}
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PhotographyBridge;
