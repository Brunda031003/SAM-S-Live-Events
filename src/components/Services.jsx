import React from "react";
import {
  Briefcase,
  PartyPopper,
  Heart,
  Users,
  Music,
  Palette,
} from "lucide-react";

const servicesLeft = [
  {
    title: "Corporate Events",
    desc: "Professional planning and execution of conferences, seminars, and corporate gatherings.",
    icon: <Briefcase size={32} />,
  },
  {
    title: "Wedding Management",
    desc: "End-to-end wedding planning with seamless coordination and execution.",
    icon: <Heart size={32} />,
  },
  {
    title: "Entertainment Events",
    desc: "Live shows, performances, and large-scale entertainment experiences.",
    icon: <Music size={32} />,
  },
];

const servicesRight = [
  {
    title: "Party Events",
    desc: "Private and themed parties designed for unforgettable celebrations.",
    icon: <PartyPopper size={32} />,
  },
  {
    title: "Family Events",
    desc: "Meaningful family celebrations planned with care and creativity.",
    icon: <Users size={32} />,
  },
  {
    title: "Design & Decor",
    desc: "Creative stage, venue, and décor design tailored to your event.",
    icon: <Palette size={32} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="w-full">
      <div className="grid min-h-[700px] grid-cols-1 lg:grid-cols-4">
        
        {/* LEFT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1400"
            alt="Corporate Event"
            className="h-full w-full object-cover"
          />
        </div>

        {/* CENTER PANEL */}
        <div className="relative bg-[#3B3B3B] px-10 py-20 text-white lg:col-span-2">
          
          {/* Title */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-1 w-10 bg-[#fd9500]" />
              <h2 className="font-heading text-3xl font-bold">Services</h2>
              <span className="h-1 w-10 bg-[#fd9500]" />
            </div>
          </div>

          {/* Services */}
          <div className="grid grid-cols-1 gap-14 md:grid-cols-2">

            {/* LEFT SERVICES */}
            <div className="space-y-14">
              {servicesLeft.map((service, i) => (
                <div key={i} className="relative pl-6">
                  
                  {/* ICON – CENTERED ON LEFT EDGE */}
                  <div className="absolute -left-24 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-[#fd9500] text-[#3B3B3B]">
                    {service.icon}
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* RIGHT SERVICES */}
            <div className="space-y-14">
              {servicesRight.map((service, i) => (
                <div key={i} className="relative pr-6 text-right">
                  
                  {/* ICON – CENTERED ON RIGHT EDGE */}
                  <div className="absolute -right-24 top-1/2 flex h-20 w-20 -translate-y-1/2 items-center justify-center rounded-full bg-[#fd9500] text-[#3B3B3B]">
                    {service.icon}
                  </div>

                  <h3 className="mb-2 text-lg font-semibold">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Wedding Decor"
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Services;
