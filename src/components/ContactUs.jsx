import React from "react";
import { Mail, Phone, Instagram, Camera } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0f0f0f] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Heading */}
        <div className="mb-20">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
            Contact Us
          </p>

          <h2 className="font-heading text-4xl font-bold leading-tight md:text-5xl">
            Let’s Talk About Your <br />
            <span className="text-[var(--color-primary)]">
              Next Event
            </span>
          </h2>
        </div>

        {/* Contact Row */}
        <div className="grid gap-12 border-t border-white/10 pt-12 md:grid-cols-4">

          {/* Email */}
          <a
            href="mailto:contact@samsliveevents.com"
            className="group flex items-center gap-4 transition"
          >
            <Mail className="h-6 w-6 text-[var(--color-primary)]" />
            <span className="text-lg group-hover:text-[var(--color-primary)] transition">
              contact@samsliveevents.com
            </span>
          </a>

          {/* Phone */}
          <a
            href="tel:+919999999999"
            className="group flex items-center gap-4 transition"
          >
            <Phone className="h-6 w-6 text-[var(--color-primary)]" />
            <span className="text-lg group-hover:text-[var(--color-primary)] transition">
              +91 99999 99999
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/samsmedia.in?igsh=bWd0dmc0amcycXE0"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-4 transition"
          >
            <Instagram className="h-6 w-6 text-[var(--color-primary)]" />
            <span className="text-lg group-hover:text-[var(--color-primary)] transition">
              @samsmedia.in
            </span>
          </a>

          {/* Wedding Photography Link */}
          <a
            href="/photography"
            className="group flex items-center gap-4 font-semibold"
          >
            <Camera className="h-6 w-6 text-[var(--color-primary)]" />
            <span className="text-lg text-[var(--color-primary)] group-hover:underline">
              Wedding Photography →
            </span>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ContactUs;
