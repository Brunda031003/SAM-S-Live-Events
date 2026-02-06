import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  PartyPopper,
  Heart,
  Users,
  Music,
  Palette,
} from "lucide-react";

const services = [
  {
    title: "Corporate Events",
    desc: "Professional planning and execution of conferences, seminars, and corporate gatherings.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Party Events",
    desc: "Private and themed parties designed for unforgettable celebrations.",
    icon: <PartyPopper size={32} />,
  },
  {
    title: "Wedding Management",
    desc: "End-to-end wedding planning with seamless coordination and execution.",
    icon: <Heart size={32} />,
  },
  {
    title: "Family Events",
    desc: "Meaningful family celebrations planned with care and creativity.",
    icon: <Users size={32} />,
  },
  {
    title: "Entertainment Events",
    desc: "Live shows, performances, and large-scale entertainment experiences.",
    icon: <Music size={32} />,
  },
  {
    title: "Design & Decor",
    desc: "Creative stage, venue, and décor design tailored to your event.",
    icon: <Palette size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full overflow-hidden">
      <div className="grid lg:min-h-[700px] lg:grid-cols-4">

        {/* LEFT IMAGE — DESKTOP */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400"
            alt="Corporate Event"
            className="h-full w-full object-cover"
          />
        </div>

        {/* CENTER PANEL */}
        <div className="bg-[#3B3B3B] px-6 py-20 text-white lg:col-span-2 lg:px-10">

          {/* Title */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-1 w-10 bg-[#fd9500]" />
              <h2 className="font-heading text-3xl font-bold">Services</h2>
              <span className="h-1 w-10 bg-[#fd9500]" />
            </div>
          </div>

          {/* MOBILE VIEW */}
          <div className="grid gap-10 sm:grid-cols-2 lg:hidden">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-center"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#fd9500] text-[#3B3B3B]">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* DESKTOP VIEW */}
          <div className="hidden lg:grid grid-cols-2 gap-14">

            {/* LEFT COLUMN → SLIDE FROM LEFT */}
            <div className="space-y-14">
              {services.slice(0, 3).map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative pl-6"
                >
                  <div className="absolute -left-24 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-[#fd9500] text-[#3B3B3B]">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* RIGHT COLUMN → SLIDE FROM RIGHT */}
            <div className="space-y-14 text-right">
              {services.slice(3).map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative pr-6"
                >
                  <div className="absolute -right-24 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-[#fd9500] text-[#3B3B3B]">
                    {service.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE — DESKTOP */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200"
            alt="Event Decor"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;
