import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="relative w-full bg-white py-24 text-[#3B3B3B]"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* LEFT IMAGE BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative orange block behind the main image */}
            <div className="absolute left-0 top-1/2 hidden h-116 w-150 -translate-y-1/2 bg-[#fd9500]/20 lg:block z-0"></div>

            {/* Thin orange accent (bring in front of the image) */}
            <div className="absolute left-0 top-1/2 hidden h-116 w-1 -translate-y-1/2 bg-[#fd9500] rounded-md shadow-sm lg:block z-30"></div>

            {/* Main Image */}
            <img
              src="/images/about-main1.avif"
              alt="Event setup"
              className="relative h-[420px] w-full object-cover z-20"
            />

            {/* Orange Badge */}
            <div className="absolute bottom-6 left-6 bg-[#fd9500] px-6 py-3">
              <p className="text-sm font-semibold uppercase tracking-widest text-white">
                Event Management Company
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          {/* RIGHT CONTENT */}
<motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  className="relative pl-0 lg:pl-10"
>
  {/* Floating Side Image */}
  {/* Decorative orange block (behind image) */}
  <div className="absolute  left-144 top-1/2 hidden h-56 w-40 -translate-y-1/2 bg-[#fd9500]/20 lg:block z-0"></div>

  {/* Thin orange accent positioned below the decorative block (horizontal) */}
  <div className="absolute left-137 top-[88%] hidden h-1 w-46 bg-[#fd9500] rounded-md shadow-sm lg:block z-0"></div>

  <img
    src="/images/about-side2.avif"
    alt="Live event celebration"
    className="absolute right-0 left-144 top-1/2 hidden h-52 w-40 -translate-y-1/2 object-cover shadow-lg lg:block z-20"
  />

  {/* Section Title */}
  <div className="mb-6 flex items-center gap-4">
    <h2 className="font-heading text-3xl font-bold text-[#3B3B3B]">
      About Us
    </h2>
    <span className="h-1 w-16 bg-[#fd9500]"></span>
  </div>

  {/* Text */}
  <p className="mb-6 max-w-xl leading-relaxed text-[#424242]">
    Sams Live Events is a professional corporate event management company
    specializing in planning, designing, and executing impactful events
    for brands and organizations.
  </p>

  <p className="mb-8 max-w-xl leading-relaxed text-[#424242]">
    With a strong focus on quality, coordination, and creative execution,
    we transform ideas into memorable experiences that leave a lasting
    impression on audiences.
  </p>

  {/* CTA */}
  <button className="border border-[#fd9500] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#fd9500] transition hover:bg-[#fd9500] hover:text-white">
    Read More
  </button>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
