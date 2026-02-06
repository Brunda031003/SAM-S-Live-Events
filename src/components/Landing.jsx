import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  const scrollToPortfolio = () => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-corporate.webp"
          alt="Corporate Event"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      {/* Content */}
      <div className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Company Name */}
          <h1
            className="mb-4 font-heading text-4xl font-extrabold tracking-tight text-white md:text-6xl"
          >
            Sams Live Events
          </h1>

          {/* Accent Line */}
          <div className="mb-6 h-1 w-24 bg-[var(--color-primary)]"></div>

          {/* Tagline */}
          <h2 className="mb-6 text-2xl font-semibold text-white md:text-3xl">
            End-to-End Corporate Event Management <br />
            <span className="text-[var(--color-primary)]">
              That Delivers Impact
            </span>
          </h2>

          {/* Sub-headline */}
          <p className="mb-10 max-w-2xl text-lg text-gray-200">
            Conferences • Product Launches • Corporate Films • Brand Events
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="rounded-md bg-[var(--color-primary)] px-8 py-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-dark)] transition hover:scale-105 hover:bg-[#ffad3d]"
            >
              Plan Your Event
            </button>

            <button
              onClick={scrollToPortfolio}
              className="rounded-md border border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
            >
              View Our Work
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
