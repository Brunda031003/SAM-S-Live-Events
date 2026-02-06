import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <section
      id="about"
      className="w-full bg-[var(--color-bg)] py-20 text-white"  
    >
      <div className="mx-auto max-w-7xl px-6">
        
        {/* MOBILE HEADING */}
        <div className="mb-8 block lg:hidden">
          <div className="flex items-center gap-4">
            <h2 className="font-heading text-3xl font-bold">
              About Us
            </h2>
            <span className="h-1 w-16 bg-[#fd9500]"></span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <img
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Event setup"
              className="h-[360px] w-full object-cover lg:h-[420px]"
            />

            {/* Badge */}
            <div className="mt-4 inline-block bg-[#fd9500] px-5 py-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-white">
                Event Management Company
              </p>
            </div>
          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            {/* DESKTOP HEADING */}
            <div className="mb-6 hidden lg:flex items-center gap-4">
              <h2 className="font-heading text-3xl font-bold">
                About Us
              </h2>
              <span className="h-1 w-16 bg-[#fd9500]"></span>
            </div>

            <p className="mb-6 max-w-xl leading-relaxed text-white">
              Sams Live Events is a professional corporate event management company
              specializing in planning, designing, and executing impactful events
              for brands and organizations.
            </p>

            <p className="mb-8 max-w-xl leading-relaxed text-white">
              With a strong focus on quality, coordination, and creative execution,
              we transform ideas into memorable experiences that leave a lasting
              impression on audiences.
            </p>

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
