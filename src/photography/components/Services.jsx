import { useEffect, useRef, useState } from 'react';

export default function Services() {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    "Wedding Photography",
    "Wedding Films",
    "Pre-Wedding Shoot",
    "Corporate Events",
    "Album Design",
    "Baby & Family Portraits",
    "Photo Booths",
    "Baby Showers",
    "Maternity Shoots",
    "Engagement Sessions",
  ];

  return (
    <section className="py-28 relative z-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Elegant storytelling through photography and film
          </p>
        </div>

        {/* Capsule Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const isLeftColumn = index % 2 === 0;
            const isVisible = visibleItems.includes(index);

            return (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`
                  group flex items-center justify-center
                  h-20 px-10
                  border border-white/60
                  rounded-full
                  text-white
                  text-xl font-serif
                  tracking-wide
                  transition-all duration-700 ease-out
                  hover:bg-white hover:text-[#B87C4C]
                  hover:-translate-y-1
                  ${
                    isVisible
                      ? 'opacity-100 translate-x-0'
                      : `opacity-0 ${
                          isLeftColumn ? '-translate-x-20' : 'translate-x-20'
                        }`
                  }
                `}
              >
                {service}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
