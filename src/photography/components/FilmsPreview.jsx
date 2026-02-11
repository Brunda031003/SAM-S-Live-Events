import { useEffect, useRef, useState } from "react";

export default function FilmsPreview() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-32"
    >
      <div className="relative max-w-7xl mx-auto px-8 text-white">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Cinematic Wedding Films
          </h2>
          <p className="mt-4 text-lg text-[#EBD9D1]">
            Stories that move, moments that last forever
          </p>
        </div>

        {/* Videos */}
        <div className="grid gap-10 md:grid-cols-2">
          {[
            "https://www.youtube.com/embed/1La4QzGeaaQ",
            "https://www.youtube.com/embed/2g811Eo7K8U",
          ].map((video, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-2xl shadow-2xl transform transition-all duration-1000 ease-out
                ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-24 opacity-0"
                }
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <iframe
                src={video}
                title="Wedding Film"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-[260px] md:h-[340px] lg:h-[380px]"
              ></iframe>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
